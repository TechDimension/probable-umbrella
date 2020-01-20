import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styles from './icon.module.scss'

const Icon = (props) => {
    const data = useStaticQuery(graphql`
        query IconQuery {
            cloudySunshine: file(relativePath : { eq: "weather/clouded_sunshine.PNG"}) {
                relativePath
                childImageSharp {
                    fluid (maxWidth: 400, maxHeight: 250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sunshine: file(relativePath : { eq: "weather/sunny.PNG"}) {
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
            cloudy: file(relativePath : { eq: "weather/cloudy.PNG"}) {
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
        }

    `)
    console.log(props)

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
  console.log(iconStyles)
    return  (


      <div

        className={iconStyles}
      >
          <Img
            className={styles.Image}
            fluid={data[props.src].childImageSharp.fluid}
            alt={""}/>
          <span className={styles.Description}> {props.name} </span>
          {props.children}
      </div>
      )
}




export default Icon