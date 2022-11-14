const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    nombre:{type:String,required:true,max:60},
    apellidos:{type:String,required:true,max:40},
    email:{type:String,required:true,max:70},
    contrasena:{type:String,required:true,max:120},
    direccion:{type:String,required:true,max:100}
})

module.exports = mongoose.model("usuarios",UsuariosSchema)