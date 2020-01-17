import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../Layout/layout"
import Results from "../containers/Results/Results"
import SEO from "../components/seo"
import Header from '../components/header'

const Sandbox = () => {
  const data = useStaticQuery(graphql`
      query sandboxTitle{
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

      <Results/>

    </Layout>
  )
}
export default Sandbox
