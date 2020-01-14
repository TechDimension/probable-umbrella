import React, {useState, useEffect} from "react"
import {useStaticQuery, graphql} from 'gatsby'
import './clothingSection.css'
import {calculateClothes} from '../../helpers/clothing'
import Img from 'gatsby-image'


const ClothingSection = (props) => {
  const [ clothingState, setClothingState] = useState(null);

    const {temperature, precipitation, uvIndex} = props;



  useEffect(() => {
    const newClothingState = calculateClothes({temperature,precipitation,uvIndex});
    setClothingState(newClothingState);
  },[temperature, precipitation, uvIndex]);


  const data = useStaticQuery(graphql`
      query ClothesQuery {
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

  return (
    <div className="clothing-section">
      {clothingState ?
        <div>
          <i className="description">
            {clothingState.description}
          </i>
          <div>
            Temperature: {props.temperature}
          </div>
          <div className="clothes-list">
            {clothingState.clothes.map((cloth,key) =>
              <div key={key}>
                  {data[cloth] ?
                <Img
                    fluid={data[cloth].childImageSharp.fluid}
                    alt={"Clothing"}
                    className={"ClothingItem"}
                />: <h3> {cloth} Image not ready yet </h3>
                  }
              </div>
            )}
          </div>
        </div> :null}

    </div>
  );
};



export default ClothingSection;
