import React from "react";
import {  Button, Form } from "react-bootstrap";
import axios from "axios";
import app from "../../app.json";
import { useHistory } from "react-router-dom"


const { APIHOST } = app;

export default class CrearReceta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre_receta:"",
        tipo_receta: "",
        descripcion: "",
        clasificacion: "",
        origen: "",
        tiempo_preparacion: "",
        tiempo_coccion: "",
        tiempo_refrigeracion: " ",
        ingredientes:" ",
        preparacion: " ",
        tips_adicionales: " ",
        calificacion: " "
      }
  }
  crearReceta() {
      axios.post(`${APIHOST}/recetas/create`, {
        nombre_receta: this.state.nombre_receta,
        tipo_receta: this.state.tipo_receta,
        descripcion:this.state.descripcion ,
        clasificacion:this.state.clasificacion ,
        origen:this.state.origen,
        tiempo_preparacion: this.state.tiempo_preparacion,
        tiempo_coccion:this.state.tiempo_coccion ,
        tiempo_refrigeracion:this.state.tiempo_refrigeracion ,
        ingredientes:this.state.ingredientes,
        preparacion:this.state.preparacion ,
        tips_adicionales:this.state.tips_adicionales,
        calificacion:this.state.calificacion,
        })
        .then((response) => {
          console.log(response);
          console.log("Receta creada correctamente")
        })
        .catch((err) => {
          console.log(err);
        });}
  

  render() {
    return (
      <main>
        <h1>Nueva receta</h1>
        
        <Form id="nueva-receta-form">
        <Form.Group className="mb-3" controlId="form-nombre">
            <Form.Control
              type="text"
              placeholder="Nombre Receta"
              onChange={(e) => this.setState({ nombre_receta: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tipo-receta">
            <Form.Control
              type="text"
              placeholder="Tipo Receta"
              onChange={(e) => this.setState({ tipo_receta: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-descripcion">
            <Form.Control
              type="text"
              placeholder="descripcion"
              onChange={(e) => this.setState({ descripcion: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-clasificacion">
            <Form.Control
              type="text"
              placeholder="Clasificacion"
              onChange={(e) => this.setState({ clasificacion: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-origen">
            <Form.Control
              type="text"
              placeholder="origen"
              onChange={(e) => this.setState({ origen: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tiempo_preparacion">
            <Form.Control
              type="text"
              placeholder="tiempo preparacion total"
              onChange={(e) =>
                this.setState({ tiempo_preparacion: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tiempo-coccion">
            <Form.Control
              type="text"
              placeholder="tiempo coccion"
              onChange={(e) => this.setState({ tiempo_coccion: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tiempo-refrigeracion">
            <Form.Control
              type="text"
              placeholder="tiempo refrigeracion"
              onChange={(e) => this.setState({ tiempo_refrigeracion: e.target.value })}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="form-ingredientes">
            <Form.Control
              type="text"
              placeholder="ingredientes"
              onChange={(e) => this.setState({ ingredientes: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-preparacion">
            <Form.Control
              type="text"
              placeholder="preparacion"
              onChange={(e) => this.setState({ preparacion: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tips-adicionales">
            <Form.Control
              type="text"
              placeholder="tips adicionales"
              onChange={(e) => this.setState({ tips_adicionales: e.target.value })}
            />
          </Form.Group>
          

          <div className="d-grid gap-2">
            
            <Button
              id="boton-crear-receta"
              size="lg"
              onClick={() => {
                this.crearReceta();
              }}
            >
              Crear
            </Button>
          </div>
        </Form>

      </main>
    );
  };
}

