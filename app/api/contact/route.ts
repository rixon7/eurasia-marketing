import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Eurasia Marketing <noreply@eurasiamarketing.com>',
    to: 'info@eurasiamarketing.com',
    replyTo: email,
    subject: subject ? `Contact Form: ${subject}` : `New enquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0C2D4A; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ffffff; margin: 0;">New Contact Form Submission</h2>
          <p style="color: #7EB3D4; margin: 4px 0 0;">eurasiamarketing.com</p>
        </div>
        <div style="background: #f8fbff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #dde8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #dde8f0; width: 100px; color: #5A7D9A; font-size: 13px; font-weight: bold;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #dde8f0; color: #1A3A52; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #dde8f0; color: #5A7D9A; font-size: 13px; font-weight: bold;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #dde8f0; color: #1A3A52; font-size: 14px;"><a href="mailto:${email}" style="color: #2196F3;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #dde8f0; color: #5A7D9A; font-size: 13px; font-weight: bold;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #dde8f0; color: #1A3A52; font-size: 14px;">${subject || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; vertical-align: top; color: #5A7D9A; font-size: 13px; font-weight: bold;">Message</td>
              <td style="padding: 10px 0; color: #1A3A52; font-size: 14px; white-space: pre-line;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 12px; background: #e8f1fc; border-radius: 6px; font-size: 12px; color: #5A7D9A;">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
