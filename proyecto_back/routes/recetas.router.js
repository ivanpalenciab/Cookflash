const express = require("express");
const router = express.Router();
const recetasController = require("../controllers/recetas.controller");

router.post("/create", recetasController.create)
router.get("/", recetasController.find)

module.exports = router