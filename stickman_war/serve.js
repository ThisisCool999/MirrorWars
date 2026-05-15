const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = 8101;

const MIME = {
  '.html':'text/html; charset=utf-8',
  '.js':'application/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8',
  '.png':'image/png',
  '.jpg':'image/jpeg',
  '.svg':'image/svg+xml',
  '.json':'application/json; charset=utf-8',
  '.ico':'image/x-icon'
};

http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if(url === '/') url = '/index.html';
  const fp = path.normalize(path.join(ROOT, url));
  if(!fp.startsWith(ROOT)){ res.writeHead(403); return res.end('forbidden'); }
  fs.readFile(fp, (err, data) => {
    if(err){
      res.writeHead(404, {'Content-Type':'text/plain'});
      res.end('not found: '+url);
      return;
    }
    const ext = path.extname(fp).toLowerCase();
    res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(PORT, () => console.log('mirror-war listening on http://localhost:'+PORT));
