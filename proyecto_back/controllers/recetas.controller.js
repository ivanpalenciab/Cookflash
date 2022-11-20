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

//Listar todos las recetas
exports.find = function(req,res){
  Receta.find(function(err,receta){
    res.json(receta)
})
}
//Obtener una receta
exports.findOne = function(req,res){
  Receta.findOne({_id:req.params.id}, function(err,receta){
    res.json(receta)
  })
}

//Actualizar una receta
exports.update = function(req,res){
  /*let receta = {
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
  }*/

  Receta.findByIdAndUpdate(req.params.id,{$set:req.body}, function(err){
    if (err){
      console.error(err),
      response.exito=false,
      response.msg = "Error al modificar la receta"
      res.json(response)
      return;
    }
    response.exito = true,
    response.msg = "receta modificada correctamente"
    res.json(response)
  })
}

/*Esta funcion es para borrar recetas */
exports.remove = function(req,res){
  Receta.findByIdAndRemove({_id:req.params.id}, function(err){
    if(err){
      console.error(err),
      response.exito=false,
      response.msg = err
      res.json(response)
      return;
    }
    response.exito=true
    response.msg = "receta eliminada correctamente"
    res.json(response)
  })
}