const Usuario = require("../models/usuarios.model")
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res){
    let usuario = new Usuario({
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        email:req.body.email,
        contrasena:req.body.contrasena,
        direccion:req.body.direccion
    })

    usuario.save(function(err){
        if(err){
            console.log = false,
            response.exito=false,
            response.msg = "Error al guardar usuario"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El usuario se guardo correctamente"
        res.json(response)
    })
}