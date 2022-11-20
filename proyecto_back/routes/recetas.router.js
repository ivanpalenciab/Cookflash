const express = require("express");
const router = express.Router();
const recetasController = require("../controllers/recetas.controller");

router.post("/create", recetasController.create) //ok
router.get("/", recetasController.find)//ok
router.get("/:id",recetasController.findOne)//ok
router.delete("/:id",recetasController.remove)//ok
router.put("/:id",recetasController.update)


module.exports = router