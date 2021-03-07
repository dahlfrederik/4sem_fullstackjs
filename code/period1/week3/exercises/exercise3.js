const fetch = require("node-fetch");
const { performance } = require("perf_hooks");

const URL = "https://swapi.dev/api/people/";

function fetchPerson(url) {
  return fetch(url)
    .then((data) => data.json())
    .catch((error) => {
      console.error(error);
    });
}

async function printNames() {
  var t0 = performance.now();
  try {
    console.log("Before");
    const person1 = await fetchPerson(URL + "1");
    const person2 = await fetchPerson(URL + "2");
    console.log(person1.name);
    console.log(person2.name);
    console.log("After all");
  } catch (err) {
    console.log(err);
  }
  var t1 = performance.now();
  console.log("Call to printNames took " + (t1 - t0) + " milliseconds. \n\n");
}

printNames();

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
