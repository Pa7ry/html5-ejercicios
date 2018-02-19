var criterio;
var datosguardados;

function imprimeDatos(){

for (let i in datosguardados) {
    if (datosguardados[i].agentfirstname) {
        if (datosguardados[i].agentfirstname.includes(criterio)){
        $("#resultados").append("<li>"+datosguardados[i].agentfirstname+"</li>");
    }}
}
}

function peticionGet() {
    $.get("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001", json => {
        datosguardados = json
    })
}    

$("#texto").keyup(() => {
    criterio = $("#texto").val();
});