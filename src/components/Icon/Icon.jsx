import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styles from './icon.module.scss'

const Icon = (props) => {
    const data = useStaticQuery(graphql`
        query IconQuery {
            clear_day: file(relativePath : { eq: "weather/clear-day.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            clear_night: file(relativePath : { eq: "weather/clear-night.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            partly_cloudy_night: file(relativePath : { eq: "weather/partly-cloudy-night.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            partly_cloudy_day: file(relativePath : { eq: "weather/partly-cloudy-day.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
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
            cloudy: file(relativePath : { eq: "weather/cloudy.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sleet: file(relativePath : { eq: "weather/sleet.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            snow: file(relativePath : { eq: "weather/snow.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            wind: file(relativePath : { eq: "weather/wind.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fog: file(relativePath : { eq: "weather/fog.PNG"}) {
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
            boots: file(relativePath : { eq: "clothes/boots.PNG"}) {
                relativePath
                childImageSharp {
                    fluid (maxWidth: 400, maxHeight: 250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cap: file(relativePath : { eq: "clothes/cap.PNG"}) {
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
            hoodie: file(relativePath : { eq: "clothes/hoodie.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jacket: file(relativePath : { eq: "clothes/jacket.PNG"}) {
                relativePath
                childImageSharp {
                    fluid (maxWidth: 400, maxHeight: 250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shorts: file(relativePath : { eq: "clothes/shorts.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jeans: file(relativePath : { eq: "clothes/jeans.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            scarf: file(relativePath : { eq: "clothes/scarf.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sunglasses: file(relativePath : { eq: "clothes/sunglasses.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tShirt: file(relativePath : { eq: "clothes/t-shirt.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vestTop: file(relativePath : { eq: "clothes/vest-top.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hat: file(relativePath : { eq: "clothes/beany.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            accessories: file(relativePath : { eq: "body/accessories.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            head: file(relativePath : { eq: "body/head.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            torso: file(relativePath : { eq: "body/torso.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            legs: file(relativePath : { eq: "body/legs.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            feet: file(relativePath : { eq: "body/feet.PNG"}) {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }

    `)

        let iconStyles = [styles.Icon]


        if (props.body) {
            iconStyles.push(styles.Body)
        }
        if (props.clothing) {
            iconStyles.push(styles.Clothing)
        }
        if (props.weather) {
            iconStyles.push(styles.Weather)
        }

        iconStyles = iconStyles.join(' ')
    return  (


      <div
        className={iconStyles}
      >

          {data[props.src] ?
            <Img
              className={styles.Image}
              fluid={data[props.src].childImageSharp.fluid}
              alt={""}/>:
            <Img
              className={styles.Image}
              fluid={data['cloudy'].childImageSharp.fluid}
              alt={"Image not Found"}/>

          }
          <span className={styles.Description}> {props.name} </span>
          {props.children}
      </div>
      )
}




export default Icon