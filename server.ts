import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Proxy Endpoint: cpaad_json.php
  app.get('/api/proxy/cpaad', async (req, res) => {
    try {
      const response = await fetch('https://woz.co.kr/api/cpaad_json.php', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/json, text/plain, */*'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
      return res.json(data);
    } catch (err: any) {
      console.error('Error fetching cpaad_json:', err.message);
      // Fallback cURL-like retry or return error
      return res.status(502).json({ error: 'Failed to fetch cpaad API', message: err.message });
    }
  });

  // Proxy Endpoint: ad_json.json
  app.get('/api/proxy/ad', async (req, res) => {
    try {
      const response = await fetch('https://woz.co.kr/api/ad_json.json', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/json, text/plain, */*'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
      return res.json(data);
    } catch (err: any) {
      console.error('Error fetching ad_json:', err.message);
      return res.status(502).json({ error: 'Failed to fetch ad API', message: err.message });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: '천안웨딩박람회일정 API' });
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
