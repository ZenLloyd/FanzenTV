const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const { URL } = require('url');

const PORT = process.env.PORT || 3080;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.m3u': 'audio/x-mpegurl; charset=utf-8',
  '.m3u8': 'application/vnd.apple.mpegurl; charset=utf-8'
};

function fetchRemote(targetUrl, customHeaders = {}, redirectCount = 0, method = 'GET', clientIp = '') {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      return reject(new Error('Too many redirects'));
    }
    let parsed;
    try {
      parsed = new URL(targetUrl);
    } catch (err) {
      return reject(err);
    }

    const client = parsed.protocol === 'https:' ? https : http;
    const headers = {
      'User-Agent':
        customHeaders['User-Agent'] ||
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      Accept: '*/*',
      Connection: 'keep-alive',
      ...customHeaders
    };
    if (customHeaders['Referer'] && !headers['Origin']) {
      try {
        headers['Origin'] = new URL(customHeaders['Referer']).origin;
      } catch (_) {}
    }

    const options = {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method,
      headers,
      timeout: 12000,
      rejectUnauthorized: false
    };

    const req = client.request(options, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        const nextUrl = new URL(res.headers.location, targetUrl).toString();
        const nextHeaders = { ...customHeaders };
        const setCookies = res.headers['set-cookie'];
        if (setCookies && setCookies.length) {
          const cookieStr = setCookies.map((c) => c.split(';')[0]).join('; ');
          nextHeaders['Cookie'] = nextHeaders['Cookie'] ? `${nextHeaders['Cookie']}; ${cookieStr}` : cookieStr;
        }
        res.resume();
        return resolve(fetchRemote(nextUrl, nextHeaders, redirectCount + 1, method, clientIp));
      }
      resolve({ res, finalUrl: targetUrl });
    });

    req.on('timeout', () => {
      req.destroy(new Error('Request timeout'));
    });
    req.on('error', (err) => {
      reject(err);
    });
    req.end();
  });
}

function readStreamBuffer(stream, contentEncoding = '') {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (c) => chunks.push(c));
    stream.on('end', () => {
      const buf = Buffer.concat(chunks);
      resolve(decompressBuffer(buf, contentEncoding));
    });
    stream.on('error', reject);
  });
}

function decompressBuffer(buf, contentEncoding = '') {
  const enc = (contentEncoding || '').toLowerCase();
  try {
    if (enc.includes('gzip') || (buf.length >= 2 && buf[0] === 0x1f && buf[1] === 0x8b)) {
      return zlib.gunzipSync(buf);
    }
    if (enc.includes('deflate')) {
      return zlib.inflateSync(buf);
    }
  } catch (_) {}
  return buf;
}

// Live Vidio Token Resolver Cache
// Official RCTI+ Toutatis Token Resolver (RCTI, MNCTV, GTV, iNews)
let cachedRctiVisitorToken = null;
let cachedRctiVisitorExp = 0;

async function getRctiVisitorToken() {
  if (cachedRctiVisitorToken && Date.now() < cachedRctiVisitorExp) {
    return cachedRctiVisitorToken;
  }
  const { res } = await fetchRemote('https://www.rctiplus.com/tv/rcti', {
    Referer: 'https://www.rctiplus.com/'
  });
  const html = (await readStreamBuffer(res, res.headers['content-encoding'])).toString('utf8');
  const match = html.match(/var\s+visitorsToken\s*=\s*"([^"]+)"/);
  if (!match) throw new Error('visitorsToken not found on rctiplus.com');
  cachedRctiVisitorToken = match[1];
  cachedRctiVisitorExp = Date.now() + 1800 * 1000;
  return cachedRctiVisitorToken;
}

async function resolveRctiPlusHlsUrl(channelId = '1', attempt = 0) {
  try {
    const token = await getRctiVisitorToken();
    const { res } = await fetchRemote(
      `https://toutatis.rctiplus.com/video/live/api/v1/live/${channelId}/url?appierid=`,
      {
        Authorization: token,
        apikey: 'k1DzR0yYWIyZgvTvixiDHnb4Nl08wSU0',
        Origin: 'https://www.rctiplus.com',
        Referer: 'https://www.rctiplus.com/'
      }
    );
    const json = JSON.parse((await readStreamBuffer(res, res.headers['content-encoding'])).toString('utf8'));
    const hlsUrl = json?.data?.url;
    if (!hlsUrl) throw new Error(`No stream URL returned for RCTI+ channel ${channelId}`);
    return hlsUrl;
  } catch (err) {
    if (attempt < 1) {
      cachedRctiVisitorToken = null;
      return resolveRctiPlusHlsUrl(channelId, attempt + 1);
    }
    throw err;
  }
}

let cachedVidioApiKey = null;
let cachedVidioCookies = '';
let cachedVidioApiKeyExp = 0;

function encryptVidioApiKey(rawKey) {
  const key = 'dPr0QImQ7bc5o9LMntNba2DOsSbZcjUh';
  const iv = 'C8RWsrtFsoeyCyPt';
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  return cipher.update(rawKey, 'utf-8', 'base64') + cipher.final('base64');
}

async function getVidioAuthSession() {
  if (cachedVidioApiKey && Date.now() < cachedVidioApiKeyExp) {
    return { encryptedKey: cachedVidioApiKey, cookieHeader: cachedVidioCookies };
  }
  const { res } = await fetchRemote(
    'https://www.vidio.com/auth',
    {
      Origin: 'https://www.vidio.com',
      Referer: 'https://www.vidio.com/'
    },
    0,
    'POST'
  );
  const setCookies = res.headers['set-cookie'] || [];
  const cookieParts = setCookies.map((c) => c.split(';')[0]).filter(Boolean);
  if (!cookieParts.some((c) => c.startsWith('country_id='))) {
    cookieParts.unshift('country_id=ID');
  } else {
    for (let i = 0; i < cookieParts.length; i++) {
      if (cookieParts[i].startsWith('country_id=')) cookieParts[i] = 'country_id=ID';
    }
  }
  cachedVidioCookies = cookieParts.join('; ');

  const buf = await readStreamBuffer(res, res.headers['content-encoding']);
  const data = JSON.parse(buf.toString('utf8'));
  if (!data.api_key) throw new Error('Failed to obtain Vidio API key');
  cachedVidioApiKey = encryptVidioApiKey(data.api_key);
  cachedVidioApiKeyExp = Date.now() + 3600 * 1000;
  return { encryptedKey: cachedVidioApiKey, cookieHeader: cachedVidioCookies };
}

async function resolveVidioHlsUrl(slug, attempt = 0) {
  try {
    const id = parseInt(slug, 10);
    const { encryptedKey, cookieHeader } = await getVidioAuthSession();

    const { res: embedRes } = await fetchRemote(`https://www.vidio.com/live/${slug}/embed`, {
      Referer: 'https://www.vidio.com/',
      Cookie: cookieHeader
    });
    const embedHtml = (await readStreamBuffer(embedRes, embedRes.headers['content-encoding'])).toString('utf8');
    const sigMatch = embedHtml.match(
      /\\"streamSignature\\":\{\\"clientId\\":\\"([^"\\]+)\\",\\"signature\\":\\"([^"\\]+)\\"\}/
    );
    if (!sigMatch) {
      throw new Error(`Signature not found for Vidio channel ${slug}`);
    }
    const [, clientId, signature] = sigMatch;

    const { res: streamRes } = await fetchRemote(
      `https://www.vidio.com/api/livestreamings/${id}/stream?initialize=true`,
      {
        Origin: 'https://www.vidio.com',
        Referer: `https://www.vidio.com/live/${slug}/embed`,
        Cookie: cookieHeader,
        'X-Api-Key': encryptedKey,
        'X-Secure-Level': '2',
        'X-API-Platform': 'embed-web',
        'X-Signature': signature,
        'X-Client': clientId,
        'X-Requested-With': 'vidio-next'
      }
    );
    let streamText = (await readStreamBuffer(streamRes, streamRes.headers['content-encoding'])).toString('utf8');
    let streamJson;
    try {
      streamJson = JSON.parse(streamText);
    } catch (_) {
      // Fallback to api.vidio.com with cookieHeader
      const { res: apiRes } = await fetchRemote(
        `https://api.vidio.com/livestreamings/${id}/stream?initialize=true`,
        {
          Origin: 'https://www.vidio.com',
          Referer: `https://www.vidio.com/live/${slug}/embed`,
          Cookie: cookieHeader,
          'X-Api-Key': encryptedKey,
          'X-Secure-Level': '2',
          'X-API-Platform': 'web-desktop',
          'X-Signature': signature,
          'X-Client': clientId,
          'X-Requested-With': 'vidio-next'
        }
      );
      streamText = (await readStreamBuffer(apiRes, apiRes.headers['content-encoding'])).toString('utf8');
      streamJson = JSON.parse(streamText);
    }
    const hlsUrl = streamJson?.data?.attributes?.hls;
    if (!hlsUrl) {
      const errTitle = streamJson?.errors?.[0]?.title || 'unavailable';
      throw new Error(`No HLS stream returned for ${slug} (${errTitle})`);
    }
    return hlsUrl;
  } catch (err) {
    if (attempt < 1 && /ECONNRESET|timeout|ETIMEDOUT/i.test(err.message)) {
      cachedVidioApiKey = null;
      return resolveVidioHlsUrl(slug, attempt + 1);
    }
    throw err;
  }
}

function rewriteM3u8(content, baseUrl, ua, ref, hostPrefix = '', cookie = '') {
  const lines = content.split(/\r?\n/);
  const buildProxyUrl = (rawTarget) => {
    const trimmedTarget = rawTarget.trim();
    if (trimmedTarget.startsWith('data:')) return trimmedTarget;
    let absUrl;
    try {
      absUrl = new URL(trimmedTarget, baseUrl).toString();
    } catch (_) {
      return rawTarget;
    }
    const params = new URLSearchParams();
    params.set('url', absUrl);
    if (ua) params.set('ua', ua);
    if (ref) params.set('ref', ref);
    if (cookie) params.set('ck', cookie);
    return `${hostPrefix}/api/proxy?${params.toString()}`;
  };

  return lines
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return line;
      if (trimmed.startsWith('#')) {
        return line.replace(/(^|[,:])URI="([^"]+)"/g, (full, prefix, uriVal) => {
          return `${prefix}URI="${buildProxyUrl(uriVal)}"`;
        });
      }
      return buildProxyUrl(trimmed);
    })
    .join('\n');
}

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // 0a. Official RCTI+ Live Resolver (1=RCTI, 2=MNCTV, 3=GTV, 4=iNews)
  if (reqUrl.pathname === '/api/rctiplus') {
    const chId = reqUrl.searchParams.get('id') || '1';
    try {
      const hlsUrl = await resolveRctiPlusHlsUrl(chId);
      const ref = 'https://www.rctiplus.com/';
      const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';
      const { res: remoteRes, finalUrl } = await fetchRemote(hlsUrl, {
        Referer: ref,
        'User-Agent': ua
      });
      const setCookies = remoteRes.headers['set-cookie'] || [];
      const ck = setCookies.map((c) => c.split(';')[0]).join('; ');
      const rawBuf = await readStreamBuffer(remoteRes, remoteRes.headers['content-encoding']);
      const rawText = rawBuf.toString('utf8');
      const proto = req.headers['x-forwarded-proto'] || 'http';
      const hostPrefix =
        req.headers.host && !req.headers.host.startsWith('localhost') ? `${proto}://${req.headers.host}` : '';
      const rewritten = rewriteM3u8(rawText, finalUrl, ua, ref, hostPrefix, ck);
      res.writeHead(200, {
        'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      return res.end(rewritten);
    } catch (err) {
      res.writeHead(502, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: err.message }));
    }
  }

  // 0. Custom Vidio Embed Unblocker Page (Runs in User's Browser with Indonesian IP & Spoofs ancestorOrigins/referrer)
  if (reqUrl.pathname === '/api/embed') {
    const slug = reqUrl.searchParams.get('id');
    if (!slug) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('Missing id');
    }
    try {
      const { res: embedRes } = await fetchRemote(`https://www.vidio.com/live/${slug}/embed`, {
        Referer: 'https://www.vidio.com/'
      });
      let html = (await readStreamBuffer(embedRes, embedRes.headers['content-encoding'])).toString('utf8');

      // Rewrite relative root assets (/manifest.webmanifest, /favicon.ico) to https://www.vidio.com
      html = html.replace(/href="\/(manifest|favicon)/g, 'href="https://www.vidio.com/$1');

      const bypassScript = `<script>
(function() {
  try {
    Object.defineProperty(document, 'referrer', { get: function() { return 'https://www.vidio.com/'; } });
    if (window.Location && Location.prototype) {
      Object.defineProperty(Location.prototype, 'ancestorOrigins', {
        get: function() { return ['https://www.vidio.com']; }
      });
    }
  } catch (e) {}

  var origFetch = window.fetch;
  window.fetch = function(input, init) {
    var url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
    if (url.indexOf('/auth') === 0) {
      url = 'https://www.vidio.com/auth';
      input = url;
    } else if (url.indexOf('/') === 0 && url.indexOf('//') !== 0) {
      url = 'https://www.vidio.com' + url;
      input = url;
    }
    if (url.indexOf('embed_eligibility') !== -1) {
      var idMatch = url.match(/livestreamings\\/([^/?]+)/);
      var cid = idMatch ? parseInt(idMatch[1], 10) : 205;
      var fakeResp = {
        data: {
          id: String(cid),
          type: 'embed_eligibility',
          attributes: {
            whitelisted: true,
            content_found: true,
            content_id: cid,
            original_content_id: cid
          }
        }
      };
      return Promise.resolve(new Response(JSON.stringify(fakeResp), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));
    }
    return origFetch.call(this, input, init);
  };
})();
</script>`;

      html = html.replace('<head>', '<head>' + bypassScript);
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      });
      return res.end(html);
    } catch (err) {
      res.writeHead(502, { 'Content-Type': 'text/plain' });
      return res.end('Embed error: ' + err.message);
    }
  }

  // Real-time Official Vidio Live HLS Resolver (Indosiar, SCTV, ANTV, Mentari TV, RTV, NET, Metro TV)
  if (reqUrl.pathname === '/api/vidio' || reqUrl.pathname === '/api/live' || reqUrl.pathname === '/api/index.js') {
    const slug = reqUrl.searchParams.get('id');
    const mode = reqUrl.searchParams.get('mode') || '';
    if (!slug) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Missing id parameter' }));
    }
    let step = 'init';
    try {
      step = 'resolveVidioHlsUrl';
      const hlsUrl = await resolveVidioHlsUrl(slug);
      if (mode === 'json') {
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        });
        return res.end(JSON.stringify({ hlsUrl }));
      }
      step = 'fetchHlsManifest';
      const ref = 'https://www.vidio.com/';
      const ua =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';
      const { res: remoteRes, finalUrl } = await fetchRemote(hlsUrl, {
        Referer: ref,
        'User-Agent': ua
      });
      const rawBuf = await readStreamBuffer(remoteRes, remoteRes.headers['content-encoding']);
      const rawText = rawBuf.toString('utf8');
      const proto = req.headers['x-forwarded-proto'] || 'http';
      const hostPrefix = req.headers.host && !req.headers.host.startsWith('localhost')
        ? `${proto}://${req.headers.host}`
        : '';
      const rewritten = rewriteM3u8(rawText, finalUrl, ua, ref, hostPrefix);
      res.writeHead(200, {
        'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      return res.end(rewritten);
    } catch (err) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: err.message, step }));
    }
  }

  // HLS & M3U Smart Proxy endpoint
  if (reqUrl.pathname === '/api/proxy') {
    const targetUrl = reqUrl.searchParams.get('url');
    const ua = reqUrl.searchParams.get('ua') || '';
    const ref = reqUrl.searchParams.get('ref') || '';
    const ck = reqUrl.searchParams.get('ck') || '';

    if (!targetUrl) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Missing url parameter' }));
    }

    try {
      const customHeaders = {};
      if (ua) customHeaders['User-Agent'] = ua;
      if (ref) customHeaders['Referer'] = ref;
      if (ck) customHeaders['Cookie'] = ck;

      const { res: remoteRes, finalUrl } = await fetchRemote(targetUrl, customHeaders);
      const nextCookies = remoteRes.headers['set-cookie'] || [];
      const mergedCk = nextCookies.length
        ? [ck, ...nextCookies.map((c) => c.split(';')[0])].filter(Boolean).join('; ')
        : ck;
      const statusCode = remoteRes.statusCode || 200;
      const contentType = (remoteRes.headers['content-type'] || '').toLowerCase();
      const contentEncoding = remoteRes.headers['content-encoding'] || '';
      const cleanPath = new URL(finalUrl).pathname.toLowerCase();

      const isM3u8 =
        cleanPath.endsWith('.m3u8') ||
        cleanPath.endsWith('.m3u') ||
        contentType.includes('mpegurl') ||
        contentType.includes('x-mpegurl');

      if (statusCode >= 400) {
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        remoteRes.resume();
        return res.end(JSON.stringify({ error: `Upstream returned ${statusCode}` }));
      }

      if (isM3u8) {
        const rawBuf = await readStreamBuffer(remoteRes, contentEncoding);
        const rawText = rawBuf.toString('utf8');
        if (rawText.trim().startsWith('#EXTM3U')) {
          const proto = req.headers['x-forwarded-proto'] || 'http';
      const hostPrefix = req.headers.host && !req.headers.host.startsWith('localhost')
        ? `${proto}://${req.headers.host}`
        : '';
      const rewritten = rewriteM3u8(rawText, finalUrl, ua, ref, hostPrefix);
          res.writeHead(200, {
            'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          });
          res.end(rewritten);
        } else {
          res.writeHead(200, {
            'Content-Type': remoteRes.headers['content-type'] || 'application/octet-stream'
          });
          res.end(rawBuf);
        }
      } else {
        const headersOut = {
          'Content-Type': remoteRes.headers['content-type'] || 'video/mp2t',
          'Cache-Control': 'public, max-age=30'
        };
        if (remoteRes.headers['content-length']) {
          headersOut['Content-Length'] = remoteRes.headers['content-length'];
        }
        if (remoteRes.headers['content-encoding']) {
          headersOut['Content-Encoding'] = remoteRes.headers['content-encoding'];
        }
        res.writeHead(statusCode, headersOut);
        remoteRes.pipe(res);
        req.on('close', () => {
          remoteRes.destroy();
        });
      }
    } catch (err) {
      if (!res.headersSent) {
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message || 'Proxy fetch failed' }));
      }
    }
    return;
  }

  // Serve cached id.m3u
  if (reqUrl.pathname === '/api/id.m3u') {
    const m3uPath = path.join(__dirname, 'id.m3u');
    if (fs.existsSync(m3uPath)) {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      return fs.createReadStream(m3uPath).pipe(res);
    } else {
      res.writeHead(404);
      return res.end('Not found');
    }
  }

  // Serve static files from /public
  let safePath = path.normalize(reqUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }
  const filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 Not Found');
    }
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(filePath).pipe(res);
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`FazenTV Indonesia running at http://localhost:${PORT}`);
  });
}

module.exports = server;
