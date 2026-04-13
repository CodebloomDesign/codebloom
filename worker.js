import { EmailMessage } from "cloudflare:email";
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/contact') {
      try {
        const data = await request.json();

        const name = (data.name || '').trim();
        const email = (data.email || '').trim();
        const company = (data.company || '').trim();
        const phone = (data.phone || '').trim();
        const service = (data.service || '').trim();
        const projectUrl = (data.projectUrl || '').trim();
        const message = (data.message || '').trim();

        if (!name || !email || !message) {
          return Response.json(
            { success: false, message: 'Missing required fields.' },
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
        ].join('\n');

      const mailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [
                  {
                    email: 'codebloomdesign@gmail.com',
                    name: 'CodeBloom Design'
                  }
                ]
              }
            ],
            from: {
              email: 'noreply@codebloomdesign.com',
              name: 'CodeBloom Design Website'
            },
            subject,
            content: [
              {
                type: 'text/plain',
                value: body
              }
            ],
            reply_to: {
              email,
              name
            }
          })
        });
const mailText = await mailResponse.text();

if (!mailResponse.ok) {
  return Response.json(
    { success: false, message: mailText || 'Email send failed.' },
    { status: 500 }
  );
}

        return Response.json({
          success: true,
          message: 'Message sent. We will follow up by email soon.'
        });
      } catch (error) {
        return Response.json(
          { success: false, message: 'Something went wrong.' },
          { status: 500 }
        );
      }
    }

    return env.ASSETS.fetch(request);
  }
};
