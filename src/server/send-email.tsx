"use server";
import nodemailer from "nodemailer";
import validator from "validator";
import xss from "xss";

export async function sendEmail(form: FormData) {
  // Extract form data
  const name = form.get("name")?.toString();
  const email = form.get("email")?.toString();
  const message = form.get("message")?.toString();

  // Validate form data
  if (!name || !email || !message) {
    throw new Error(
      `Incomplete data: ${JSON.stringify({ name, email, message })}`,
    );
  }

  if (!validator.isEmail(email)) {
    throw new Error(`Invalid email address: ${email}`);
  }

  // Sanitize inputs
  const sanitizedEmail = validator.normalizeEmail(email);
  const sanitizedName = xss(name);
  const sanitizedMessage = xss(message);

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Send mail with defined transport object
  if (sanitizedEmail) {
    await transporter.sendMail({
      replyTo: sanitizedEmail,
      to: "devbyjonah@gmail.com",
      subject: `Portfolio Contact from ${sanitizedName}`,
      text: sanitizedMessage,
    });
    return true;
  }
}
