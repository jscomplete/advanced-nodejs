// server: http.Server
const server = require('http').createServer();

server.on('request', (req, res) => {
  // req: http.IncomingMessage
  // res: http.ServerResponse

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world\n');
});

server.listen(8000);
