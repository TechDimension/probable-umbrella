import  React, { useState} from 'react';

import Header from '../header';
import './landing.css';

const Landing = (props) => {

  const [address, setAddress] = useState("");
  // const [opacity, setOpacity] = useState(1);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.address(address);
    // setOpacity(0);
  }

    return ( 
    <div className="landing" style={{opacity:props.opacity}} > 
     
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
