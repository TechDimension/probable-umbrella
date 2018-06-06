const express = require('express');
const {geoCodeAddress} = require('./geocode/geocode');
const port = 3000;

var app = express();

app.get('/', (req, res) => {
  address = req.params.address;
  geoCodeAddress("EC1V 8BY", (errMessage, results) => {
    if (errMessage) {
      console.log(errMessage);
      return errMessage;
    }else {
      console.log(results);
      res.send(JSON.stringify(results, undefined, 2));
      return results;
    }
  });

});

app.get('/:address', (req, res) => {
  address = req.params.address;
  geoCodeAddress(address, (errMessage, results) => {
    if (errMessage) {
      console.log(errMessage);
      return errMessage;
    }else {
      console.log(results);
      res.send(JSON.stringify(results, undefined, 2));
      return results;
    }
  });

});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});