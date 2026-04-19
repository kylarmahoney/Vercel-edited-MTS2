import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const payload = {
      from: "Mahoney Tech Solutions <noreply@mahoneytechsolutions.com>",
      to: "kylar@mahoneytechsolutions.com",
      subject: `New Lead: ${service || "Unknown Service"} — ${name || "Unknown Name"}`,
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not provided"}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
      `,
    };

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      payload.reply_to = email;
    }

    const { data, error } = await resend.emails.send(payload);

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
