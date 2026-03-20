const nodemailer = require("nodemailer");

exports.handler = async function (event) {
  try {
    console.log("Function triggered");

    const data = JSON.parse(event.body);
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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Mail error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
};
