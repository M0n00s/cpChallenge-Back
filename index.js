const express = require('express')

// creacion de server con express
const app = express()

// middelware stringify
app.use(express.json())

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, x-token"
	);
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, DELETE"
	);
	next();
});





// middelware de rutas
app.use('/', require('./Routes/index'))

// listen del puerto peticiones
const PORT = process.env.PORT || 4000 
app.listen( PORT , () => {
  console.log(`server up port:${ PORT}`)
})

module.exports = app
