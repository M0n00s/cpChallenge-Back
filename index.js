const express = require('express')

// creacion de server con express
const app = express()

// middelware stringify
app.use(express.json())
// middelware de rutas
app.use('/', require('./Routes/index'))

// listen del puerto peticiones
const PORT = process.env.PORT || 4000 
app.listen( PORT , () => {
  console.log(`server up port:${ PORT}`)
})

module.exports = app
