import React, { useContext } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo"
import ResultsProvider from './../context/results-context'
import {ResultsContext} from '../context/results-context'
import Main from "../containers/Main/Main"


const IndexPage = () => {
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

  return (

    <ResultsProvider>
      <Seo title="Home" />
      <Main siteTitle={data.site.siteMetadata.title}/>
    </ResultsProvider>
  )
}
export default IndexPage
