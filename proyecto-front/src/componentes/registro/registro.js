import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./registro.css";

//Componentes
import ImagenLogo from "../imagenes/imagenLogo";
import RegistroForm from "./registroForm";
import MenuInicio from "../navbar/navbarInicio";

export default class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MenuInicio />
        <Container>
          <Row>
            <Col>
              <RegistroForm />
            </Col>
            <Col>
            <div className="imagen-container">
              <img src="https://media.istockphoto.com/id/1201626276/es/foto/comida-de-frijoles-y-arroz-al-estilo-colombiano-colombia.jpg?s=612x612&w=0&k=20&c=Gxvetp-CPkoSOOCe8NUNh7YdNxn_qGynUhZNE-SIzmE="></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
