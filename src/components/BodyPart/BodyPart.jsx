import React from 'react'
import PropTypes from 'prop-types'

import styles from './bodypart.module.scss'
import Icon from "../Icon/Icon"


const BodyPart = (propsi) => (
  <div className={styles.BodyPart}>
    {console.log(propsi)}
    <Icon
      src={propsi.icon}
      name={propsi.name}>
    </Icon>

    {propsi.clothingItems.map(clothingItem => (
        <div className={styles.ClothingItem}>
          <Icon
            src={clothingItem.icon}
            name={clothingItem.name}
            >
          </Icon>
        </div>
      )
    )}

  </div>
)

BodyPart.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  clothingItems: PropTypes.arrayOf(PropTypes.shape(
    {
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }
  )).isRequired
}

BodyPart.defaultProps = {
  name: 'Body Part',
  icon: 'tShirt',
  clothingItems: [{
   name: 'Item 1',
    icon: 'tShirt'
  }, {
    name: "Item 2",
    icon: 'tShirt'
  }]
}



export default BodyPart
