const request = require("request");

var toCelsius = (temperature) => {
  return parseFloat(((temperature - 32) * (5/9)).toFixed(1));
};

var getWeather = (lat,long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/3f166f1086c5a25d93bf69d2e5cb12ac/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      var today = body.daily.data[0];
      var current = body.currently;
      var date = new Date(current.time * 1000);
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

      callback(undefined, {
        day: `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
        temperatureHigh: toCelsius(today.temperatureHigh),
        temperatureLow: toCelsius(today.temperatureLow),
        temperatureCurrent: toCelsius(current.temperature),
        apparentTemperature: toCelsius(today.temperatureHigh),
        re: toCelsius(today.apparentTemperatureHigh),
        precipProbability: parseFloat((today.precipProbability * 100).toFixed(1)),
        uvIndex: today.uvIndex,
        icon: today.icon
      });

    }else {
      callback("Unable to fetch weather.");
    }
  })
}


module.exports = {getWeather}