import React from 'react'
import styles from './weather.module.scss'

const weather= () => {
  return (
    <div className={styles.Weather}>
      <div className={styles.Header}>
        <h2> Weather </h2>
      </div>

      <div className={styles.Information}>

      <div className={styles.Icon}>

      </div>

      <div className={styles.Details}>
        <p> Temperature: 24 </p>
        <p> Precipitation: 20% </p>
        <p> Feels like: 21 </p>
        <p> Description: A nice warm summers day, with slight showers</p>
      </div>
      </div>



    </div>
  )
}

export default weather
