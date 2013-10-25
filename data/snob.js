//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(message){
	$("body").html("<h1>Hola Mundo </h1>");
});