import  React, { useState} from 'react';
import {geoCodeAddressFromLatLong} from './../../api/geocode';

import Header from '../header';

import './landing.css';

const Landing = (props) => {

    const [address, setAddress] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.setAddress(address);
    };

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((async ({coords}) => {
              const formattedAddress = await geoCodeAddressFromLatLong(coords.latitude, coords.longitude)
                props.setAddress(formattedAddress.address);
            }), (error) => setAddress(error.message));
        }
    };

    return (
        <div className="landing" style={{opacity:props.opacity}} >
          <form onSubmit={handleSubmit}>
            <input type="text" 
                   id="location"
                   placeholder="Where to Wear"
                   onChange={(event) => setAddress(event.target.value)}/>
            <div className="buttons">
              <input type="submit" value="What do I wear" />
              <input type="button" value="Use my location" onClick={handleGetLocation}/>

            </div>
          </form>
        </div>
    );
};

export default Landing;
