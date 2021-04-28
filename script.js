$(document).ready(function() {
    $("#formularioContacto").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            correo: {
                required: true,
                email: true
            },
            telefono: {
                required: true,
                number: true,
                minlength: 9,
                maxlength: 9
            },
            mensaje: {
                required: true,
                minlength: 10,
                maxlength: 150
            }

        },
        messages: {
            nombre: {
                required: "Debe ingresar su nombre",
                minlength: "El nombre debe tener mínimo 3 carácteres"
            },
            apellido: {
                required: "Debe ingresar su apellido",
                minlength: "El apellido debe tener mínimo 3 carácteres"
            },
            correo: {
                required: "Debe ingresar su correo electrónico",
                email: "El email debe tener un formato válido"
            },
            telefono: {
                required: "Debe ingresar su teléfono",
                number: "Debe ingresar sólo números",
                minlength: "El teléfono debe tener 9 dígitos",
                maxlength: "El teléfono debe tener 9 dígitos"
            },
            mensaje: {
                required: "Debe ingresar un mensaje",
                minlength: "El mensaje debe tener mínimo 10 carácteres",
                maxlength: "El mensaje no debe tener mas de 150 carácteres"
            }
        }

    });

});
/*
$(document).ready(function() {
    $(window).on("load", function() {
        $.get("https://apis.digital.gob.cl/fl/feriados", function(data) {
            var today = new Date();
            var dd = today.getDay();
            var mm = today.getMonth();
            $.each(data, function(i, item) {
                if (item.fecha.substring(-1, 2) == dd && item.fecha.substring(-4, 2) == mm) {
                    if (item.tipo == "Civil") {
                        $('#feriados').append("<tr><td>" + item.nombre + "</td><td>" +
                            item.fecha + "</td><td>" + item.tipo + "</td></tr>" + "Feriado civil de hoy tiene 10% de descuento en postres" + "</td></tr>");
                    } else {
                        $('#feriados').append("<tr><td>" + item.nombre + "</td><td>" +
                            item.fecha + "</td><td>" + item.tipo + "</td></tr>" + "Feriado religioso de hoy tiene envío gratis" + "</td></tr>");
                    }

                } else if (item.fecha.substring(-1, 2) == dd - 27 && item.fecha.substring(-4, 2) == mm + 1) {
                    if (item.tipo == "Religioso") {
                        $('#feriados').append("<tr><td>" + item.nombre + "</td><td>" +
                            item.fecha + "</td><td>" + item.tipo + "</td></tr>" + "Feriado civil de mañana tiene 10% de descuento en postres" + "</td></tr>");
                    } else {
                        $('#feriados').append("<tr><td>" + item.nombre + "</td><td>" +
                            item.fecha + "</td><td>" + item.tipo + "</td></tr>" + "Feriado religioso de mañana tiene envío gratis" + "</td></tr>");
                    }
                } else {
                    $('#feriados').append("<tr><td>" + "No existen feriados para hoy ni para mañana" + "</td><td>");
                }
            });
        });
    });
});
*/
$(document).ready(function() {
    $.get("https://apis.digital.gob.cl/fl/feriados", function(data) {
        var today = new Date();
        var dd = today.getDay();
        var mm = today.getMonth() + 1;
        $.each(data, function(i, item) {
            if (item.fecha.substring(-1, 2) == dd - 27 && item.fecha.substring(-4, 2) == mm + 1) {
                $('#feriados').append("<tr><td>" + item.nombre + "</td><td>" +
                    item.fecha + "</td><td>" + item.tipo + "</td></tr>" + "Feriado, hoy esta cerrado" + "</td></tr>");
            } else {
                $('#feriados').append("<tr><td>" + "Hoy es día hábil, esta abierto" + "</td><td>");
            }
        });
    });
});