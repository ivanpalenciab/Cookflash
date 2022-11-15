const Usuario = require("../models/usuarios.model")
const crypto = require('crypto')
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res){

    hashedpass = crypto.createHash("sha512").update(req.body.contrasena).digest("hex");

    let usuario = new Usuario({
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        email:req.body.email,
        contrasena:hashedpass,
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