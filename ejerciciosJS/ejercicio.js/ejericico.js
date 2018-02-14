var miIntervalo;

function presentaMensaje(){
    console.log("Mensaje");
}

function intervalo(){
    console.log("lanzando intervalo");
    miIntervalo=setInterval(presentaMensaje, 800);
}

function paraIntervalo() {
    console.log("parando intervalo");
    clearInterval(miIntervalo);
}

var lisa = function cogeEstablecimientos(){
    $.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001",
        function(datos){
            console.log(datos); 
            $("#resultado").html("");
            $.each(datos,function(posicion,dato){    
                $("#resultado").append("<p>"+dato.agentfirstname+" regenta "+dato.entityname+"</p>");
            });
        })
        .fail(function () {
            console.log("error");
        })
    ;
}

function init(){
    console.log("DOM cargado!");
    var valorBuscado = document.getElementById("busca").innerHTML;
    console.log(valorBuscado);
    var timer=document.getElementById("busca");
    timer.addEventListener("click",intervalo);
    var pInterval=document.getElementById("busca");
    pInterval.addEventListener("keydown",paraIntervalo);
}
document.addEventListener("DOMContentLoaded", init);