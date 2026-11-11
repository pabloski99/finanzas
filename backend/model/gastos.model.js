const datebase = require("../db/conexion_db")

console.log(datebase)


const obtenerDatos = async() => {
    const resultados = await datebase.query("SELECT * FROM movimientos")
    console.log(resultados)
}