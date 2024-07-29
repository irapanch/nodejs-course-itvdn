const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hello world!\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http:/localhost:${PORT}`);
});
