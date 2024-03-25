const statistic = document.getElementById('statisticsResult')

const statisticFetch = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Nis&units=metric&APPID=3e1f9230462fc942cbd5cdbdc7f7ea7f')
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((err) => console.error(err))
}

statisticFetch()