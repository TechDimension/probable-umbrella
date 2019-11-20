const axios =  require('axios');

var geoCodeAddress = (address) => {
  const encodedAddress = encodeURIComponent(address);

  return axios({
    url: `https://maps.googleapis.com/maps/api/geocode/json`,
    params: {
      key: `AIzaSyCATKk5XrFjpxPNmvPdN5pm20UMTlFg-DE`,
      address: encodedAddress
    }
  })
  .then(body => {
    console.log(body)
    if (body.statusText === "ZERO_RESULTS") {
      return "No Results"
    }
    if (body.status === 200) {
        console.log(body)
      return {
        address:body.data.results[0].formatted_address,
        latitude: body.data.results[0].geometry.location.lat,
        longitude: body.data.results[0].geometry.location.lng
      }
    }
  })
  .catch(() => {
    return ("Unable to connect to Google servers.")
  })

};

module.exports = { geoCodeAddress }; 