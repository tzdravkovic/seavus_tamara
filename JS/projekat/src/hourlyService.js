const fetchHourlyData = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=3e1f9230462fc942cbd5cdbdc7f7ea7f`
  )
    .then((response) => response.json())
    .then((result) => {
      table.innerHTML = "";
      result.list.forEach((element) => {
        addHourlyToTable(element);
      });
    })
    .catch((err) => console.error(err));
};

const addHourlyToTable = (element) => {
  const row = document.createElement("tr");

  const temperature = document.createElement("td");
  temperature.innerText = `${element.main.temp} C`;

  const humidity = document.createElement("td");
  humidity.innerText = `${element.main.humidity} %`;

  const weatherDescription = document.createElement("td");
  weatherDescription.innerText = element.weather[0].description;

  const weatherIcon = document.createElement("td");
  const weatherIconImg = document.createElement("img");
  weatherIconImg.src = `http://openweathermap.org/img/w/${element.weather[0].icon}.png`;
  weatherIcon.appendChild(weatherIconImg);

  const windSpeed = document.createElement("td");
  windSpeed.innerText = `${element.wind.speed} km/h`;

  const time = document.createElement("td");
  time.innerText = element.dt_txt;

  row.append(
    weatherIcon,
    weatherDescription,
    time,
    temperature,
    humidity,
    windSpeed
  );
  table.appendChild(row);
};



export {
    fetchHourlyData,
    addHourlyToTable
};
