
$(document).ready(function(){

    //Inicializa tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
        

});


//Comportamiento de boton enviar en formulario de contacto
$('#form_enviar').click(function(){

    var error = new bootstrap.Modal(document.getElementById('error'), {
        keyboard: false
    });

    var exito = new bootstrap.Modal(document.getElementById('exito'), {
        keyboard: false
    });

    var nombre = $( "#nombre" ).val();
    var correo = $( "#correo" ).val();
    var asunto = $( "#asunto" ).val();
    var mensaje = $( "#mensaje" ).val();

    if(nombre == "" || asunto == "" || mensaje == "" || correo == ""){
        error.show();
    }else{
        exito.show();
        $( "#nombre" ).val("");
        $( "#correo" ).val("");
        $( "#asunto" ).val("");
        $( "#mensaje" ).val("");
    }
});