const express = require('express')

// creacion de server con express
const app = express()

// middelware stringify
app.use(express.json())
// middelware de rutas
app.use('/', require('./Routes/index'))

// listen del puerto peticiones
app.listen(4000, () => {
  console.log('server up port:4000')
})

module.exports = app
