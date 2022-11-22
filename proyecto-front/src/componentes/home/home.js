//Librerias externas
import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import { useParams } from "react-router-dom";
//Locales
import app from "../../app.json";

//Componentes
import Menu from "../navbar/navbar";
import RecetaHome from "./recetasHome";
import { Container, Col } from "react-bootstrap";

//let recetas = [];
const { APIHOST } = app;


export default function Home(){
  const [recetas, setRecetas] = useState(null)
  React.useEffect(()=>{
    axios
    .get(`${APIHOST}/recetas`)
    .then((res) => {
      setRecetas (res.data)
      //console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    });
  },[])
  if(!recetas) return null


   
  console.log(recetas)

  
    return (
      <div id="home">
        <Menu />
        <main>
          <Container>
            <Col>
              {recetas.map((receta, i) => {
                return (
                  <RecetaHome
                    key={i}
                    id={receta._id}
                    nombreReceta={receta.nombre_receta}
                    tipo_receta={receta.tipo_receta}
                    descripcion={receta.descripcion}
                    clasificacion={receta.clasificacion}
                    origen={receta.origen}
                    tiempo_preparacion={receta.tiempo_preparacion}
                    tiempo_coccion={receta.tiempo_coccion}
                    tiempo_refrigeracion={receta.tiempo_refrigeracion}
                    ingredientes={receta.ingredientes}
                    preparacion={receta.preparacion}
                    tips_adicionales={receta.tips_adicionales}
                    calificacion={receta.calificacion}
                  />
                );
              })}
            </Col>
          </Container>
        </main>
      </div>
    );
  }

