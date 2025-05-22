import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


export async function POST(req) {

  try {
    const formData = await req.json();

    const name = formData.name
    const email = formData.email
    const mobile = formData.mobile
    const message = formData.message

    // Create a transporter object using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your email service (e.g., 'SendGrid', 'Mailgun')
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD, 
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Recipient email address
      replyTo: email,
      subject: "New Message for Sefe Dev",
      html: `
          <p>Message from,</p>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Mobile Number: ${mobile}</p>
          <br />
          <p>${message}</p>
          `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" });
  }
}