import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'siddhantjain6810@gmail.com',
      subject: `New message from ${name}`,
      text: `First Name: ${firstName}\n Last Name: ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
