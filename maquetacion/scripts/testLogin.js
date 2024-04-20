$(document).ready(() => {
    console.log("test.js cargado");

    $("#region").change((e) => {
        ind = $("#region").find(":selected").val();
        $("#comuna").empty();

        if (ind === "1") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "2") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "3") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "4") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "5") {
          $("#comuna").append('<option value="1">Valparaíso</option>');
          $("#comuna").append('<option value="2">Viña del Mar</option>');
          $("#comuna").append('<option value="3">Concón</option>');
          $("#comuna").append('<option value="4">Quilpué</option>');
          $("#comuna").append('<option value="5">Villa Alemana</option>');
        }
        if (ind === "6") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "7") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "8") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "9") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "10") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "11") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "12") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "13") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "14") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "15") {
          $("#comuna").append('<option value="1">a</option>');
        }
        if (ind === "16") {
          $("#comuna").append('<option value="1">a</option>');
        }
      });

    $("#formValidation").validate({

        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
            },
        },
        messages: {
            email: {
                required: "El email es obligatorio",
                email: "El email no es válido",
            },
            password: {
                required: "La contraseña es obligatoria",
            },
        },

        submitHandler: function(form)
        {
          form.submit();
        }
    });
});
