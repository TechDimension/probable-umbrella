import React, {useState} from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Weather from '../components/Weather'
import Header from '../components/header'
import Landing from '../components/landing'
import SEO from "../components/seo"

const IndexPage = () => {
  const [address, setAddress] = useState('')
    const [coords, setCoords] = useState('')

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <Layout>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <SEO title="Home" />

      <Landing siteTitle={data.site.siteMetadata.title} setAddress={setAddress} opacity={address? 0: 1} />
      <Weather 
        setAddress={setAddress}
        address={address} 
        coords={coords} 
        display={address? '':'hidden'} 
      />

    </Layout>
  )
}
export default IndexPage
