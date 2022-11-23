import React, { useState }from "react";
import "./home.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import app from "../../app.json";


//Componente
import Menu from "../navbar/navbar";
import Main from "./main";

const { APIHOST } = app;

export default function RecetaPage() {
  let params = useParams();
  console.log(params.id);
  const [receta,setReceta] = useState(null)
  React.useEffect(()=>{

 
  axios
    .get(`${APIHOST}/recetas/${params.id}`)
    .then((res) => {
    
      setReceta(res.data)
      console.log(receta);
    })
    .catch((error) => {
      console.log(error);
    }); },[])

    if (!receta) return null;

  return (
    <div>
      <Menu />
      <Main
        usuario={"ivan"}
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
    </div>
  );
}
