//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(message){
	var secciones = $(".section");

    secciones.each(function(indice, elemento){
        var encabezado = $(this).children("h4");

        encabezado.text("hola " + indice );
    }); 
    
});
