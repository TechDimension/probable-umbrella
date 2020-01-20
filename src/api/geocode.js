const axios =  require('axios')

var geoCodeAddress = (address) => {
  if (address.gps) {
    address = address.latitude + ',' + address.longitude
  }else {
   address = encodeURIComponent(address);
  }

  return axios({
    url: `https://maps.googleapis.com/maps/api/geocode/json`,
    params: {
      key: process.env.GATSBY_GEOCODE_API_KEY,
      address: address
    }
  })
  .then(body => {
    if (body.status === 200) {
      return {
        address:body.data.results[0].formatted_address,
        latitude: body.data.results[0].geometry.location.lat,
        longitude: body.data.results[0].geometry.location.lng
      };
    }
    throw "No Results";
  })
  .catch(() => {
      throw ("Unable to connect to Google servers.");
  });

};

module.exports = { geoCodeAddress};
