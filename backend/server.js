console.log("hola este es mi promer en app en node")
    const express = require("express")
    const app = express()
    let puerto = 3000

    app.get('/',(require,response)=>{
      response.send("hola clase de programacion")
    })
    
    
    app.listen(puerto,()=>{
        console.log(`corriendo en el ${puerto}`)
    })
