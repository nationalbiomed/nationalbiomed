import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, message } = await req.json();

      if (!name || !email || !phone || !message) {
        return NextResponse.json(
          { status: "error", message: "All fields are required." },
          { status: 400 }
        );
      }

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        // service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Your email (as an environment variable)
          pass: process.env.EMAIL_PASS, // Your email password (as an environment variable)
        },
      });

      const notificationMailOptions = {
        from: process.env.EMAIL_USER, // Sender's email
        to: [
          process.env.EMAIL_USER, // Admin email
          "info@centralcapitalservices.com",
          "md@centralcapitalservices.com",
        ].join(", "), // Admin's email (same as sender for now)
        subject: `Contact form submission from ${name}`,
        text: `You have received a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        replyTo: email, // Allow the admin to reply directly to the user
      };

      // Prepare the auto-reply email for the user
      const autoReplyMailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // Send to the user's email
        subject: "Thank you for contacting us!",
        text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nCentral Capital Services`,
      };

      // Send the notification email to the admin
      const notificationInfo = await transporter.sendMail(
        notificationMailOptions
      );
      console.log("Notification email sent: %s", notificationInfo.messageId);

      // Send the auto-reply email to the user
      const autoReplyInfo = await transporter.sendMail(autoReplyMailOptions);
      console.log("Auto-reply email sent: %s", autoReplyInfo.messageId);

      // Respond back with a success status
      return NextResponse.json(
        { status: "success", message: "Message sent successfully!" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle any errors that occur while sending the email
      return NextResponse.json(
        {
          status: "error",
          message:
            "An error occurred while sending the email. Please try again later.",
        },
        { status: 500 }
      );
    }
  } else {
    // If the method is not POST, return 405 Method Not Allowed
    return NextResponse.json(
      { status: "error", message: "Method Not Allowed" },
      { status: 405 }
    );
  }
}
