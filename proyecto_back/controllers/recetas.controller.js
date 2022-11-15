const Receta = require("../models/recetas.model");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let receta = new Receta({
    nombre_receta: req.body.nombre_receta,
    tipo_receta: req.body.tipo_receta,
    descripcion: req.body.descripcion,
    clasificacion: req.body.clasificacion,
    origen: req.body.origen,
    tiempo_preparacion: req.body.tiempo_preparacion,
    tiempo_coccion: req.body.tiempo_coccion,
    tiempo_refrigeracion: req.body.tiempo_refrigeracion,
    ingredientes:req.body.ingredientes,
    preparacion: req.body.preparacion,
    tips_adicionales: req.body.tips_adicionales,
    calificacion: req.body.calificacion
  })

  receta.save(function (err) {
    if (err) {
      console.log = false,
        response.exito = false,
        response.msg = "Error al guardar receta"
      res.json(response);
      return;
    }
    response.exito = true,
      response.msg = "La receta se guardo correctamente";
    res.json(response);
  });
};
