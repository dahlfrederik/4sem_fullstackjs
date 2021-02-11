const http = require("http");
const DOS_Detector = require("./dosDetector");
const osInfo = require("./osInfo");

const dosDetec = new DOS_Detector();

dosDetec.on("DosDetected", (arg) =>
  console.log(`DosDetected called: ${JSON.stringify(arg)}`)
);

const server = http.createServer((req, res) => {
  if (req.url === "/api/os-info") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(osInfo));
    return res.end();
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", (sock) => {
  console.log(sock.remoteAddress);
  dosDetec.TIME_BETWEEN_CALLS = 2000;
  dosDetec.addUrl(sock.remoteAddress);
});
server.listen(3000);
console.log("listening on 3000");
