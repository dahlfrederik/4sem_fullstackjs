const crypto = require("crypto");

//B

const makeSecureRandomWithArray = (inputArray) =>
  new Promise(function (resolve, reject) {
    for (let index = 0; index < inputArray.length; index++) {
      crypto.randomBytes(inputArray[index], function (err, buffer) {
        if (err) {
          return reject(new Error("UPPPPPPPPS"));
        }
        let secureHex = buffer.toString("hex");
        resolve(secureHex);
      });
    }
  });

makeSecureRandomWithArray([48, 40, 32, 24, 16, 8]).then((randoms) =>
  console.log(randoms)
);

function makeSecureRandom(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, (err, b) => {
      if (err) {
        reject(err);
      }
      const secureHex = b.toString("hex");
      resolve({ Title: "6 Secure randoms", length: size, randoms: secureHex });
    });
  });
}

/* makeSecureRandom(48)
makeSecureRandom(40)
makeSecureRandom(32)
.then(randoms=>console.log(randoms)) */

async function makeSecureRandomParallel() {
  let obj = {
    title: "6 Secure Randoms",
    randoms: [],
  };
  try {
    const p1 = await makeSecureRandom(48);
    const p2 = await makeSecureRandom(40);
    const p3 = await makeSecureRandom(32);
    const p4 = await makeSecureRandom(24);
    const p5 = await makeSecureRandom(16);
    const p6 = await makeSecureRandom(8);
    const allResults = await Promise.all([p1, p2, p3, p4, p5, p6]);
    obj.randoms.push(allResults);

    return obj;
  } catch (err) {
    console.log(err);
  }
}

async function tester() {
  let obj = await makeSecureRandomParallel();
  console.log(obj.randoms);
  console.log(obj);
}
tester();

module.exports.makeSecureRandom = makeSecureRandom;
module.exports.makeSecureRandomParallel = makeSecureRandomParallel;
