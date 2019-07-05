import React from "react"
import Image from "react-bootstrap/Image"
import Style from "../styles/global.module.scss"
import logo from "../images/embrace.png"
import Row from "react-bootstrap/es/Row"
import Col from "react-bootstrap/es/Col"
import Button from "react-bootstrap/Button"
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar"

const Menu = () => {
  return (
    <div className={Style.floatingMenu}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />

      <p>
        <link href="https://fonts.googleapis.com/css?family=Russo+One&display=swap" rel="stylesheet"/>
        <Row>
          <Col>
            <Image src={logo} roundedCircle />
          </Col>
          <Col>
            <p className={Style.russo}>TECmap</p>
          </Col>
        </Row>
        <ButtonToolbar>
          <Button variant="outline-light">☰ MENU</Button>
          <Button variant="outline-light">SOBRE</Button>
          <Button variant="outline-light">ESTAÇÕES</Button>
          <Button variant="outline-light">CONTATO</Button>
        </ButtonToolbar>

      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>

    </div>
  )
}



export default Menu