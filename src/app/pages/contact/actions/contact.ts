'use server'

import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
  agreeToTerms: z.boolean().refine(val => val === true, "You must agree to the privacy policy")
})

export async function addContact(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
    agreeToTerms: formData.get('agreeToTerms') === 'on'
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    })

    if (!response.ok) {
      throw new Error('Failed to submit contact form')
    }

    const result = await response.json()
    return { success: true, message: result.message }
  } catch (error) {
    return { error: { server: ['An error occurred while submitting the form. Please try again.'] } }
  }
}

