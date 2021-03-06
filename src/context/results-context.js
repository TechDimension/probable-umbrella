import React, {useState} from 'react';
import { geoCodeAddress, geoCodeAddressFromLatLong } from "../api/geocode"
import { getWeather } from '../api/weather';
import { calculateClothes } from "../helpers/clothing"

export const ResultsContext = React.createContext({
});

export default props => {
  const [resultsLive, setResultsLive] = useState(false)
  const [weather, setWeather] = useState({})
  const [address, setAddress] = useState({})
  const [clothes, setClothes] = useState({})


  const handleResult = async address =>{
    const newAddress = await handleAddress(address)
    const newWeather = await handleWeather(newAddress)
    handleClothes(newWeather)
  }
  const handleAddress = address => {
    return geoCodeAddress(address).then(geocode => {
        console.log(geocode)
        setAddress(geocode);
        return geocode
      }).catch((error) => {
        console.log(error)
        setResultsLive(false)
    } );


  }

  const handleWeather = (address) => {
    if (address) {
      return getWeather(address.latitude, address.longitude).then(weather => {
        console.log('weather')
        console.log(weather)
        setWeather(weather)
        return weather
        }).catch((error) =>  {
          console.log(error)
          setResultsLive(false)
      } );
    }
  }

  const handleClothes = (weather) => {
    if (weather) {
      const {temperature, precipitation, uvIndex} = weather
      const newClothes = calculateClothes({temperature,precipitation,uvIndex})
      console.log('clothes')
      console.log(newClothes)
      setClothes(newClothes)
      setResultsLive(true)
    }
  }

  return (
    <ResultsContext.Provider value={{weather, address, clothes, handleResult, resultsLive}}>
      {props.children}
    </ResultsContext.Provider>
  );
}
