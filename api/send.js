const { Resend } = require('resend');

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Only POST requests are accepted.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY environment variable is missing.' });
  }

  const resend = new Resend(apiKey);

  // Parse body
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      // ignore
    }
  }

  const { name, email, subject, message } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide your name, email, and message.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['siddhardhagudiwada133@gmail.com'],
      reply_to: email,
      subject: subject ? `${subject} — from ${name}` : `New Portfolio Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #0f172a 0%, #1a56db 100%); padding: 28px 32px; color: #ffffff; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
            .header p { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.8); }
            .content { padding: 28px 32px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px; }
            .value { font-size: 15px; font-weight: 600; color: #0f172a; }
            .value-link { font-size: 15px; color: #1a56db; text-decoration: none; font-weight: 500; }
            .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; font-weight: normal; }
            .footer { background: #f1f5f9; padding: 16px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Portfolio Inquiry</h1>
              <p>Message submitted via your portfolio contact form</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From / Recruiter</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Work Email</span>
                <div><a href="mailto:${email}" class="value-link">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">Subject</span>
                <div class="value" style="font-weight: 500; color: #334155;">${subject || 'General Inquiry'}</div>
              </div>
              <div class="field" style="margin-bottom: 0;">
                <span class="label">Message</span>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              Tip: You can click <strong>Reply</strong> in your email client to directly reply to ${name} (<a href="mailto:${email}" style="color: #1a56db;">${email}</a>).
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: error.message || 'Failed to send email via Resend' });
    }

    return res.status(200).json({ success: true, messageId: data.id });
  } catch (err) {
    console.error('Internal Error:', err);
    return res.status(500).json({ error: err.message || 'Server error occurred while sending email' });
  }
};
