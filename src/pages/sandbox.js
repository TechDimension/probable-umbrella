import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../Layout/layout"
import Results from "../containers/Results/Results"
import SEO from "../components/seo"
import Header from '../components/Header/Header'

import ResultsProvider from './../context/results-context'
import Landing from "../containers/Landing/Landing"


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

    <ResultsProvider>
      <SEO title="Home" />
    <Layout>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <Landing siteTitle={data.site.siteMetadata.title} />

      <Results/>

    </Layout>
    </ResultsProvider>
  )
}
export default Sandbox
