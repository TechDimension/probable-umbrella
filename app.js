const express = require('express');
const hbs = require('hbs');

const {geoCodeAddress} = require('./geocode/geocode');
const {getWeather} = require('./weather/weather');
const port = 3000;

var app = express();



hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


var getAddressWeather = (address, res, view) => {
  geoCodeAddress(address, (errMessage, geoResults) => {
    if (errMessage) {
      console.log("Error Message: " +errMessage);
    }else {
      getWeather(geoResults.latitude, geoResults.longitude, (errMessage, results) => {
        console.log("errMessage");
        if (errMessage){
          console.log("Error Message weather: " + errMessage);
        }else {
          results = {
            results,
            geoResults
          };
          res.render(view, {
            pageTitle:`What to wear in: ${results.geoResults.address}`,
            day: results.results.day,
            temperatureHigh:results.results.temperatureHigh,
            temperatureLow:results.results.temperatureLow,
            temperatureCurrent:results.results.temperatureCurrent,
            precipitation: results.results.precipProbability,
            uvIndex:results.results.uvIndex,
            icon:results.results.icon
          });
        }
        
      });
    }
  });
};

app.get('/' , (req, res) => {
  res.render("welcome.hbs", {
    pageTitle: "Welcome"
  });
});


app.get('/addressWeather', (req, res) => {
  address = req.query.address;
  console.log(req.query.address);
  if (address) {
    getAddressWeather(address, res, "addressWeather.hbs");
  }else{
    res.render("addressWeather.hbs", {
      pageTitle: "No address input"
    });
  }
  
});

app.get('/manualWeather', (req, res) => {
  address = req.query.address;
  console.log(req.query.address);
  res.render("manualWeather.hbs", {
    pageTitle:`Manual Weather`
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});



