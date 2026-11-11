const datebase = require("../db/conexion_db")



const obtenerDatos = async() => {
    const resultados = await datebase.query("SELECT * FROM movimiento")
    console.log(resultados)
}


obtenerDatos()