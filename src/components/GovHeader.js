import React from "react"

const barraBrasilStyle = {
    background: "#7F7F7F",
    height: "20px",
    padding: "0 0 0 10px",
    display: "block",
};

const menuBarraTempStyle = {
    listStyle: "none"
};

const liStyle = {
    display: "inline",
    float: "left",
    paddingRight: "10px",
    marginRight: "10px",
    borderRight: "1px solid #EDEDED"
};

const a1Style = {
    fontFamily: "sans,sans-serif",
    textDecoration: "none",
    color: "white"
};

const a2Style = {
    fontFamily: "sans,sans-serif",
    textDecoration: "none",
    color: "white"
};

function Header() {
    return (
        <div id="barra-brasil" style={barraBrasilStyle}>
            <ul id="menu-barra-temp" style={menuBarraTempStyle}>
                <li style={liStyle}>
                    <a href="http://brasil.gov.br" style={a1Style}>Portal do Governo Brasileiro</a>
                </li>
                <li>
                    <a style={a2Style} href="http://epwg.governoeletronico.gov.br/barra/atualize.html">Atualize sua Barra de Governo</a>
                </li>
            </ul>
        </div>
    )
}

export default Header

