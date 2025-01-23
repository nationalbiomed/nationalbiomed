"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessagesSquare, Phone } from "lucide-react";
import { addContact } from "./actions/contact";

const Contact = () => {
  const [state, formAction] = useFormState(addContact, null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    await formAction(formData);
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            <span className="text-green-600">Get </span>
            <span className="text-blue-600">In </span>
            <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to assist you. Fill out the form or reach out through
            other channels.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="grid gap-8 sm:grid-cols-2">
            <ContactInfo
              icon={<Mail className="h-6 w-6 text-green-600" />}
              title="Email Us"
              description="Our team is ready to assist."
              link="mailto:biomedsuppliers2018@gmail.com"
              linkText="biomedsuppliers2018@gmail.com"
            />
            <ContactInfo
              icon={<MessagesSquare className="h-6 w-6 text-blue-600" />}
              title="Live Chat Support"
              description="Reach out for quick help."
              link="https://wa.me/+9779841242752"
              linkText="Start a new chat"
            />
            <ContactInfo
              icon={<MapPin className="h-6 w-6 text-green-600" />}
              title="Visit Us"
              description="Drop by our office for a chat."
              link="https://maps.app.goo.gl/wjY1ytPVP8CxQEWKA"
              linkText="Tripura Marg, Kathmandu, Nepal"
            />
            <ContactInfo
              icon={<Phone className="h-6 w-6 text-blue-600" />}
              title="Call Us"
              description="We're available Mon-Fri, 9am-5pm."
              link="tel:01-4222353"
              linkText="01-4222353"
            />
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <form action={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <FormField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Your First Name"
                  error={state?.error?.firstName?.[0]}
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Your Last Name"
                  error={state?.error?.lastName?.[0]}
                />
              </div>
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Your Email"
                error={state?.error?.email?.[0]}
              />
              <FormField
                label="Phone no."
                name="phone"
                type="tel"
                placeholder="Your Number"
                error={state?.error?.phone?.[0]}
              />
              <div className="mb-6">
                <Label htmlFor="message">
                  Your Message<sup className="ml-0.5 text-red-500">*</sup>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  className="mt-1"
                />
                {state?.error?.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.error.message[0]}
                  </p>
                )}
              </div>
              <div className="flex items-center mb-6">
                <Checkbox id="agreeToTerms" name="agreeToTerms" />
                <Label
                  htmlFor="agreeToTerms"
                  className="ml-2 text-sm text-gray-600"
                >
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    privacy policy
                  </a>
                </Label>
              </div>
              {state?.error?.agreeToTerms && (
                <p className="mb-4 text-sm text-red-500">
                  {state.error.agreeToTerms[0]}
                </p>
              )}
              <Button className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
            {state?.success && (
              <p className="mt-4 text-green-600 text-center">
                Thank you for your message. We'll be in touch soon!
              </p>
            )}
          </div>
        </div>
        <div className="mt-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Our Location
          </h2>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509823!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e2b3%3A0x5045675218ceed30!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7803457317414!2d85.31369097492248!3d27.693183026116984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1974713b11db%3A0xb090fa0149283ed6!2sNational%20Biomedical%20Suppliers!5e0!3m2!1sen!2snp!4v1734496908183!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, description, link, linkText }) => (
  <div className="flex flex-col items-start">
    {icon}
    <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 text-blue-600 hover:underline"
    >
      {linkText}
    </a>
  </div>
);

const FormField = ({ label, name, type, placeholder, error }) => (
  <div>
    <Label htmlFor={name}>
      {label}
      <sup className="ml-0.5 text-red-500">*</sup>
    </Label>
    <Input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="mt-1"
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default Contact;
