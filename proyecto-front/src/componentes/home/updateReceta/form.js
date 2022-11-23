import React from "react";
import {  Button, Form } from "react-bootstrap";
import axios from "axios";
import app from "../../../app.json";
import { useParams,useNavigate } from "react-router-dom";


const { APIHOST } = app;

export default function Actualizar() {
  let params = useParams();
  const navigate = useNavigate();
    
      const[nombre_receta, setNombre]=React.useState(" ");
       const [ tipo_receta,setTipo] = React.useState(" ");
        const [descripcion, setDescripcion] = React.useState(" ");
        const [clasificacion,setClasificacion] =  React.useState(" ");
        const [origen,setOrigen] = React.useState(" ");
       const [ tiempo_preparacion,setTiempoPreparacion] = React.useState(" ");
       const [ tiempo_coccion,setTiempoCoccion] = React.useState(" ");
       const [ tiempo_refrigeracion,setTiempoRefrigeracion] =  React.useState(" ");
       const [ ingredientes,setIngredientes] = React.useState(" ");
       const [ preparacion,setPreparacion] =  React.useState(" ");
       const [ tips_adicionales,setTips] =  React.useState(" ");

  
   function actualizarReceta() {
      axios.put(`${APIHOST}/recetas/${params.id}`, {
        nombre_receta: nombre_receta,
        tipo_receta: tipo_receta,
        descripcion: descripcion ,
        clasificacion: clasificacion ,
        origen: origen,
        tiempo_preparacion: tiempo_preparacion,
        tiempo_coccion: tiempo_coccion ,
        tiempo_refrigeracion: tiempo_refrigeracion ,
        ingredientes:ingredientes,
        preparacion: preparacion ,
        tips_adicionales: tips_adicionales,
        })
        .then((response) => {
          console.log(response);
          console.log("Receta actualizada correctamente")
          navigate('/'+params.id)
        })
        .catch((err) => {
          console.log(err);
        });}
  
    return (
      <main>
        <h1>Actualizar receta</h1>
        
        <Form id="nueva-receta-form">
        <Form.Group className="mb-3" controlId="form-nombre">
            <Form.Control
              type="text"
              placeholder="Nombre Receta"
              onChange={(e) => setNombre( e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tipo-receta">
            <Form.Control
              type="text"
              placeholder="Tipo Receta"
              onChange={(e) => setTipo( e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-descripcion">
            <Form.Control
              type="text"
              placeholder="descripcion"
              onChange={(e) => setDescripcion( e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-clasificacion">
            <Form.Control
              type="text"
              placeholder="Clasificacion"
              onChange={(e) =>setClasificacion( e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-origen">
            <Form.Control
              type="text"
              placeholder="origen"
              onChange={(e) => setOrigen( e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tiempo_preparacion">
            <Form.Control
              type="text"
              placeholder="tiempo preparacion total"
              onChange={(e) =>
                setTiempoPreparacion( e.target.value )
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tiempo-coccion">
            <Form.Control
              type="text"
              placeholder="tiempo coccion"
              onChange={(e) => setTiempoCoccion( e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tiempo-refrigeracion">
            <Form.Control
              type="text"
              placeholder="tiempo refrigeracion"
              onChange={(e) => setTiempoRefrigeracion(  e.target.value )}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="form-ingredientes">
            <Form.Control
              type="text"
              placeholder="ingredientes"
              onChange={(e) => setIngredientes(  e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-preparacion">
            <Form.Control
              type="text"
              placeholder="preparacion"
              onChange={(e) => setPreparacion(  e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-tips-adicionales">
            <Form.Control
              type="text"
              placeholder="tips adicionales"
              onChange={(e) => setTips( e.target.value )}
            />
          </Form.Group>
          

          <div className="d-grid gap-2">
            
            <Button
              id="boton-crear-receta"
              size="lg"
              onClick={() => {
                actualizarReceta();
              }}
            >
              actualizar
            </Button>
          </div>
        </Form>

      </main>
    );
  };
