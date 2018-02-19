function init(){
    console.log("Dom cargado!");    
/*$("#login").submit ("completo", function (){
        evento.preventDefault();
        if($("#nombre").val() == "" ||
          $("#pass").val() == ""){
            console.log("El campo no puede estar vacío.");
            $("#nombre").focus();
            return false;
        }*/
   
    $("#loginform").validate({
        rules:{
            nombre: {
                required:true,
                minlength:2
            },
            pass: {
                required: true,
            }
        },
        messages: {
            nombre: {
                required: "Por favor, introduzca su usuario.",
                minlength: "Debe tener al menos 2 caracteres."
            },
            emailRepetir: {
                required: "Por favor, introduzca su contraseña.",
            }
        }
    });
    
    $("#registroform").validate({
        rules:{
            nombre: {
                minlength:2
            },
            email: {
                email: true,
            },
            email2: {
                    equalTo: "#emailNuevo"
            },
            pass: {
                minlength: 8
            },
            pass2: {
                    equalTo: "#passNuevo"
            }
            
        },
        messages: {
            nombre: {
                required: "Por favor, introduzca un nomre.",
                minlength: "Debe tener al menos 2 caracteres."
            },
            email: {
                required: "Por favor, introduzca un email.",
                email: "Introduzca un email válido (ejemplo@dominio.com)."
            },
            email2: {
                equalTo: "El email introducido no coincide."
            },
            pass2: {
                required: "Por favor, introduzca una contraseña.",
                equalTo: "La contraseña introducida no coincide."
            },
            pass: {
                required: "Por favor, repita la contraseña.",
                minlength: "La contraseña debe tener al menos 8 caracteres."
            }
        }
    });
    
}
$(document).ready(init)