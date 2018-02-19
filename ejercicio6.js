/*presentar los resultados en formato de listado, solo mostrar agentfirstname.
campo de texto, id="texto" y que cuanto se pulse una tecla, se almacena el valor en la variable criterio.
una funcion que filtre los resultados de tiendas. en los resultados solo deberan estar lo que contengan el texto.
aplicar a que se presenten solo los resultados que contengan el texto de la va. criterio, segun se vaya cambiando.
*/

function datosHTML(){
    console.log("success");
    $("#resultados").html(codigoHTML);
}

function peticionGet() {
    $.get("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001",
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

}

function muestraresultados (agentfirstname_filtra) {
    $.each (agentfirstname_filtra, function (i, resultado) {
        $("#resultados").append("<li>" + resultado.agentfirstname + "</li>")
    });
}

function agentes (jsonObj) {
    var resultados = document.createElement("<li>");
    resultados.textContent = jsonObj["agentfirstname"];
    $("#resultados").appendChild(resultados);
}

var criterio = $("#texto").val();

function init(){
    console.log("DOM Cargado");
    peticionGet();
    var guardaPulsa = $("#texto").keyup(criterio);
    console.log(guardaPulsa);
}
$(document).ready(init)