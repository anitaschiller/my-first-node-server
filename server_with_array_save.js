const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const savedResponse = [];

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(savedResponse));
  } else if (req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });
    req.on("end", () => {
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      savedResponse.push(JSON.parse(data));
      res.end(data);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
