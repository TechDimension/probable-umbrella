import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Landing from '../components/landing'
import SEO from "../components/seo"

const IndexPage = () => {

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
      <SEO title="Home" />
        <Landing siteTitle={data.site.siteMetadata.title} />
    </Layout>
  )
}
export default IndexPage
