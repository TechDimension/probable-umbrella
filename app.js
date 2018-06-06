const express = require('express');
const {geoCodeAddress} = require('./geocode/geocode');
const {getWeather} = require('./weather/weather');
const port = 3000;

var app = express();

app.get('/', (req, res) => {
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
        res.send(JSON.stringify(results, undefined, 2));
      });
    }
  });

});

app.get('/:address', (req, res) => {
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
        res.send(JSON.stringify(results, undefined, 2));
      });
    }
  });

});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});