import http from 'http';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

const isDev = !process.env.WEB_REPL_RENEWAL;
const PORT = isDev ? 3001 : 5000;

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return {apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email};
}

async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: credentials.fromEmail
  };
}

async function sendContactEmail(data: {
  name: string;
  company: string;
  email: string;
  power: string;
  message: string;
}) {
  const { client, fromEmail } = await getUncachableResendClient();
  
  const htmlContent = `
    <h2>Nuova richiesta dal sito DichiarazioneDiConsumo</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nome</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Azienda</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.company}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Potenza Impianto</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.power}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Messaggio</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${data.message}</td>
      </tr>
    </table>
  `;

  const result = await client.emails.send({
    from: fromEmail,
    to: 'infodichiarazioneadm@gmail.com',
    subject: `Nuova richiesta da ${data.name} - ${data.company}`,
    html: htmlContent,
    replyTo: data.email
  });

  return result;
}

const mimeTypes: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function serveStatic(req: http.IncomingMessage, res: http.ServerResponse) {
  const distPath = path.join(process.cwd(), 'dist');
  let filePath = path.join(distPath, req.url === '/' ? 'index.html' : req.url!);
  
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(distPath, 'index.html'), (err2, content2) => {
          if (err2) {
            res.writeHead(404);
            res.end('Not found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content2);
          }
        });
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/contact') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        await sendContactEmail(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (error: any) {
        console.error('Error sending email:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: error.message }));
      }
    });
    return;
  }

  if (!isDev) {
    serveStatic(req, res);
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

const host = isDev ? 'localhost' : '0.0.0.0';
server.listen(PORT, host, () => {
  console.log(`API server running on http://${host}:${PORT}`);
});
