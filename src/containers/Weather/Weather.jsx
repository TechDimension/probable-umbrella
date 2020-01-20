import React, { useContext } from "react"
import styles from './weather.module.scss'

import {ResultsContext} from '../../context/results-context'
import Icon from "../../components/Icon/Icon"
const Weather= () => {
  const {weather} = useContext(ResultsContext)

  if (weather) {
    switch(weather.icon) {
      case 'clear-day' : {
        return weather.icon = 'sunshine'
      }
      case 'partly-cloudy-day' : {
        return weather.icon = 'cloudy'
      }
    }
  }

  return (
    <div className={styles.Weather}>
      <div className={styles.Header}>
        <h2> Weather </h2>
      </div>

      <div className={styles.Information}>
          <Icon
            src={weather.icon}
            name={weather.icon}
            weather
          >
          </Icon>

        <div className={styles.Details}>
          <p> Day: {weather.day} </p>
          <p> Temperature: {weather.temperature} </p>
          <p> Precipitation: {weather.precipitation}% </p>
          <p> Feels like: {weather.apparentTemperature} </p>
          <p> Description: {weather.icon} </p>
        </div>

        </div>


    </div>
  )
}

export default Weather
