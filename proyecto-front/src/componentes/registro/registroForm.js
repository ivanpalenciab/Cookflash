import React from "react";
import { Button, Form } from "react-bootstrap";

export default class RegistroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre :'',
      apellidos:'',
      email:'',
      contrasena:'',
      repetirContrasena:'',
      direccion:''
    };
  }

  render() {
    return (
      <main>
        <h1>Registro</h1>

        <Form id="registro-form">
          <Form.Group className="mb-3" controlId="form-nombre">
            <Form.Control type="text" placeholder="Nombres"
            onChange={(e) => 
            this.setState({nombre: e.target.value})}
            />
            {this.state.nombre}
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-apellidos">
            <Form.Control type="email" placeholder="Apellidos"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-email">
            <Form.Control type="email" placeholder="Email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-password">
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-password-repeticion">
            <Form.Control type="password" placeholder="Repetir Contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-direccion">
            <Form.Control type="text" placeholder="Direccion"/>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button id="boton-registrarse" size="lg">
             Registrarme
            </Button>
            </div>
        </Form>
        <a href="">¿Tienes una cuenta ? Inicia sesión</a>
      </main>
    );
  }
}
