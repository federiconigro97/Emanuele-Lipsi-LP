import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, email, power, message } = req.body;

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured');
    }

    const resend = new Resend(resendApiKey);

    const htmlContent = `
      <h2>Nuova richiesta dal sito DichiarazioneDiConsumo</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nome</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Azienda</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Potenza Impianto</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${power}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Messaggio</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
        </tr>
      </table>
    `;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'federiconigro7@gmail.com',
      subject: `Nuova richiesta da ${name} - ${company}`,
      html: htmlContent,
      replyTo: email
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
