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
      var current = body.daily.data[0];
      console.log(current.time);
      var date = new Date(current.time * 1000);
      console.log(date);
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

      callback(undefined, {
        day: `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
        temperature: toCelsius(current.temperatureHigh),
        apparentTemperature: toCelsius(current.apparentTemperatureHigh),
        precipProbability: current.precipProbability * 100,
        uvIndex: current.uvIndex,
        icon: current.icon
      });

    }else {
      callback("Unable to fetch weather.");
    }
  })
}


module.exports = {getWeather}