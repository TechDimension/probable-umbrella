import React, {useState, useEffect} from 'react'
import './weather.css'
import Header from '../header'
import axios from 'axios'

const Weather = (props) => {
  const [{loading, pupper}, setStaate] = useState({loading:false, pupper:null})


  const fetchRicksPupper = () => {
    setStaate({ loading: true })
    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(pupper => {
        const {
          data: { message: img },
        } = pupper
        const breed = img.split("/")[4]
        this.setState({
          loading: false,
          pupper: {
            ...this.state.pupper,
            img,
            breed,
          },
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
  useEffect(() =>fetchRicksPupper(), []);

  return (
    <div className={`container ${props.display}`} >
      <div className="weatherContainer">
      <div className="address">
        {props.address}
        {pupper}
      </div>
    
    </div>
       <div className="button" onClick={()=> props.setAddress('')}>
         Again 
        </div> 
    </div>


  )
}

export default Weather