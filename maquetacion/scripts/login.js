$(document).ready(() => {
    console.log("login.js cargado");

    // Se comienza la validación del formulario usando JQuery Validator

    $("#loginValidation").validate({

        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
            },
        },
        messages: {
            email: {
                required: "Debe ingresar un correo electrónico",
                email: "El email no es válido",
            },
            password: {
                required: "Debe ingresar una contraseña",
                minlength: "Las contraseñas son de al menos 8 carácteres"
            },
        },
        submitHandler: function(form)
        {
            const email = $("#email").val();
            const password = $("#password").val();
            console.table({ email, password });
            form.submit();
        }
      });
});
