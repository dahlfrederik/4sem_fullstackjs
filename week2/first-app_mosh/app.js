/* const path = require("path");

var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

const fs = require("fs");
const files = fs.readdir("./", function (err, files) {
  if (err) {
    console.log("Error", error);
  } else console.log("Result", files);
});

console.log(`Files: ${files}`); 

const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");

*/

const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello world");
    response.end();
  }
  if (request.url === "./api/courses") {
    response.write(JSON.stringify([1, 2, 3]));
  }
});

server.listen(4000);

console.log("Listening on port 4000 ...");
