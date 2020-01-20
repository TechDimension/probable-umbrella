import React, { useContext } from "react"
import styles from './weather.module.scss'

import {ResultsContext} from '../../context/results-context'
import Icon from "../../components/Icon/Icon"
const Weather= () => {
  const {weather} = useContext(ResultsContext)

  if (weather) {
    weather.icon = weather.icon.split('-').join('_');
  }

  return (

    <div className={styles.Weather}>
      <div className={styles.Header}>
        <h2> Weather </h2>
      </div>

      <div className={styles.Information}>
          <Icon
            src={weather.icon}
            name={weather.nowSummary}
            weather
          >
          </Icon>

        <div className={styles.Details}>
          <p> Day: {weather.day} </p>
          <p> Temperature: {weather.temperature}&#8451; </p>
          <p> Precipitation: {weather.precipitation}% </p>
          <p> Humidity: {weather.humidity}% </p>
          <p> Feels like: {weather.apparentTemperature}&#8451; </p>
          <p> Description: {weather.hourlySummary} </p>
        </div>

        </div>


    </div>
  )
}

export default Weather
