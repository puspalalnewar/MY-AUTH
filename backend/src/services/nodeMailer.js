const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

const sendEmail = async (to, subject, value) => {
  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 30px; border: 1px solid #ddd; border-radius: 10px;">
          
          <h2 style="text-align: center; color: #333;">
            Verify Your Email
          </h2>

          <p style="font-size: 16px; color: #555;">
            Hello,
          </p>

          <p style="font-size: 16px; color: #555;">
            Your OTP for email verification is:
          </p>

          <div style="text-align: center; margin: 25px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #2563eb;">
              ${value}
            </span>
          </div>

          <p style="font-size: 14px; color: #777;">
            This OTP is valid for 10 minutes.
          </p>

          <p style="font-size: 14px; color: #777;">
            If you did not request this OTP, please ignore this email.
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">

          <p style="text-align: center; font-size: 12px; color: #999;">
            © 2026 Your App Name. All rights reserved.
          </p>

        </div>
      `,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

module.exports = sendEmail;
