const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecetaSchema = new Schema({
    nombre_receta: String,
    tipo_receta: String ,
    descripcion: String,
    clasificacion: String,
    origen: String,
    tiempo_preparacion: String,
    tiempo_coccion: String,
    tiempo_refrigeracion: String,
    ingredientes:Schema.Types.Mixed,
    preparacion: String,
    tips_adicionales: String,
    calificacion: String
})

module.exports = mongoose.model("recetas", RecetaSchema)