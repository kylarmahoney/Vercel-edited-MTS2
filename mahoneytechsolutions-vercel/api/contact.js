import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, contact, service, message } = await req.json();

    const cleanName = name?.trim() || "Not provided";
    const cleanContact = contact?.trim() || "Not provided";
    const cleanService = service?.trim() || "Not provided";
    const cleanMessage = message?.trim() || "Not provided";

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanContact);

    const payload = {
      from: "Mahoney Tech Solutions <noreply@mahoneytechsolutions.com>",
      to: "kylar@mahoneytechsolutions.com",
      subject: `New Lead: ${cleanService} — ${cleanName}`,
      template: {
        id: "YOUR_TEMPLATE_ID_HERE",
        variables: {
          NAME: cleanName,
          CONTACT: cleanContact,
          SERVICE: cleanService,
          MESSAGE: cleanMessage,
        },
      },
    };

    if (isEmail) {
      payload.reply_to = cleanContact;
    }

    const { data, error } = await resend.emails.send(payload);

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: error.message || "Failed to send email", details: error },
        { status: 400 }
      );
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("API route error:", err);
    return Response.json(
      { error: err.message || "Server error", details: err },
      { status: 500 }
    );
  }
}
