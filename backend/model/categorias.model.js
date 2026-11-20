const database = require("../db/conexion_db")

class CategoriasModel{

    static async obtenerCategorias(){
        
        const [resultadoDatos] = await database.query ("SELECT * FROM movimientos")
        console.log(resultadoDatos)
        return resultadoDatos
        

    }
}
module.exports = CategoriasModel