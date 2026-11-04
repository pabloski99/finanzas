console.log("hola este es mi promer en app en node")
    const express = require("express")
    const app = express()
    let puerto = 3000

    app.get('/',(require,response)=>{
      response.send("hola clase de programacion")
    })
    
    
    app.listen(3000,()=>{
        console.log("este es el servidor que corre en el puerto" + puerto)
    })