var express = require("express");
var app = express();

app.get("/", function(peticion, respuesta){
	respuesta.send("Primera app");
});

app.listen(3000, function(){
	console.log('Aplicacion escuchando en el puerto 3000');
});