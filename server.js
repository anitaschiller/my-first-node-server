const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World<h1>');
  } else if (req.method === 'POST') {
    let data = '';
    req.on('data', (chunk) => {
      data = data + chunk;
    });
    req.on('end', () => {
      res.statusCode = 201;
      res.setHeader('Content-Type', 'text/html');
      res.end(`<h1>${JSON.parse(data).title}<h1>`);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
