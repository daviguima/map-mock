import React, { Component } from "react"
import MyMap from '../components/map'
import Style from '../styles/global.module.scss'

export default class Index extends Component {
  render() {


    if (typeof window !== 'undefined') {
      return (
        <div>
          <MyMap />
          <h1 className={Style.title}>Hello Gatsby Leaflet (-:</h1>
        </div>
      )
    }
    return null
  }
}