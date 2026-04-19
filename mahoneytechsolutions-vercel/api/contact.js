import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, contact, service, message } = req.body;

    await resend.emails.send({
      from: 'Mahoney Tech Solutions <noreply@mahoneytechsolutions.com>',
      to: 'kylar@mahoneytechsolutions.com',
      replyTo: contact,
      subject: `New Lead: ${service} — ${name}`,
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Email failed to send' });
  }
}
