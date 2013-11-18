//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(message){
	var secciones = $(".section");

    var seccionUno = secciones[0];
    $(seccionUno).children("h4").text("Aca pones el encabezado");
    $(seccionUno).children('.texto_section').find("h3").text("Este es el subtitulo")
    $(seccionUno).children('.texto_section').find("p").text("este es el parrafo").css({'color':'black'})

    var seccionDos = secciones[1];
    $(seccionDos).children("h4").text("aca pongo el otro encabezado");

/*    secciones.each(function(indice, elemento){
        var encabezado = $(this).children("h4");
        encabezado.text("hola " + indice );

        var contenido = $(this).children(".texto_section");
        contenido.each(function(ind, elem){
            var titulo = $(this).children("h3");
            var noticia = $(this).children("p");

            titulo.text("una noticia importante");
            
            noticia.css({"color": "black"});
            noticia.text("hsatuoh sasaotuhas as atohuas usaousaonteuha s asntoehusan uaso aonsua usa oeutansuhaoeuasua usa usasua oseuau asu aimportantisima");


        })
    }); */
    
});
