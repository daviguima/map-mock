import React, { Component } from "react"
import MyMap from "../components/map"
import Style from "../styles/global.module.scss"
import GovHeader from "../components/GovHeader"

export default class Index extends Component {
  render() {

    if (typeof window !== 'undefined') {
      return (

        <div className={Style.content}>
          <GovHeader className={Style.govHeader} />
          <MyMap />
          {/*<h1 className={Style.title}>Hello Gatsby Leaflet (-:</h1>*/}
        </div>

      )
    }
    return null
  }
}