import React from 'react'
import './weather.css'
import Header from '../header'

const Weather = (props) => {
  return (
    <div className={`container ${props.display}`} >
      <div className="weatherContainer">
      <div className="address">
        {props.address}
      </div>
    
    </div>
       <div className="button" onClick={()=> props.setAddress('')}>
         Again 
        </div> 
    </div>


  )
}

export default Weather