import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    const payload = {
      from: "Mahoney Tech Solutions <noreply@mahoneytechsolutions.com>",
      to: "kylar@mahoneytechsolutions.com",
      subject: `New Lead: ${service} — ${name}`,
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name || ""}</p>
        <p><strong>Email:</strong> ${email || ""}</p>
        <p><strong>Phone:</strong> ${phone || ""}</p>
        <p><strong>Service:</strong> ${service || ""}</p>
        <p><strong>Message:</strong> ${message || ""}</p>
      `,
    };

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      payload.reply_to = email;
    }

    const { data, error } = await resend.emails.send(payload);

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  }
}
