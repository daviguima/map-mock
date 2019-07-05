import React, { Component } from "react"
import MyMap from "../components/map"
import Style from "../styles/global.module.scss"
import GovHeader from "../components/GovHeader"
import GovFooter from "../components/GovFooter"
import FloatTitleMenu from "../components/FloatTitleMenu"
// import SideMenu from "../components/SideMenu"
import { Helmet } from "react-helmet"

export default class Index extends Component {
  render() {

    if (typeof window !== 'undefined') {
      return (
        <div>

          <Helmet>
            <script defer="defer" src="//barra.brasil.gov.br/barra.js" type="text/javascript"></script>
          </Helmet>

          <GovHeader className={Style.govHeader} />

          <FloatTitleMenu />

          <div className={Style.content}>
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