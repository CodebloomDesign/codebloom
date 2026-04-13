import { EmailMessage } from "cloudflare:email";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/contact") {
      try {
        const data = await request.json();

        const name = (data.name || "").trim();
        const email = (data.email || "").trim();
        const company = (data.company || "").trim();
        const phone = (data.phone || "").trim();
        const service = (data.service || "").trim();
        const projectUrl = (data.projectUrl || "").trim();
        const message = (data.message || "").trim();

        if (!name || !email || !message) {
          return Response.json(
            { success: false, message: "Missing required fields." },
            { status: 400 }
          );
        }

        const subject = `New contact form message from ${name}`;
        const body = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          `Phone: ${phone}`,
          `Service: ${service}`,
          `Website: ${projectUrl}`,
          ``,
          `Message:`,
          message
        ].join("\n");

        const from = "noreply@codebloomdesign.com";
        const to = "codebloomdesign@gmail.com";

        const rawMessage = [
          `From: CodeBloom Design Website <${from}>`,
          `To: CodeBloom Design <${to}>`,
          `Reply-To: ${name} <${email}>`,
          `Subject: ${subject}`,
          "MIME-Version: 1.0",
          "Content-Type: text/plain; charset=UTF-8",
          "",
          body
        ].join("\r\n");

        const emailMessage = new EmailMessage(from, to, rawMessage);
        await env.CONTACT_EMAIL.send(emailMessage);

        return Response.json({
          success: true,
          message: "Message sent. We will follow up by email soon."
        });
      } catch (error) {
        return Response.json(
          { success: false, message: "Something went wrong." },
          { status: 500 }
        );
      }
    }

    return env.ASSETS.fetch(request);
  }
};
