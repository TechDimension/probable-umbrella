import  React, { useState} from 'react';

import Header from '../header';
import './landing.css';

const Landing = (props) => {

  const [address, setAddress] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`submitting address: ${address}`);
  }

    return ( 
    <div className="landing"> 
      <form onSubmit={handleSubmit}>
        <label for="location"/>
        <input type="text" 
          id="location"
          placeholder="Where to Wear"
          onChange={(event) => setAddress(event.target.value)}/>
          <div className="buttons">
        <input type="submit" value="What do I wear" />
        <input type="button" value="Use my location" />

          </div>
      </form>
    </div>
    )
  
}

export default Landing;
