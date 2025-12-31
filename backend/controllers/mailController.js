const nodemailer = require("nodemailer");

// Configure transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Existing admin reply (KEEP THIS)
exports.sendReply = async (req, res) => {
  const { to, subject, body } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: body,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send email", error: err });
  }
};

exports.sendNewsletterWelcome = async (email) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to Roaming Phlebotomy & Wellness Center",
    html: `
      <div style="font-family: Arial; line-height:1.6;">
        <h2>Welcome!</h2>
        <p>
          Thank you for subscribing to <strong>Roaming Phlebotomy & Wellness Center</strong>.
        </p>
        <p>
          You will now receive health tips, wellness updates, and important announcements.
        </p>
        <br />
        <p>Warm regards,</p>
        <p><strong>RP&WC Team</strong></p>
      </div>
    `,
  });
};
