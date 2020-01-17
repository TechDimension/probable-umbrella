import React, { useState, useEffect } from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import './weather.scss';
import { geoCodeAddress } from '../../api/geocode';
import { getWeather } from '../../api/weather';
import ClothingSection from '../ClothingSection';


const Weather = (props) => {

    const data = useStaticQuery(graphql`
        query weatherQuery {
            cloudySunshine: file(relativePath : { eq: "weather/clouded_sunshine.PNG"}) {
                relativePath
                childImageSharp {
                    fluid (maxWidth: 400, maxHeight: 250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            rain: file(relativePath : { eq: "weather/rain.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cardigan: file(relativePath : { eq: "clothes/cardigan.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            flipFlops: file(relativePath : { eq: "clothes/flip-flops.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const [geocode, setGeocode] = useState();
    const [weather, setWeather] = useState();

    useEffect(() => {
        if (props.address.timestamp){
            const {latitude, longitude} = props.address.coords;
            setGeocode({address:parseFloat(latitude, 2).toFixed(2) + ', ' + parseFloat(longitude,2).toFixed(2)});
            getWeather(latitude,longitude)
                .then(weather => {
                    setWeather(weather);
                }).catch(() => {
                });
        }else {
            geoCodeAddress(props.address).then(geocode => {
                setGeocode(geocode);
                getWeather(geocode.latitude, geocode.longitude)
                    .then(weather => {
                        setWeather(weather);
                    }).catch(() => {
                    });
            }).catch(() => console.log('catching'));
        }

    }, [props.address]);


    return (
        <div className={`container ${props.display}`} >
            <div className="weather-container">
                <div className="weather-header">
                    <div className="address">
                        { geocode ? geocode.address : null }
                    </div>
                    <div className="weather-data">
                        <div className="weather-temperature">
                            { weather? weather.temperature: null } Degrees
                        </div>

                        { weather && weather.icon?
                        <Img fluid={data[weather.icon].childImageSharp.fluid}
                             className="weather-icon"
                             alt={weather.icon}
                        />

                        :null}
                    </div>
                </div>

                {weather? <ClothingSection
                              temperature={weather.temperature}
                              precipitation={weather.precipitation}
                              uvIndex={weather.uvIndex}

                /> :null}
            </div>
            <div className="button" onClick={() => props.setAddress('')}>
                Again
            </div>
        </div>


    );
};


export default Weather;
