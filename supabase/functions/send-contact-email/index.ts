import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Field length caps (mirror client-side validation)
const LIMITS = {
  name: 100,
  email: 255,
  subject: 200,
  message: 2000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape HTML to prevent injection in email clients
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendEmail(to: string[], subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return res.json();
}

const GENERIC_ERROR = "Unable to send message. Please try again later.";
const GENERIC_VALIDATION_ERROR = "Please check your input and try again.";

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactEmailRequest = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    // Validate presence
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: GENERIC_VALIDATION_ERROR }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate length caps
    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      subject.length > LIMITS.subject ||
      message.length > LIMITS.message
    ) {
      return new Response(
        JSON.stringify({ error: GENERIC_VALIDATION_ERROR }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return new Response(
        JSON.stringify({ error: GENERIC_VALIDATION_ERROR }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Escape user input before embedding in email HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    // Send notification email to Sheikh Mohsin
    const notificationEmail = await sendEmail(
      ["sheikhmohsin9311@gmail.com"],
      `New Contact: ${subject}`,
      `
        <h2>New Message from Portfolio</h2>
        <p><strong>From:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    );

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to sender (best-effort).
    let confirmationSent = false;
    try {
      const confirmationEmail = await sendEmail(
        [email],
        "Thank you for your message",
        `
          <h2>Thank you for reaching out, ${safeName}!</h2>
          <p>I have received your message regarding "<strong>${safeSubject}</strong>" and will respond at my earliest convenience.</p>
          <p>Best regards,<br>Sheikh Mohsin<br>FLAME University, Pune</p>
        `
      );

      confirmationSent = true;
      console.log("Confirmation email sent:", confirmationEmail);
    } catch (confirmationError: any) {
      console.warn(
        "Confirmation email failed (continuing without it):",
        confirmationError?.message ?? confirmationError
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message received",
        confirmationSent,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    // Log details server-side, return generic message to client
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: GENERIC_ERROR }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
