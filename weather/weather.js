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
      var current = body.currently;
      callback(undefined, {
        temperature: toCelsius(current.temperature),
        apparentTemperature: toCelsius(current.apparentTemperature),
        precipProbability: current.precipProbability,
        uvIndex: current.uvIndex,
        icon: current.icon
      });

    }else {
      callback("Unable to fetch weather.");
    }
  })
}


module.exports = {getWeather}