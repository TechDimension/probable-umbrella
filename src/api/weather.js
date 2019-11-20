const axios = require('axios')

var getWeather = (lat, long) => {
  return axios({
    method: 'get',
    url: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3f166f1086c5a25d93bf69d2e5cb12ac/${lat},${long}`

  })
  .then(({data}) => {
    var today = data.daily.data[0];
    var current = data.currently;
    console.log('ddd' + JSON.stringify(today,undefined, 2))
    console.log('ddd' + JSON.stringify(current,undefined, 2))
    var date = new Date(current.time * 1000);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return {
      day: `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
      temperatureHigh: toCelsius(today.temperatureHigh),
      temperatureLow: toCelsius(today.temperatureLow),
      temperatureCurrent: toCelsius(current.temperature),
      apparentTemperature: toCelsius(today.temperatureHigh),
      re: toCelsius(today.apparentTemperatureHigh),
      precipProbability: parseFloat((today.precipProbability * 100).toFixed(1)),
      uvIndex: today.uvIndex,
      icon: today.icon
    }
  })
  .catch(() => {
    return "Unable to fetch weather."
  })
}

const toCelsius = (temperature) => {
  return parseFloat(((temperature - 32) * (5/9)).toFixed(1));
};

module.exports = { getWeather }