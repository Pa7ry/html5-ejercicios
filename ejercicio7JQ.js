var app = {
    resultados: [],
    presentaListado: function(){},
    presentaTabla: function(){},
    presentaRow: function(){},
    presentaGrid: function(){},
    peticionAjax: function(){},
    init: function(){}
}
    noEstaPartido: function (array, boton) {
        var num = array.length;
        var result = true;
        for (var i = 0; i < num; i++) {
            if (array[i] == boton) {
                result = false;
            }
        }
        return result;
    },
    pulsado: function (evento) {
        //console.log(evento.target);
        //console.log(evento.target.parentNode);
        var boton = $(evento.currentTarget)[0];
        //console.log(boton);
        if (app.noEstaPartido(app.seleccionados, boton)) {
            app.seleccionados.push(boton);
        }
        $(evento.currentTarget).attr("disabled", "disabled");
        //console.log(app.seleccionados);
    },
    coloca: function (evento) {
        console.log(app.seleccionados);
        var num = app.seleccionados.length;
        var div = $(evento.currentTarget);
        var dipus = parseInt($(div).children("h2")[0].innerHTML);
        //console.log(dipus);
        for (var i = 0; i < num; i++) {
            var boton = $(app.seleccionados[i]);
            //console.log(boton.attr("data-dipu"));
            dipus = parseInt(dipus) + parseInt(boton.attr("data-dipu"));
            $(div).children("h2")[0].innerHTML = dipus;
            //console.log($(boton[i]).attr("data-nombre"));
            $(app.seleccionados[i]).hide();
            //pinta logo en div
            var HTML = "<img src='img/" + boton.attr("data-img") + "'/>";
            div.append(HTML);
        }
        app.seleccionados = [];
    },
    myHelper: function (event) {
        app.seleccionados.push($(event.currentTarget.outerHTML));
        //console.log(event.currentTarget);
        return event.currentTarget.outerHTML;
    },
    colocaBoton: function (event, elemento) {

    },
    handleDropEvent: function (event, ui) {
        var draggable = ui.draggable;
        var num = app.seleccionados.length;
        //console.log(event.target);
        //console.log(ui.draggable);
        var div = $(event.target);
        var dipus = parseInt($(div).children("h2")[0].innerHTML);
        //console.log(dipus);
        for (var i = 0; i < num; i++) {
            var boton = $(app.seleccionados[i]);
            //console.log(boton.attr("data-dipu"));
            dipus = parseInt(dipus) + parseInt(boton.attr("data-dipu"));
            $(div).children("h2")[0].innerHTML = dipus;
            //console.log($(boton[i]).attr("data-nombre"));
            $(app.seleccionados[i]).hide();
            //pinta logo en div
            var HTML = "<img src='img/" + boton.attr("data-img") + "'/>";
            div.append(HTML);
        }
        app.seleccionados = [];
        $(draggable).hide();
        //app.colocaBoton(event,draggable);
        //alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
    },
    pinta_init: function () {
        var num = resultados.length;

        for (var partido of resultados) {
            console.log(partido);
            //var partido = this.resultados[i];
            //console.log(partido);
            //var partidoHTML='<button id="part-PP" data-dipu="123" data-nombre="PP" class="boton-partido" style="background-image: url(\"logotipo-pp.png\");"></button>';

            var partidoHTML = "<button "+
                " id='part-" + partido.nombre + "' " +
                " data-dipu=" + partido.dipu + " " +
                " data-nombre='" + partido.nombre + "' " +
                " data-img='" + partido.imagen + "'" +
                "class='boton-partido' " +
                "> " +
                "<img src='img/" + partido.imagen + "' width='100px'/> " +
                "<h2>" + partido.dipu + "</h2></button>";

            //console.log(partidoHTML);
            //Injertando al final http://api.jquery.com/append/
            $("#partidos").append(partidoHTML);
        }
        //console.log($(".boton-partido"));
        //$("#partidos button").click(app.pulsado);
        $(".boton-partido").click(app.pulsado);
        $(".boton-partido").draggable({
            cancel: false,
            cursor: 'move',
            containment: 'document',
            helper: app.myHelper
        });
    },
    resetea: function () {
        $("#cabecera div h2").text("0");
        $(".boton-partido").removeAttr("disabled");
        $(".boton-partido").show();
        $("#cabecera div img").remove();
        app.seleccionados = [];
    },
    init: function () {
        /*
        console.log(app.resultados);
        console.log(app.resultados[0]);
        console.log(app.resultados[0].nombre);
        console.log(app.resultados[0].dipu);
        */
        $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2", 
                  function (datos) {
                console.log(datos);
                app.resultados = datos;
                app.pinta_init();
                $("#sies, #noes,#abst").click(app.coloca);
                $("#sies,#noes,#abst").droppable({
                    drop: app.handleDropEvent
                });
                $("#reset").click(app.resetea);
            })
            .fail(function () {
                console.log("Fallo");
            });


    }
};
$(document).ready(app.init);