import React, {useState} from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
// import Weather from '../components/Weather'
import Header from '../components/header'
import Landing from '../components/landing'
import SEO from "../components/seo"

const IndexPage = () => {
  const [address, setAddress] = useState('')


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
        <Landing siteTitle={data.site.siteMetadata.title} address={setAddress} />
        {/* <Weather siteTitle={data.site.siteMetadata.title} address={"Basingstoke"} /> */}
    </Layout>
  )
}
export default IndexPage
