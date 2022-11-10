import React from "react";
import "./planes.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class MainPlanes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <Container id="planes-container">
          <Row>
            <Col id="estandar">
              <h1>CookFlash Estandar</h1>
              <div className="d-grid gap-2">
                <Button size="lg" id="boton-1">
                  Comprar
                </Button>
              </div>
              <ul>
                <li>Recomendacion diaria de recetas</li>
                <li>Cesta de ingredientes diaria para las tres comidas</li>
                <li>Snack </li>
                <li>Acceso a nuestra comunidad</li>
              </ul>
            </Col>

            <Col id="full-plus">
              <h1>CookFlash Full Plus </h1>
              <div className="d-grid gap-2">
                <Button size="lg" id="boton-2">
                  Comprar
                </Button>
              </div>
              <ul>
                <li>Recomendacion diaria de recetas</li>
                <li>
                  Cesta de ingredientes para una de las tres comidas del dia
                </li>
                <li>Acceso a nuestra comunidad</li>
              </ul>
            </Col>

            <Col id="weekend">
              <h1>CookFlash Weekend </h1>
              <div className="d-grid gap-2">
                <Button size="lg" id="boton-3">
                  Comprar
                </Button>
              </div>
              <ul>
                <li>Recomendacion diaria de recetas</li>
                <li>
                  Cesta de ingredientes para una de las tres comidas del fin de
                  semana
                </li>
                <li>Acceso a nuestra comunidad</li>
              </ul>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col />
            <Col id="basic">
              <h1>CookFlash Basic</h1>
              <div className="d-grid gap-2">
                <Button size="lg" id="boton-4">
                  Comprar
                </Button>
              </div>
              <ul>
                <li>Recomendacion diaria de recetas</li>
                <li>Acceso a nuestra comunidad</li>
              </ul>
            </Col>
            <Col />
          </Row>
        </Container>
      </main>
    );
  }
}
