import React from 'react';

import Header from '../header';
import './landing.css';

class Landing extends React.Component {
  render() {
    return ( 
    <div className="landing"> 
      <Header siteTitle={this.props.siteTitle}/>
      <form>
        <label for="location"/>
        <input type="text" id="location" placeholder="Where to Wear"/>
        <input type="submit" value="What do I wear" />
        <input type="button" value="Use my location" />
      </form>
    </div>
    )
  }
  
}

export default Landing;
