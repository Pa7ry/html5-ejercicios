/* Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado */

//var todotexto = texto1 + texto2 + texto3

function ponClase(event){
    var texto = this.parentNode.children[0];
    texto.classList.toggle("oculta");
    if (texto.className == "oculta") {
        this.innerHTML = "Texto Oculto"
    } else {
        this.innerHTML = "Ocultar contenidos"
    }
}
/*
function ponClase () {
    var texto1 = document.getElementById("texto1")
    texto1.classList.toggle("oculta");
    if (texto1.className == "oculta") {
        document.getElementById("enlace1").innerHTML = "Texto Oculto"
    } else {
        document.getElementById("enlace1").innerHTML = "Ocultar contenidos"
    }
}

*/

function init(){
    console.log("DOM cargado!");
    var enlaces=document.querySelectorAll(".acordeon");
    for (var item of enlaces){
        item.addEventListener("click", ponClase);
    }
    /*
    var enlace = document.getElementById("enlace1");
    enlace.addEventListener("click", ponClase);

    var enlaces2 = document.getElementById("enlace2");
    enlaces2.addEventListener("click", ponClase)

    var enlaces3 = document.getElementById("enlace3");
    enlaces3.addEventListener("click", ponClase);
    */
}

window.addEventListener("load",init);



/*function init(){
    $("a").on("click", function () {
        $("p").toggleClass("oculta");
        console.log("texto oculto");
    });
}
$(document).ready(init); 


function init() {
    console.log("DOM Cargado Jquery");
    $(".enlaces").click(function () {
        $(this).prev().toggleClass("hide");
        if($(this).prev().hasClass("hide")) {
            this.innerHTML="show";
        }
        else {
            this.innerHTML="hide";
        }
    });
}
$("document").ready(init);
*/