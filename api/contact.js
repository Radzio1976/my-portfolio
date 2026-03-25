import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    console.log("Function triggered");

    const data = req.body;
    console.log("Received data:", data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: data.email,
      to: process.env.EMAIL_USER,
      subject: "Wiadomość z portfolio",
      text: data.message,
    });

    console.log("Mail sent:", info.messageId);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);

    return res.status(500).json({ success: false });
  }
}
