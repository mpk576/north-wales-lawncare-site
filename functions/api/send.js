export async function onRequestPost(context) {
  const { request, env } = context;

  const body = await request.json();

  const tsVerify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: body.turnstileToken,
        remoteip: request.headers.get("CF-Connecting-IP"),
      }),
    },
  );
  const tsResult = await tsVerify.json();

  if (!tsResult.success) {
    return new Response(
      JSON.stringify({ error: "Turnstile verification failed" }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const formSubmitEmails = env.FORM_SUBMIT_EMAILS.split(",");
  const formSenderEmail = env.FORM_SENDER_EMAIL;

  const html = `
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${body.message}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: formSenderEmail,
      to: formSubmitEmails,
      subject: "Website contact form",
      html: html,
    }),
  });

  const data = await res.json();
  console.log("Resend response", res.status, JSON.stringify(data));
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
