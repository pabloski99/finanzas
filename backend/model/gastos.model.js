const datebase = require("../db/conexion_db")

class GastosModel{

    static async obtenerGastos(){
            const [resultados] = await datebase.query("SELECT * FROM movimiento")
            console.log(resultados)
            return resultados
    }

}
const prueba =GastosModel
prueba.obtenerGastos()
module.exports = GastosModel