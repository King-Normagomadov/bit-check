import { Resend } from 'resend';

// Vercel Serverless Function to handle contact form submissions via Resend
export default async function handler(req, res) {
  // CORS Configuration
  const allowedOrigins = [
    'https://www.bit-check.de',
    'https://bit-check.de',
    // We can allow localhost for local development testing if needed
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ];

  const origin = req.headers.origin;

  // Set CORS headers
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Utility to prevent HTML injection/XSS in the email body
  const escapeHtml = (str) => {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  try {
    const { name, company, email, phone, employees, service, message, _gotcha } = req.body;

    // Honeypot check for bots hitting the API directly
    if (_gotcha) {
      return res.status(200).json({ success: true, note: 'Honeypot filled' });
    }

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Initialize Resend with the environment variable
    // Make sure to add RESEND_API_KEY in your Vercel project settings
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Format the email content securely
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeEmployees = escapeHtml(employees);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const htmlContent = `
      <h2>Neue Kontaktanfrage (BitCheck)</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Unternehmen:</strong> ${safeCompany || 'Nicht angegeben'}</p>
      <p><strong>E-Mail:</strong> ${safeEmail}</p>
      <p><strong>Telefon:</strong> ${safePhone || 'Nicht angegeben'}</p>
      <p><strong>Mitarbeiterzahl:</strong> ${safeEmployees || 'Nicht angegeben'}</p>
      <p><strong>Interesse an:</strong> ${safeService || 'Allgemeine Anfrage'}</p>
      <hr />
      <h3>Nachricht:</h3>
      <p>${safeMessage || 'Keine Nachricht hinterlassen'}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'BitCheck Website <onboarding@resend.dev>', // Update this if you verify your domain with Resend (e.g., website@bitcheck.de)
      to: ['info@bit-check.de'],
      subject: `Neue Kontaktanfrage von ${safeName}`,
      html: htmlContent,
      reply_to: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('Serverless Function Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
