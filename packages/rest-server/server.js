const http = require("http");
const chalk = require("chalk");

const port = process.env.SERVER_PORT;

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(port, () =>
  console.log(`${chalk.green("[Rest-Server]:")} is on port ${port}`)
);
