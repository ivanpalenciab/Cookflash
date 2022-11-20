//Este sera un componente donde aparece informacion de las recetas, apareceran varias en el home.
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function RecetaHome(props) {

 
  return (
    <div>
      <Row id="receta-info">
        <Col xs={2}> </Col>
        <Col id="receta-info-col">
          <h2>{props.nombreReceta}</h2>
          {/*Aqui podria ir una imagen */}
          <Row id="imagen-receta">
            <Col>
              <img src="https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418.jpeg"></img>
            </Col>
          </Row>

          {/*Aqui va la descripcion de la receta*/}
          <p>{props.descripcion}</p>
        </Col>
      </Row>
    </div>
  );
}
