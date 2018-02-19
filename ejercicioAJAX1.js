function init(){
    function datosHTML(codigoHTML){
            console.log("success");
            $("#resultados").html(codigoHTML);
    }
    function peticionGet() {
    $.get("titulo.html",
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
    function peticionPost(){
    $.post("formularios.php",{"nombre": "Pepe", "dir": "Calle mayor", "ciudad": "Madrid", "años": 34} ,function (datos) {
            console.log("success");
            $("#resultados").html(datos);
        })
        .done(function () {
            console.log("second success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("finished");
        });
    }
    function peticionGetJson() {
    $("#resultados").html("<h1>Cargando</h1>");
    $.getJSON("ajax.json", function (resultados) {
            console.log("success");
            /*
            for (i in resultados){
                var resultado=resultados[i];
            }
            */
            $.each(resultados, function (i, resultado) {
                $("#resultados").append("<p>" + resultado.nombre + ":"+resultado.diputados+"</p>");
            });
        }).done(function () {
            console.log("second success");
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error " + textStatus);
        console.log("incoming Text " + jqXHR.responseText);
        console.log("error " + errorThrown);
        })
        .always(function () {
            console.log("complete");
        });
}
    $("#getAjax").click(peticionGet);
    $("#postAjax").click(peticionPost);
    $("#getJson").click(peticionGetJson);
}
$(document).ready(init)