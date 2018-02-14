function init (){
    console.log("Dom Cargado");
    var enlace = document.getElementById("mienlace");
    enlace.addEventListener("click", gestionaclick);
    var boton = document.getElementById("miboton");
    boton.addEventListener ("click", risamalvada);
}
document.addEventListener("DOMContentLoaded", init);

function loaded () {
    console.log("Página cargada");
}
window.addEventListener("load", loaded);

function gestionaclick(evento) {  
    evento.preventDefault();
    console.log("Enlace pulsado");
}

function risamalvada() {
    console.log("¡¡¡MUAHAHAHAHAHAHA!!!");
}