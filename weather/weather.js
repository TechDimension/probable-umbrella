const request = require("request");

var getWeather = (lat,long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/3f166f1086c5a25d93bf69d2e5cb12ac/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        precipProbability: body.currently.precipProbability
      });

    }else {
      callback("Unable to fetch weather.");
    }
  })
}


module.exports = {getWeather}