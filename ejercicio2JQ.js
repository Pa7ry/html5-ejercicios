function init(){
    console.log("DOM Cargado Jquery");
    $("#parrafos").append("<p class='p2'>Suspendisse porta, lectus vitae cursus sodales, velit est viverra purus, eget feugiat erat ligula non eros. Donec et diam sed libero eleifend sollicitudin at porttitor ipsum. Sed ac tellus ex. Sed eleifend libero ante, ut vestibulum urna vestibulum id. Proin imperdiet justo ac ornare fringilla. Curabitur porta justo ac est pretium cursus. Etiam vehicula ante non nisi convallis tempus. Ut cursus egestas ligula quis tristique. Praesent leo tellus, ornare at lacinia ut, consequat non nulla. Nunc a venenatis elit. Donec sed est sed ex semper volutpat. Proin eget enim in eros pharetra semper. Etiam tempus, justo a efficitur aliquam, tortor sapien aliquet elit, eu finibus nulla quam et odio.</p>");
    $(".p2").before("<p class='p3'>Maecenas dui sem, malesuada suscipit maximus et, tincidunt ut lorem. Donec lacus enim, lobortis eu enim non, elementum consequat nulla. Quisque est justo, rutrum quis dolor commodo, lobortis elementum turpis. Maecenas et maximus elit. Cras urna ipsum, eleifend sed tristique non, posuere quis nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque suscipit nisi at lacus ultricies, nec gravida arcu sagittis. Proin eu tempor enim. Etiam ornare neque tellus, sit amet sodales orci tempus pellentesque. Cras nulla velit, pharetra ut felis et, pretium mollis tellus. Maecenas malesuada sollicitudin justo vel suscipit.</p>");
    //$(".p1").after("<p class='p3'>Maecenas dui sem, malesuada suscipit maximus et, tincidunt ut lorem. Donec lacus enim, lobortis eu enim non, elementum consequat nulla. Quisque est justo, rutrum quis dolor commodo, lobortis elementum turpis. Maecenas et maximus elit. Cras urna ipsum, eleifend sed tristique non, posuere quis nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque suscipit nisi at lacus ultricies, nec gravida arcu sagittis. Proin eu tempor enim. Etiam ornare neque tellus, sit amet sodales orci tempus pellentesque. Cras nulla velit, pharetra ut felis et, pretium mollis tellus. Maecenas malesuada sollicitudin justo vel suscipit.</p>");
    $(".p1").css("background-color", "magenta");
    var identificativo=$(".p2").attr("id", "parrafo3");
        console.log(identificativo);
    var quitar=$(".p2").removeAttr("id");
        console.log(quitar);
    //var rojo=$(".p2").toggleClass("rojo");
    var rojo=$(".p2").addClass("rojo");
        console.log(rojo);
    //var idForm=$("form > div").eq(0).attr("id", "Nombre");
    $("form div:first").attr("id", "Nombre");
        console.log($("#Nombre").val());
        //console.log($("#username").val());
}
$("document").ready(init);