import React, { useEffect, useState, useContext } from "react"

import RecommendedClothing from '../RecommendedClothing/RecommendedClothing'
import Weather from '../Weather/Weather'
import {ResultsContext} from '../../context/results-context'

import styles from './results.module.scss'
// import { calculateClothes } from "../../helpers/clothing"
// import { getWeather } from "../../api/weather"
// import { geoCodeAddress } from "../../api/geocode"



const Results = () => {
  const {address} = useContext(ResultsContext)

  return (
    <div className={styles.Results}>
      <div className={styles.Top}>
        <div className={styles.Header}>
          <h1>
            {address.address}
          </h1>
        </div>
      </div>

      <div className={styles.Bottom}>

        <div className={styles.Left}>
          <RecommendedClothing />
        </div>
        <div className={styles.Right}>
          <Weather/>
        </div>
      </div>
    </div>
  )
}

export default Results