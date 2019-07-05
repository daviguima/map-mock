import React from "react"
// import Button from "react-bootstrap/Button"
// import Style from "../styles/global.module.scss"

const SideMenu = () => {
  return (
    <div id="mySidebar" className="sidebar">
      <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">×</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  )
}

export default SideMenu