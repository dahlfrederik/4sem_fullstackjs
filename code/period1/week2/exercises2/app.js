const DOS_Detector = require("./dosDetector");

const dosDetec = new DOS_Detector();

// Register a listener
dosDetec.on("DosDetected", (arg) =>
  console.log(`DosDetected called: ${JSON.stringify(arg)}`)
);

// Set max time between calls.
dosDetec.TIME_BETWEEN_CALLS = 2;

setTimeout(function () {
  // after 1000ms, call the setTimeout callback
  // In the meantime, continue executing code below
  setTimeout(function () {
    dosDetec.addUrl("Google.com");
  }, 0);

  dosDetec.addUrl("Google.com");
}, 1000);
