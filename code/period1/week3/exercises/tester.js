const { makeSecureRandom } = require("./exercise1B");

makeSecureRandom(48).then((obj) => console.log(obj));

const tester = async () => {
  const result = await makeSecureRandom(48);
  console.log(result);
  console.log(JSON.stringify(result));
};

tester();
