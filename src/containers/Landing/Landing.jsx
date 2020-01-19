import React, { useContext, useState } from "react"
import {geoCodeAddressFromLatLong} from './../../api/geocode';
import {ResultsContext} from '../../context/results-context'

import styles from './landing.module.scss';

const Landing = (props) => {
  const [addressInput, setAddressInput] = useState("")
  const {handleResult} = useContext(ResultsContext)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleResult(addressInput);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((async ({coords}) => {
        const {latitude, longitude} = coords
        const currentPosition = {latitude, longitude, gps:true}
        console.log(currentPosition)
        handleResult(currentPosition);
      }), (error) => console.log(error.message));
    }
  };

  return (
    <div className={styles.Landing}  >

      <form
        className={styles.Form}
        onSubmit={handleSubmit}>
        <input
          className={styles.Input}
           type="text"
               id="location"
               placeholder="Where to Wear"
               onChange={(event) => setAddressInput(event.target.value)}/>
        <div className={styles.Buttons}>
          <input
            className={[styles.Button, styles.Primary].join(' ')}
            type="submit" value="What do I wear" />
          <input
            className={[styles.Button, styles.Secondary].join(' ')}
            type="button" value="Use my location" onClick={handleGetLocation}/>
        </div>
      </form>
    </div>
  );
};

export default Landing;
