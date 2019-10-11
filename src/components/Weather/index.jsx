import React from 'react'
import './weather.css'
import Header from '../header'

const Weather = (props) => {
  return (
    <div className="container">
      <Header siteTitle={props.siteTitle}/>
      <div className="weatherContainer">
      <div className="address">
        Showing Results for: {props.address}
      </div>
    
    </div>
    </div>
  )
}

export default Weather