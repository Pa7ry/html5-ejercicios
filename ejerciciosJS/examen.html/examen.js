function init () {
    console.log("DOM Cargado Jquery");
    
    var texto_a_buscar = function guardaTexto () {
        var guarda = $("#busqueda").val();
        guarda.keyup;
    }
    console.log(texto_a_buscar);

    var miIntervalo;

    function espera(){
        console.log("Esperando");
        miIntervalo=setInterval(texto_a_buscar, 800);
    }
    
    function paraIntervalo() {
        console.log("Parando intervalo");
        clearInterval(miIntervalo);
    }

    var timer = $("#busqueda");
    timer.keydown (espera);
    var para = $("#busqueda");
    function paraGuarda () {
    para.keyup(paraIntervalo);
    }

    function datosHTML(codigoHTML){
        console.log("success");
        $("#sugerencias").html(codigoHTML);
}

    var lista_articulos = function peticionGet() {
        $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",
              //success function
              datosHTML)
            .done(function () {
                console.log("second success");
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("error " + textStatus);
            console.log("incoming Text " + jqXHR.responseText);
            console.log("error " + errorThrown);
            })
            .always(function () {
                console.log("finished");
            });
    }

    var filtrarArticulos = function () {
        var resultado = "";
        for (var texto_a_buscar in lista_articulos);
        
    }

    $("#getAjax").click(lista_articulos);
}
$("document").ready(init);