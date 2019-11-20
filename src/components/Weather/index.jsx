import React, { useState, useEffect } from 'react'
import './weather.css'
import Header from '../header'
import { geoCodeAddress } from '../../api/geocode'
import { getWeather } from '../../api/weather'


const Weather = (props) => {

  const [geocode, setGeocode] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    geoCodeAddress(props.address).then(geocode => {
      setGeocode(geocode)
      console.log(JSON.stringify(geocode, undefined, 2))
      getWeather(geocode.latitude, geocode.longitude)
      .then(weather => {
        setWeather(weather)
      }).catch(() => {
        console.log('undef')
      })
    }).catch(() => console.log('catching'))
  }, [props.address])


  return (
    <div className={`container ${props.display}`} >
      <div className="weatherContainer">
        <div className="address">
          { geocode ? geocode.address : null }
        </div>
          { weather? weather.temperatureCurrent: null } Degrees

      </div>
      <div className="button" onClick={() => props.setAddress('')}>
        Again
        </div>
    </div>


  )
}


export default Weather