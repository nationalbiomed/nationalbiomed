import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Convert file to buffer
const fileToBuffer = async (file) => {
  if (file && file instanceof Blob) {
    const arrayBuffer = await file.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } else {
    throw new Error("Invalid file received or no file uploaded.");
  }
};

export async function POST(request) {
  try {
    // Parse form data
    const formData = await request.formData();
    const formDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      coverLetter: formData.get("coverLetter"),
      resume: formData.get("resume"), // This will be a file object
    };

    // Ensure that the resume is provided
    if (!formDetails.resume) {
      throw new Error("Resume is required.");
    }

    // Convert the resume file to a Buffer
    const resumeBuffer = await fileToBuffer(formDetails.resume);

    // Create a Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail's SMTP service
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address (use environment variable)
        pass: process.env.EMAIL_PASS, // Your Gmail password or app-specific password (use environment variable)
      },
    });

    // Prepare the email details
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email address (Gmail)
      to: [
        process.env.EMAIL_USER, // Admin email
        "hrhead@centralcapitalservices.com",
      ].join(", "), // Admin's email (same as sender for now)
      subject: `New Job Application for ${formDetails.name}`,
      text: `You have received a new job application from ${formDetails.name}. \n\nFullName: ${formDetails.name} \nPhone: ${formDetails.phone} \nEmail: ${formDetails.email} \n\nCover Letter: \n${formDetails.coverLetter}`,
      attachments: [
        {
          filename: formDetails.resume.name, // Using the resume filename
          content: resumeBuffer, // Attach the resume as a Buffer
        },
      ],
    };

    // Prepare the auto-reply email for the user
    const autoReplyMailOptions = {
      from: process.env.EMAIL_USER,
      to: formDetails.email, // Send to the user's email
      subject: "Thank you for contacting us!",
      text: `Dear ${formDetails.name},\n\nThank you for reaching out to us. We have received your application and will get back to you shortly.\n\nBest regards,\nCentral Capital Services`,
    };

    // Send the application email
    const info = await transporter.sendMail(mailOptions);

    // Send the auto-reply email to the user
    const autoReplyInfo = await transporter.sendMail(autoReplyMailOptions);
    console.log("Auto-reply email sent: %s", autoReplyInfo.messageId);

    // Return a success response
    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 201 } // Successful submission, status 201
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to submit application", error: error.message },
      { status: 500 }
    );
  }
}
