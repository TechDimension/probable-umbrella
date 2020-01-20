import React, { useContext } from "react"
import BodyPart from '../../components/BodyPart/BodyPart'
import styles from './recommendedClothing.module.scss'

import {ResultsContext} from '../../context/results-context'


const RecommendedClothing = () => {
  const {clothes} = useContext(ResultsContext)
  console.log(clothes)

  return (
    <div className={styles.RecommendedClothing}>
      <div className={styles.Header}>
        <h2> What to wear... </h2>
      </div>
      <div className={styles.ClothingBuilder}>


        {Object.keys(clothes).map((key, index) => (
          <BodyPart
            key={key}
            name={key}
            icon={'tShirt'}
            clothingItems={clothes[key]}
          />
        ))}

      </div>
    </div>
  )
}

export default  RecommendedClothing

