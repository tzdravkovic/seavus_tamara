const list = document.querySelectorAll("#navbarSupportedContent ul li a");
const pages = document.querySelectorAll("#pages .page");
const btn = document.getElementById("citySearchBtn");
const input = document.getElementById("citySearchInput");
const statisticDiv = document.getElementById("statisticsResult");

const attachEventListeners = () => {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => displayPage(i));
  }

  btn.addEventListener("click", () => {
    console.log(input.value);
    statisticFetch(input.value);
    input.value = "";
  });
};

const displayPage = (i) => {
  for (let j = 0; j < pages.length; j++) {
    pages[j].style.display = "none";
  }
  pages[i].style.display = "block";
};

const statisticFetch = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=3e1f9230462fc942cbd5cdbdc7f7ea7f`
  )
    .then((response) => response.json())
    .then((result) => {
      let maxTemp = Number.NEGATIVE_INFINITY;
      let minTemp = Number.POSITIVE_INFINITY;
      let sumTemp = 0;
      let warmestTime = "";
      let coldestTime = "";

      let maxHumidity = Number.NEGATIVE_INFINITY;
      let minHumidity = Number.POSITIVE_INFINITY;
      let sumHumidity = 0;

      result.list.forEach((element) => {
        if (element.main.temp > maxTemp) {
          maxTemp = element.main.temp;
          warmestTime = element.dt_txt;
        }
        if (element.main.temp < minTemp) {
          minTemp = element.main.temp;
          coldestTime = element.dt_txt;
        }
        sumTemp += element.main.temp;

        if (element.main.humidity > maxHumidity) {
          maxHumidity = element.main.humidity;
        }
        if (element.main.humidity < minHumidity) {
          minHumidity = element.main.humidity;
        }
        sumHumidity += element.main.humidity;
      });

      let averageTemp = sumTemp / result.list.length;
      let averageHumidity = sumHumidity / result.list.length;

      console.log(maxTemp, minTemp, averageTemp);

      console.log(
        maxHumidity,
        minHumidity,
        averageHumidity,
        warmestTime,
        coldestTime
      );

      // dom
      statisticDiv.innerText = `MAX TEMP: ${maxTemp}C
         AVG TEMP: ${averageTemp.toFixed(2)}C
         LOW TEMP: ${minTemp}C
        
         MAX HUMD: ${maxHumidity}C
        AVG HUMD: ${averageHumidity}C
         LOW HUMD: ${minHumidity}C
        
         Warmest time of the following period ${warmestTime}
         Coldedst time of the following period ${coldestTime}`;
    })
    .catch((err) => console.error(err));
};

statisticFetch("Nis");
attachEventListeners();
