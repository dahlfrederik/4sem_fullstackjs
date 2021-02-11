const os = require("os");

let platform = os.platform();
let type = os.type();
let freeMemory = os.freemem();
let totalMemory = os.totalmem();
let EOL = os.EOL;

let computerInfo = {
  platform: platform,
  type: type,
  freeMemory: freeMemory,
  totalMemory: totalMemory,
  EOL: EOL,
};

console.log(computerInfo);

module.exports = computerInfo;
