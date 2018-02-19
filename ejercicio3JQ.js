function init() {
    console.log("Dom cargado");
    $("ul:first li").eq(2).css("background-color", "yellow");
    $("ul:first li").eq(2).next().css("background-color", "yellow");
    $("ul:first li").eq(2).parent().attr("id", "ul1");
    $("body ul:nth-child(3) li:first").parent().children().css("background-color", "red");
}
$("document").ready(init)