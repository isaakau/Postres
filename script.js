// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})

$(document).ready(function() {
    $("#formularioContacto").validate({
        rules: {
            nombre: {
                required: true,
                minlenght: 3
            },
            apellido: {
                required: true,
                minlenght: 3
            },
            correo: {
                required: true,
                email: true
            },
            telefono: {
                required: true,
                number: true
            }

        },
        messages: {
            nombre: {
                required: "Debe ingresar su nombre",
                minlenght: "El nombre debe tener mínimo 3 caracteres"
            },
            apellido: {
                required: "Debe ingresar su apellido",
                minlenght: "El apellido debe tener mínimo 3 caracteres"
            },
            correo: {
                required: "Debe ingresar su correo electrónico",
                email: "El email debe tener un formato válido"
            },
            telefono: {
                required: "Debe ingresar su teléfono",
                number: "Debe ingresar sólo números"
            }
        }

    });

});