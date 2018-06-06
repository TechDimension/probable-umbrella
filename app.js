const express = require('express');
const hbs = require('hbs');

const {geoCodeAddress} = require('./geocode/geocode');
const {getWeather} = require('./weather/weather');
const port = 3000;

var app = express();



hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


app.get('/autoWeather', (req, res) => {
  address = req.params.address;
  geoCodeAddress("EC1V 8BY", (errMessage, geoResults) => {
    if (errMessage) {
      console.log(errMessage);
    }else {
      getWeather(geoResults.latitude, geoResults.longitude, (errMessage, results) => {
        results = {
          results,
          geoResults
        };
        res.render('autoWeather.hbs', {
          temperature:results.temperature
        });
      });
    }
  });
});

app.get('/addressWeather/:address', (req, res) => {
  address = req.params.address;
  geoCodeAddress(address, (errMessage, geoResults) => {
    if (errMessage) {
      console.log(errMessage);
    }else {
      getWeather(geoResults.latitude, geoResults.longitude, (errMessage, results) => {
        results = {
          results,
          geoResults
        };
        res.render('addressWeather.hbs', {
          temperature:results.results.temperature
        });
      });
    }
  });

});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});