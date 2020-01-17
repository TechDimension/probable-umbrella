import React from 'react'

import RecommendedClothing from '../RecommendedClothing/RecommendedClothing'
import Weather from '../Weather/Weather'

import styles from './results.module.scss'


const Results = () => {
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
          <RecommendedClothing/>
        </div>
        <div className={styles.Right}>
          <Weather/>
        </div>
      </div>
    </div>
  )
}

export default Results