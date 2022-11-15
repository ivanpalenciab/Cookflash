import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from "axios";
import app from "../../app.json";

const { APIHOST } = app;
let mistake = false

export default class RegistroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellidos: "",
      email: "",
      contrasena: "",
      repetirContrasena: "",
      direccion: "",
    };
  }
  registrarse() {
    
    if (this.state.contrasena == this.state.repetirContrasena) {
      console.log(this.contrasena,this.repetirContrasena)
      axios.post(`${APIHOST}/usuario`, {
          nombre: this.state.nombre,
          apellidos: this.state.apellidos,
          email: this.state.email,
          contrasena: this.state.contrasena,
          direccion: this.state.direccion,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      mistake = true
      console.log("Contraseñas no coinciden")
      console.log(mistake)
    }
  }

  render() {
    return (
      <main>
        <h1>Registro</h1>

        <Form id="registro-form">
          <Form.Group className="mb-3" controlId="form-nombre">
            <Form.Control
              type="text"
              placeholder="Nombres"
              onChange={(e) => this.setState({ nombre: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-apellidos">
            <Form.Control
              type="email"
              placeholder="Apellidos"
              onChange={(e) => this.setState({ apellidos: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-email">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-password">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => this.setState({ contrasena: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-password-repeticion">
            <Form.Control
              type="password"
              placeholder="Repetir Contraseña"
              onChange={(e) =>
                this.setState({ repetirContrasena: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-direccion">
            <Form.Control
              type="text"
              placeholder="Direccion"
              onChange={(e) => this.setState({ direccion: e.target.value })}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            { mistake &&
              <Alert key={'danger'} variant={'danger'}>
                Las contraseñas no coinciden
              </Alert> }
              
            
            <Button
              id="boton-registrarse"
              size="lg"
              onClick={() => {
                this.registrarse();
              }}
            >
              Registrarme
            </Button>
          </div>
        </Form>
        <a href="login">¿Tienes una cuenta ? Inicia sesión</a>
      </main>
    );
  }
}
