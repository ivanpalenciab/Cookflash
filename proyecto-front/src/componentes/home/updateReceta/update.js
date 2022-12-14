import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import "./registro.css";

//Componentes
import Atualizar from "./form";
import Menu from "../../navbar/navbar";

export default class ActualizarReceta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Menu />
        <Container>
          <Row>
            <Col>
              <Atualizar />
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
