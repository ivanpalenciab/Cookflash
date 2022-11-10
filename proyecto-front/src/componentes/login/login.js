import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./login.css";
import ImagenLogo from "../imagenes/imagenLogo";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    alert(`Usuario: ${this.state.usuario} - password: ${this.state.pass}`);
  }
  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              
              <ImagenLogo />
              
            </Row>
            <Row >
              <Row>
                <h2>Iniciar sesión</h2>
              </Row>
              <Row>
                <Col
                  sm="12"
                  xs="12"
                  md={{ span: 4, offset: 4 }}
                  lg={{ span: 4, offset: 4 }}
                  xl={{ span: 4, offset: 4 }}
                >
                  <Form id="login-form">
                    <Form.Group>
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          this.setState({ usuario: e.target.value })
                        }
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={(e) =>
                          this.setState({ pass: e.target.value })
                        }
                      />
                    </Form.Group>
                    <Button
                      className="boton-iniciarSesion"
                      variant="primary"
                      onClick={() => {
                        this.iniciarSesion();
                      }}
                    >
                      Iniciar sesión
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
