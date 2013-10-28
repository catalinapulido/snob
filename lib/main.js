//Importa el API para modificacion de paginas
var pageMod = require("sdk/page-mod");
//importa el API self
var self =require("sdk/self");


pageMod.PageMod({
    include: "*.jetset.com.co",
    contentScriptFile: [self.data.url("jquery-1.10.2.min.js"),
					   self.data.url("snob.js")],
                       
    onAttach: function(worker){
    	worker.port.emit("replacePage", "pagematches ruleset");
    }
});
