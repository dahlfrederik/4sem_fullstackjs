const crypto = require("crypto");

//A

function randByte() {
  obj = {
    title: "6 Secure Randoms",
    randoms: [],
  };

  crypto.randomBytes(48, function (err, buffer) {
    let secureHex = buffer.toString("hex");
    obj.randoms.push({ length: 48, randoms: secureHex });

    crypto.randomBytes(40, function (err, buffer) {
      let secureHex = buffer.toString("hex");
      obj.randoms.push({ length: 40, randoms: secureHex });

      crypto.randomBytes(32, function (err, buffer) {
        let secureHex = buffer.toString("hex");
        obj.randoms.push({ length: 32, randoms: secureHex });
        console.log(obj);
      });
    });
  });
}
randByte();
