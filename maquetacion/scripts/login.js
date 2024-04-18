$(document).ready(() => {
  console.log("login.js cargado");

  // Se comienza la validación del formulario usando JQuery Validator

  $("#login").validate({
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
    submitHandler: () => {
      const email = $("#email").val();
      const password = $("#password").val();
      console.table({ email, password });
    },
  });
});
