import React, { useEffect, useState } from "react"
import BodyPart from '../../components/BodyPart/BodyPart'
import styles from './recommendedClothing.module.scss'
import { calculateClothes } from "../../helpers/clothing"

const recommendedClothing = (props) => {
  return (
    <div className={styles.RecommendedClothing}>
        <div className={styles.Header}>
          <h2> What to wear... </h2>
        </div>
      <div className={styles.ClothingBuilder}>

      <BodyPart
        name={'Head'}
        icon={'tShirt'}
        clothingItems={props.clothes}

      />

      </div>




    </div>
  )
}

export default  recommendedClothing