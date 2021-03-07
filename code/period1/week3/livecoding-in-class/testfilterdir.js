const { filterDir, filterDirP } = require("./filterdir");

filterDir(__dirname, "", (err, files) => {
  if (err) {
    return console.log(err);
  }
  console.log("Files i mappen: " + files);
});

// Med promise og then håndtering => Gammeldags måde
filterDirP(__dirname, "")
  .then((files) => console.log("Files i mappen, fundet med promise: " + files))
  .catch((err) => console.log(err));

// async/await => promise håndteres med await, moderne måde : ligner synkron kode
async function testFilterDirP() {
  const files = await filterDirP(__dirname, "");
  console.log("Files i mappen, fundet med async/await: " + files);
}
testFilterDirP();
