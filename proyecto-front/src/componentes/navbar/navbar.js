import React from "react";
import {Container,Nav,Navbar,Dropdown,DropdownButton,Row,Col} from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'

//componentes
import ImagenLogo from '../imagenes/imagenLogo'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar"  expand="lg">
        <Container>
          <Navbar.Brand className="logo-menu" href="/home">
            {/*Cookflash <span id="usuario-sub-branm"></span>*/}
            <ImagenLogo />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/planes">Planes</Nav.Link>
            </Nav>
           {/* <DropdownButton id="dropdown-button" title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
              <FontAwesomeIcon icon={faUserCircle} />
              </Row>
              <Row>#USUARIO#</Row>
              </Dropdown.Header>
              <Dropdown.Divider/>
              <Dropdown.Item href="/login">Cerrar sesión</Dropdown.Item>
    </DropdownButton>*/}

<DropdownButton id="dropdown-button" title="Nueva receta">
              <Dropdown.Header id="dropdown-header">
                <Row>
              </Row>
              <Row>Nueva Receta</Row>
              </Dropdown.Header>
              <Dropdown.Divider/>
              <Dropdown.Item href="/crear-receta">Crear receta</Dropdown.Item>
              {/*<Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
