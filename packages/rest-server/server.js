const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(8000, () => console.log("Server is on port 8000"));
