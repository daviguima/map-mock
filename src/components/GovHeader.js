import React from "react"
import Style from "../styles/global.module.scss"

// const barraBrasilStyle = {
//     background: "#7F7F7F",
//     height: "20px",
//     padding: "0 0 0 10px",
//     display: "block",
// };
//
// const menuBarraTempStyle = {
//     listStyle: "none"
// };
//
// const liStyle = {
//     display: "inline",
//     float: "left",
//     paddingRight: "10px",
//     marginRight: "10px",
//     borderRight: "1px solid #EDEDED"
// };
//
// const a1Style = {
//     fontFamily: "sans,sans-serif",
//     textDecoration: "none",
//     color: "white"
// };
//
// const a2Style = {
//     fontFamily: "sans,sans-serif",
//     textDecoration: "none",
//     color: "white"
// };

const Header = () => {
    return (
        <div id="barra-brasil" className={Style.barraBrasilStyle}>
            <ul id="menu-barra-temp" className={Style.menuBarraTempStyle}>
                <li className={Style.liStyle}>
                    <a href="http://brasil.gov.br" className={Style.GovA1Style}>Portal do Governo Brasileiro</a>
                </li>
                <li>
                    <a className={Style.GovA2Style} href="http://epwg.governoeletronico.gov.br/barra/atualize.html">Atualize sua Barra de Governo</a>
                </li>
            </ul>
        </div>
    )
}

export default Header

