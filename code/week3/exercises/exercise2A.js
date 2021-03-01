// 2A) With plain promises
const fetch = require("node-fetch");
const URLpeople = "https://swapi.dev/api/people/";

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  const obj = { name: "", firstFilm: "", firstSpecies: "", homeWorld: "" };
  fetch(URLpeople + id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      obj.name = data.name;
      return fetch(data.films[0])
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          obj.firstFilm = data.title;
          return fetch(data.species[0])
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              obj.firstSpecies = data.name;
              return fetch(data.homeworld)
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  obj.homeWorld = data.name;
                  console.log(obj);
                  return obj;
                });
            });
        });
    });
}

let p1 = getPlanetforFirstSpeciesInFirstMovieForPerson(1);
console.log(p1);
