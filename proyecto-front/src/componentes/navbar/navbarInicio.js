import React from "react";
import {Container,Nav,Navbar,Dropdown,DropdownButton,Row,Col} from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'

//componentes
import ImagenLogo from '../imagenes/imagenLogo'

export default class MenuInicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar"  expand="lg">
        <Container>
          <Navbar.Brand className="logo-menu" href="/login">
            {/*Cookflash <span id="usuario-sub-branm"></span>*/}
            <ImagenLogo />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    );
  }
}
