const request = require('request');

var geoCodeAddress = (address, callback) => {
 encodedAddress = encodeURIComponent(address);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GEOCODE_API_KEY}&address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error){
      callback("Unable to connect to Google servers.")
    }else if (body.status === "ZERO_RESULTS"){
      callback("No Results");
    }else if (body.status === "OK"){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  }); 
};

module.exports = {geoCodeAddress};