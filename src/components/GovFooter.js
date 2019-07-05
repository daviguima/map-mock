import React from "react"
// import Style from "../styles/global.module.scss"

const FooterStyle = {
  //background: none repeat scroll 0% 0% #00420c;
  background: "none repeat scroll 0% 0% #2c66ce",
  // background: none repeat scroll 0% 0% #0042b1;
  padding: "1em 0px",
  maxWidth: "100%"
}

const Footer = () => {
    return (
        <div>
            <div id="footer-brasil" style={FooterStyle}></div>
        </div>
    )
}

export default Footer