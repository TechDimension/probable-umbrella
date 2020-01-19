import React, { useEffect, useState, useContext } from "react"

import RecommendedClothing from '../RecommendedClothing/RecommendedClothing'
import Weather from '../Weather/Weather'
import {ResultsContext} from '../../context/results-context'

import styles from './results.module.scss'
// import { calculateClothes } from "../../helpers/clothing"
// import { getWeather } from "../../api/weather"
// import { geoCodeAddress } from "../../api/geocode"



const Results = () => {


  const {weather, handleWeather, address, handleAddress} = useContext(ResultsContext)
  const {handleClothes} = useContext(ResultsContext)


  const {temperature, precipitation, uvIndex} = weather

  const [ clothingState, setClothingState] = useState(null);


  return (
    <div className={styles.Results}>
      <div className={styles.Top}>
        <div className={styles.Header}>
          <h1>
            Basingstoke
          </h1>
        </div>
        <a
          className={styles.Again}
          href={'/'}
        >
          Again

        </a>
      </div>

      <div className={styles.Bottom}>

        <div className={styles.Left}>
          <RecommendedClothing clothes={[{
            name:'t-shirt',
            icon: 'tShirt'
          }]}/>
        </div>
        <div className={styles.Right}>
          <Weather/>
        </div>
      </div>
    </div>
  )
}

export default Results