const modelo = require("../model/categorias.model")

class CategoriasController{

    static async obtenerCategorias(require,response){
        
        const categorias = await modelo.obtenerCategorias()
        return response.json(
            categorias
        )

    }
}
module.exports = CategoriasController