import fetch from "node-fetch";
import "core-js/proposals/promise-any";
const { performance } = require("perf_hooks");

function messageDelay(msg, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msg.length === 0) {
        reject("No message");
      }
      const upperCased = msg.toUpperCase();
      resolve(upperCased);
    }, delay);
  });
}

const promises = [
  messageDelay("Delay1-New", 1300),
  messageDelay("Delay2-New", 2000),
  messageDelay("Delay3-New", 500),
  messageDelay("Delay4-New", 5000),
];
// Example of the new function promise.any()
Promise.any(promises).then((upperCases) => console.log(upperCases));

// Example of the old way with promise.all()
Promise.all([
  messageDelay("Delay1-Old", 1300),
  messageDelay("Delay2-Old", 2000),
  messageDelay("Delay3-Old", 500),
  messageDelay("Delay4-Old", 5000),
]).then((upperCases) => console.log(upperCases));

let msg = "Hello my friend";
messageDelay(msg, 1000)
  .then((umsg) => console.log(umsg))
  .catch((err) => console.log("Ups, HUGE ERROR: " + err));

//Example of fetching with node-fetch imported in the ES6 way
const URL = "https://swapi.dev/api/people/";

function fetchPerson(url) {
  return fetch(url)
    .then((data) => data.json())
    .catch((error) => {
      console.error(error);
    });
}

async function printNameParralel() {
  var t0 = performance.now();
  try {
    const person1 = await fetchPerson(URL + "1");
    const person2 = await fetchPerson(URL + "2");
    const allResults = await Promise.all([person1.name, person2.name]);
    console.log(allResults);
  } catch (err) {
    console.log(err);
  }
  var t1 = performance.now();
  console.log(
    "Call to printNameParralel took " + (t1 - t0) + " milliseconds. \n\n"
  );
}

printNameParralel();
