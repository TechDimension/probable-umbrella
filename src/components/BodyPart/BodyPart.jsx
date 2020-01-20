import React from 'react'
import PropTypes from 'prop-types'

import styles from './bodypart.module.scss'
import Icon from "../Icon/Icon"


const BodyPart = (props) => (
  <div className={styles.BodyPart} >
    <div className={styles.Icon}>

    <Icon
      body
      src={props.icon}
      name={props.name}>
    </Icon>
    </div>

    {props.clothingItems.map((clothingItem, index) => (
        <div className={styles.ClothingItem} key={index}>
          <div className={styles.Icon}>
          <Icon
            clothing
            src={clothingItem}
            name={clothingItem}
            >
          </Icon>
          </div>
        </div>
      )
    )}

  </div>
)

BodyPart.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  clothingItems: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  keyi: PropTypes.string
}

BodyPart.defaultProps = {
  name: 'Body Part',
  icon: 'tShirt',
  clothingItems: ['Item1, Item2']

}



export default BodyPart
