/**
 * Prerender script: generates static HTML for each route
 * so search engines and users see real content immediately
 * instead of an empty <div id="root"></div>.
 *
 * Runs after `react-scripts build` via the `postbuild` npm script.
 */

const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const PORT = 45678;
const ROUTES = ['/', '/about', '/services', '/recruitment', '/contact'];

// Simple static file server for the build directory
function createServer() {
  return http.createServer((req, res) => {
    let filePath = path.join(BUILD_DIR, req.url === '/' ? 'index.html' : req.url);

    // SPA fallback: if file doesn't exist, serve index.html
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(BUILD_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
    };

    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
}

async function prerender() {
  console.log('🚀 Starting prerender...');

  const server = createServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`   Server running on port ${PORT}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();

    // Wait for the page to fully render
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait a bit more for any animations/lazy content to settle
    await page.waitForSelector('#root > *', { timeout: 10000 });

    // Get the rendered HTML
    const html = await page.content();

    // Determine output path
    const outputDir = route === '/'
      ? BUILD_DIR
      : path.join(BUILD_DIR, route);

    if (route !== '/') {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFile = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputFile, html);

    const sizeKB = (Buffer.byteLength(html) / 1024).toFixed(1);
    console.log(`   ✅ ${route} → ${sizeKB} KB`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('🎉 Prerender complete! All routes have static HTML.');
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
