/*
1.- Crea un fichero eventos.html e incluye JQuery
2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla
3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón
3.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón
4.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola
5.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla
6.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos
7.- Coloca un botón en el HTML y haz que cuando me hagan click en el saque un mensaje por consola
8.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también
9.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado
*/
function init(){
    console.log("Dom cargado!");
    $("#miboton").click("click", function(){
        console.log("Bieeeen");
    });
    $("#otroboton").click("otro", function(){
        $("#otroboton").css("border-color", "red");
    });
    $("#tercerboton").click("mas", function(){
        $("#tercerboton").css("background-color", "lightgreen");
    });
    $("#texto").focusin("focus", function(){
        console.log("Estas focusin");
    });
    $("#texto").focusout("nofocus", function (){
        console.log("Te has desfocus");
    });
    $("#login").submit ("completo", function (){
        evento.preventDefault();
        if($("#nombre").val() == "" ||
          $("#pass").val() == ""){
            console.log("El campo no puede estar vacío.");
            $("#nombre").focus();
            return false;
        };

    });
    $("#enlace").mouseenter("dentro", function(){
        console.log("Estás dentro");
    });
    $("#enlace").mouseout("fuera", function(){
        console.log("Estás fuera");
    });
    $("#cuartoboton").click("coñazo", function(){
        console.log("Deja de pulsar botones, ¡pesado!");
    });
    $("#nombre").focusout("nonombre", function(){
        if($("#nombre").val() == ""){
            console.log("¡¿Cómo pretendes entrar sin nombre?!");
        };
    })
}
$("document").ready(init);