import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Determine the base URL for the logo
    // In production, define NEXT_PUBLIC_URL in your env variables (e.g., https://imadkhan.online)
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://imadkhan.online';
    const logoUrl = `${baseUrl}/logo.png`;
    
    // Get current timestamp for the record
    const timestamp = new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "kimad1728@gmail.com",
      subject: `New Message: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <style>
              body { margin: 0; padding: 0; background-color: #000000; font-family: 'Courier New', Courier, monospace; }
              a { color: #22d3ee; text-decoration: none; }
              .hover-text:hover { color: #ffffff !important; }
            </style>
          </head>
          <body style="background-color: #000000; margin: 0; padding: 40px 10px; color: #ffffff;">
            
            <!-- Main Container: Sharp borders, No radius, Dark BG -->
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #0a0a0a; border: 1px solid #333333; margin: 0 auto; border-collapse: collapse;">
              
              <!-- Header Section -->
              <tr>
                <td style="padding: 30px; border-bottom: 1px solid #333333; background-color: #050505;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" valign="middle">
                        <!-- Logo Image -->
                        <img src="${logoUrl}" alt="IMAD" width="120" height="120" style="display: block; border: 0;" />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Content Section -->
              <tr>
                <td style="padding: 40px 30px;">
                  
                  <!-- Field 01: Name -->
                  <div style="margin-bottom: 30px;">
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #888888; text-transform: uppercase;">Name</p>
                    <h2 style="margin: 0; font-size: 12px; color: #ffffff; font-weight: 400;">
                      ${name}
                    </h2>
                  </div>

                  <!-- Field 02: Email -->
                  <div style="margin-bottom: 30px;">
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #888888; text-transform: uppercase;">Email Address</p>
                    <h2 style="margin: 0; font-size: 12px; color: #ffffff; font-weight: 400;">
                      <a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a>
                    </h2>
                  </div>

                  <!-- Field 03: Message -->
                  <div style="margin-bottom: 10px;">
                    <p style="margin: 0 0 10px 0; font-size: 12px; color: #888888; text-transform: uppercase;">Message</p>
                    <div style="background-color: #111111; border: 1px solid #333333; padding: 20px; color: #dddddd; font-size: 10px; line-height: 1.6;">
                      ${message.replace(/\n/g, '<br/>')}
                    </div>
                  </div>

                </td>
              </tr>

              <!-- Footer Section -->
              <tr>
                <td style="padding: 20px 30px; background-color: #050505; border-top: 1px solid #333333;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="left" style="font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #666666;">
                        ${timestamp}
                      </td>
                      <td align="right" style="font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #666666;">
                        Sent from Portfolio
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            </table>
            
          </body>
        </html>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to transmit message" }, { status: 500 });
  }
}