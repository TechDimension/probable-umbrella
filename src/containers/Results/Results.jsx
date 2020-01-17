import React from 'react'

import RecommendedClothing from '../RecommendedClothing/RecommendedClothing'
import Weather from '../Weather/Weather'

import styles from './results.module.scss'


const Results = () => {
  return (
    <div className={styles.Results}>
      <RecommendedClothing/>
      <Weather/>
    </div>
  )
}

export default Results