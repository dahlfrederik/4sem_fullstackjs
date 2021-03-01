const fs = require("fs");
const util = require("util");

const readdir = util.promisify(fs.readdir);

function filterDir(path, ext, cb) {
  fs.readdir(path, (err, b) => {
    if (err) {
      cb(err);
    }
    const filtered = b.filter((f) => f.endsWith(ext));
    cb(null, filtered);
  });
}

function filterDirMyPromise(path, ext) {
  return new Promise((resolve, reject) => {});
}

//Promise version =>
function filterDirP(path, ext) {
  return readdir(path).then((files) => {
    const filtered = files.filter((f) => f.endsWith(ext));
    return filtered;
  });
}

//Med promise
filterDirP(__dirname, "")
  .then((files) => console.log(files))
  .catch((err) => console.log(err));

//Med async/await
async function tester() {
  const files = await filterDirP(__dirname, "");
  console.log(files);
}

module.exports.filterDir = filterDir;
module.exports.filterDirP = filterDirP;
module.exports.filterDirMyPromise = filterDirMyPromise;
