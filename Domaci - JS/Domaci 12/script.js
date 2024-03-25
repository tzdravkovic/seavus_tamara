const table = document.getElementById("table");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  fetch("https://swapi.dev/api/planets/?page=1")
    .then((result) => result.json())
    .then((resultObject) => {
      table.innerHTML = "";

      const planets = resultObject.results;

      planets.forEach((planet) => addPlanetToTable(planet));

      const btnNextTenElements = document.createElement('button');
      btnNextTenElements.innerText = 'NEXT 10';
      document.body.appendChild(btnNextTenElements);

      btnNextTenElements.addEventListener('click', () => {
        fetch("https://swapi.dev/api/planets/?page=2")
        .then((result) => result.json())
        .then((resultObject) => {
            table.innerHTML = "";

            const planets = resultObject.results;
      
            planets.forEach((planet) => addPlanetToTable(planet));
        });
    })
    .catch();
})
});

const addPlanetToTable = (planet) => {
  const row = document.createElement("tr");

  const name = document.createElement("td");
  name.innerText = planet.name;

  const population = document.createElement("td");
  population.innerText = planet.population;

  const climate = document.createElement("td");
  climate.innerText = planet.climate;

  const gravity = document.createElement("td");
  gravity.innerText = planet.gravity;

  row.append(name, population, climate, gravity);
  table.appendChild(row);
};
