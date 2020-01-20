import React, { useContext } from "react"

import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import ResultsProvider from './../context/results-context'
import {ResultsContext} from '../context/results-context'
import Main from "../containers/Main/Main"


const Sandbox = () => {
  const {weather} = useContext(ResultsContext)
  const data = useStaticQuery(graphql`
      query sandboxTitle{
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
  console.log(weather)

  return (

    <ResultsProvider>
      <SEO title="Home" />
      <Main siteTitle={data.site.siteMetadata.title}/>
    </ResultsProvider>
  )
}
export default Sandbox
