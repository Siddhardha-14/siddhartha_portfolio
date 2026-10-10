const http = require('http');
const fs = require('fs');
const path = require('path');

// Automatically load .env for local development
if (fs.existsSync(path.join(__dirname, '.env'))) {
  const envContent = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...vals] = trimmed.split('=');
      if (key && vals.length) {
        process.env[key.trim()] = vals.join('=').trim();
      }
    }
  });
}

const sendHandler = require('./api/send');

const PORT = process.env.PORT || 3000;
const REACT_DIST = path.join(__dirname, 'react-portfolio', 'dist');
const PUBLIC_DIR = fs.existsSync(path.join(REACT_DIST, 'index.html')) ? REACT_DIST : __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = parsedUrl.pathname;

  // 1. Handle /api/send Endpoint
  if (pathname === '/api/send' || pathname === '/api/send.js') {
    let bodyData = '';
    req.on('data', chunk => {
      bodyData += chunk.toString();
    });
    req.on('end', async () => {
      req.body = bodyData;
      try {
        req.body = JSON.parse(bodyData);
      } catch (e) {
        // keep as string
      }

      // Add express-like res.status and res.json helpers
      res.status = function(code) {
        res.statusCode = code;
        return res;
      };
      res.json = function(data) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(data));
      };

      try {
        await sendHandler(req, res);
      } catch (err) {
        console.error('API Error:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: err.message || 'Internal Server Error' }));
      }
    });
    return;
  }

  // 2. Handle Static Files
  if (pathname === '/') {
    pathname = '/index.html';
  } else if (!path.extname(pathname)) {
    // Clean URLs (e.g. /resume -> /resume.html)
    if (fs.existsSync(path.join(PUBLIC_DIR, `${pathname}.html`))) {
      pathname = `${pathname}.html`;
    }
  }

  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end('<h1>404 Not Found</h1>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}/`);
  console.log(`Resend Mail Endpoint active at http://localhost:${PORT}/api/send`);
});
