const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;
const BASE_URL = '/WBBDocs';
const DIST_DIR = path.join(__dirname, '../dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function resolve(urlPath) {
  // Strip baseUrl prefix to find the file in dist/
  let filePath = urlPath.startsWith(BASE_URL)
    ? urlPath.slice(BASE_URL.length) || '/'
    : urlPath;

  let abs = path.join(DIST_DIR, filePath);

  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
    abs = path.join(abs, 'index.html');
  }

  return abs;
}

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  const filePath = resolve(url);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`404 Not Found: ${url}`);
    return;
  }

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`\nServing dist/ at http://localhost:${PORT}${BASE_URL}/`);
  console.log(`  Portal  → http://localhost:${PORT}${BASE_URL}/`);

  const apps = fs.readdirSync(DIST_DIR).filter(
    name => fs.statSync(path.join(DIST_DIR, name)).isDirectory()
  );
  for (const app of apps) {
    console.log(`  ${app.padEnd(7)} → http://localhost:${PORT}${BASE_URL}/${app}/`);
  }
  console.log('\nPress Ctrl+C to stop.\n');
});
