import React, { Component } from "react"
import MyMap from "../components/map"
import Style from "../styles/global.module.scss"
import GovHeader from "../components/GovHeader"
import GovFooter from "../components/GovFooter"
import FloatTitleMenu from "../components/FloatTitleMenu"
import { Helmet } from "react-helmet"

export default class Index extends Component {
  render() {

    if (typeof window !== 'undefined') {
      return (
        <div>
          <GovHeader className={Style.govHeader} />
          <Helmet>
            <script defer="defer" src="//barra.brasil.gov.br/barra.js" type="text/javascript"></script>
          </Helmet>
          <div className={Style.content}>
            <FloatTitleMenu />
            {/*<SideMenu />*/}
            <MyMap />
          </div>
          <GovFooter />
        </div>
      )
    }
    return null
  }
}