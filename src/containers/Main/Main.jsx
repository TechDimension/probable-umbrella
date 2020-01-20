import React, { useContext } from "react"

import Layout from "../../Layout/layout"
import Results from "../Results/Results"
import Header from '../../components/Header/Header'

import Landing from "../Landing/Landing"
import {ResultsContext} from '../../context/results-context'


const  Main= ({siteTitle}) => {
  const {resultsLive} = useContext(ResultsContext)

  return (
      <Layout>
        <Header siteTitle={siteTitle}/>
        <Landing siteTitle={siteTitle} />

        {resultsLive? <Results/> : null }

      </Layout>
  )
}
export default Main
