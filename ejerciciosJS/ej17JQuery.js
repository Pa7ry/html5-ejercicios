function ocultaPresenta(){
        $(this).prev("p").toggleClass("oculto");
        if($(this).html()=="Contenido oculto") {
            $(this).html("Ocultar contenidos");
        }
        else {
            $(this).html("Contenido oculto");
        }
}

function init() {
    console.log("DOM Cargado Jquery");
    $(".acordeon").click(ocultaPresenta);
}
$("document").ready(init);