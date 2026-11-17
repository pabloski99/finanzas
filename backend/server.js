console.log("hola este es mi promer en app en node")
    const express = require("express")
    const router = require ("./routes/router")
    const app = express()
    let puerto = 3000

   app.use("/api",router)
    
    
    app.listen(puerto,()=>{
        console.log(`corriendo en el ${puerto}`)
    })
