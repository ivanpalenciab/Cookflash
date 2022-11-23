import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import app from '../../app.json';
import Actualizar from "./updateReceta/form";

const { APIHOST } = app;



export default function Main(props) {
  const navigate = useNavigate();
    function borrarReceta(id){
      axios.delete(`${APIHOST}/recetas/`+id).then((res) => {
        console.log("receta borrada");
       navigate('/home')
        
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
    function Actualizar(id){
      navigate('/'+id+'/actualizar')
    }
  

    return (
      <main id="main">
        <Container>
          <Row>
            <Col xs={2}></Col>
            <Col id="bienvenida">
              
            </Col>
          </Row>

          {/* <Row id="mensaje">
            <Col xs={2}></Col>
            <Col><h3>Aqui estan las recomendaciones de hoy </h3></Col>
          </Row> */}

          <Row id="receta-info">
            <Col xs={2}> </Col>
            <Col id="receta-info-col">
              <h2>{props.nombreReceta}</h2>
              {/*Aqui podria ir una imagen */}
              {/* <Row id="imagen-receta">
                <Col><img src=""></img></Col>
              </Row> */}

              {/*Aqui va la descripcion de la receta*/}
              <p>{props.descripcion}</p>
            </Col>
          </Row>
          {/*extra info */}
          <Row id="informacion-adicional">
            <Col xs={2} id="info-aux"></Col>
            <Col id="c1">
              <Row id="t-1">Tiempo Total</Row>
              <Row> {props.tiempo_preparacion} Minutos</Row>
            </Col>
            <Col id="c2">
              <Row id="t-2">Tiempo Coccion</Row>
              <Row> {props.tiempo_coccion} Minutos</Row>
            </Col>
            <Col id="c3">
              <Row id="t-3">Tiempo Refrigereacion</Row>
              <Row> {props.tiempo_refrigeracion} Minutos</Row>
            </Col>
            {/* <Col id="c4">
                <Row id="t-4">Porciones</Row>
                <Row>X Porciones</Row>
              </Col> */}
          </Row>

          <Row id="ingredientes">
            <Col xs={2} id="#ingredientes-aux"></Col>
            <Col id="ingredientes-col">
              <h2>Ingredientes</h2>
              <ul>
                {props.ingredientes.map((ingrediente, i) => {
                  return <li key={i}> {ingrediente}</li>;
                })}
              </ul>
            </Col>
          </Row>

          {/*Aqui viene la preparacion*/}
          <Row id="preparacion">
            <Col xs={2}></Col>
            <Col id="preparacion-col">
              <h2>preparación </h2>
              <ol>
                {props.preparacion.map((paso, i) => {
                  return <li key={i}>{paso}</li>;
                })}
              </ol>
            </Col>
          </Row>

          <Row id="tips">
            <Col xs={2}></Col>
            <Col id="tips-col">
              <h2>Tips adicionales</h2>
              <ul>
                {props.tips_adicionales.map((tip, i) => {
                  return <li key={i}> {tip}</li>;
                })}
              </ul>
            </Col>
          </Row>
                <Button onClick={()=> Actualizar(props.id)}
                >Actualizar receta</Button>
                <Button onClick={()=>borrarReceta(props.id)}
                >Borrar</Button>
        </Container>
      </main>
    );
  }

