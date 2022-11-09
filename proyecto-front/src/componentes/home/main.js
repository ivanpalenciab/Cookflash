import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main id="main">
        <Container>
          <Row>
            <Col xs={2}></Col>
            <Col id="bienvenida">
              <div>Bienvenido </div> <div>Usuario</div>
            </Col>
          </Row>
          
          <Row id="mensaje">
            <Col xs={2}></Col>
            <Col><h3>Aqui estan las recomendaciones de hoy </h3></Col>
          </Row>

          


          <Row id="receta-info">
            <Col xs={2}> </Col>
            <Col id="receta-info-col">
              
              <h1>Receta del dia</h1>
              <h2>Nombre Receta</h2>
              {/*Aqui podria ir una imagen */}
              <Row id="imagen-receta">
                <Col><img src="data:image/jpeg;base64,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"></img></Col>
              </Row>

              {/*Aqui va la descripcion de la receta*/}
              <p>
                Esta jajajj jajajja kjfnikowk janjsnsñ jañnñsjnsjnf jnanfdjnfen
                isjiofwe jnawoakmdsoi iandikjodjwo kfnmwon windoindw iwjdjwe
                wandcioffn iewiofnoifjo woinconcoin kin oiknwaionc iwnci
                awindmwa iawnoina{" "}
              </p>
            </Col>
          </Row>
          {/*extra info */}
          <Row id="informacion-adicional">
                <Col xs={2} id="info-aux"></Col>
              <Col id="c1">
                <Row id="t-1">Tiempo Total</Row>
                <Row> X Minutos</Row>
              </Col>
              <Col id="c2">
                <Row id="t-2">Tiempo Coccion</Row>
                <Row> X Minutos</Row>
              </Col>
              <Col id="c3">
                <Row id="t-3">Tiempo Refrigereacion</Row>
                <Row> X Minutos</Row>
              </Col>
              <Col id="c4">
                <Row id="t-4">Porciones</Row>
                <Row>X Porciones</Row>
              </Col>
          </Row>

          <Row id="ingredientes">
            <Col xs={2} id="#ingredientes-aux"></Col>
            <Col id="ingredientes-col">
            <h2>Ingredientes para 4 personas</h2>
            <ol>400g de pasta</ol>
            <ol>2 huevos</ol>
            <ol>150g de queso parmesano</ol>
            <ol>120g de bacon o panceta</ol>
            <ol>Sal y pimienta</ol>
            <ol>Aceite de oliva</ol>
            </Col>
          </Row>

          {/*Aqui viene la preparacion*/}
          <Row id="preparacion">
            <Col xs={2}></Col>
            <Col id="preparacion-col">
            <h2>preparación </h2>
            <p>
              ajndjnfj ajnfj jsfnjnfaj jan jsnsfjn jsana iajsfnio ianijfn isjnfn
              aisfu psu isfauhf oiafu saufhus siufh sufhas iusbf ajjs jsjs
              jshsfgfbj jsjsjs sjjsj jsj jsj sjsjiñ lLALN Llsl ñsñss ñslsl ñslsl
              lslsl{" "}
            </p>
            </Col>
          </Row>

          <Row id="tips">
          <Col xs={2}></Col>
          <Col id="tips-col">
            <h2>Tips adicionales</h2>
            Aqui van los tips adicionales de la receta.
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
