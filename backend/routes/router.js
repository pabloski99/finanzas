const express = require("express")
const router = express.Router()
const controlador = require("../controller/gastos.controller")

router.get("/gastos", controlador.obtenerGastos)
module.exports = router