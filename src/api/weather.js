const axios = require('axios');

const getWeather = (lat, long) => {
  return axios({
    method: 'get',
    url: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3f166f1086c5a25d93bf69d2e5cb12ac/${lat},${long}`

  })
  .then(({data}) => {
    console.log(data)
    const today = data.daily.data[0];
    const current = data.currently;
    const date = new Date(current.time * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return {
      time: `${date.getHours()}:${date.getMinutes()}`,
      day: `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
      temperature: toCelsius(current.temperature),
      apparentTemperature: toCelsius(current.apparentTemperature),
      precipitation: parseFloat((current.precipProbability * 100).toFixed(1)),
      uvIndex: today.uvIndex,
      icon: current.icon,
      nowSummary: current.summary,
      hourlySummary: data.hourly.summary,
      humidity: current.humidity
    };
  })
  .catch(() => {
      throw "Unable to fetch weather.";
  });
}

const toCelsius = (temperature) => {
  return parseFloat(((temperature - 32) * (5/9)).toFixed(1));
};

module.exports = { getWeather };
