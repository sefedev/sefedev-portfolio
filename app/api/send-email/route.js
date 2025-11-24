import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.json();

    const { name, email, mobile, message } = formData || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email or message" },
        { status: 400 }
      );
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASSWORD;

    if (!user || !pass) {
      console.error("Missing mail credentials (GMAIL_USER / GMAIL_PASSWORD).");
      return NextResponse.json(
        { error: "Mail credentials not configured on the server" },
        { status: 500 }
      );
    }

    // Create a transporter object using your email service credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    await transporter.verify();

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

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const msg = error?.message || "Error sending email";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
