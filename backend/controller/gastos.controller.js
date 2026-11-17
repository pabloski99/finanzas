const modelo = require("../model/gastos.model")

class GastosController{

    static async obtenerGastos(require,response){
        const datos = await modelo.obtenerGastos()
        return response.json(
            datos
        )

    }
}
module.exports = GastosController