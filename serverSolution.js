const http = require('http');

function longRunningOperation(callback) {
  setTimeout(() => {
    callback();
  }, 5000);
}

const server = http.createServer((req, res) => {
  longRunningOperation(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});