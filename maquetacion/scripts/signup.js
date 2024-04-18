function validaDV(rut) {
  // Se separa el número del dígito verificador
  const [numero, dv] = rut.replace("-K", "-k").split("-");

  // Aquí se debe aplicar módulo 11. La función se extrajo de:
  // https://validarutchile.cl/calcular-rut-en-javascript.php
  // ! OJO: Es una función que se llama a sí misma.
  const dvVer = ((T) => {
    let M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  })(numero);

  // Se compara el dígito verificador calculado con el ingresado
  return dvVer == dv;
}

/**
 * Se agregan las reglas personalizadas al plugin jQuery Validation. Se
 * encargan de validar el formato (sin puntos, con guión) y el dígito verificador.
 * @see https://jqueryvalidation.org/
 */
$.validator.addMethod(
  "rut",
  function (value, element) {
    return this.optional(element) || /^[0-9]{7,8}-[0-9Kk]{1}$/.test(value);
  },
  "El RUT ingresado es inválido"
);

$.validator.addMethod(
  "rutdv",
  function (value, element) {
    return this.optional(element) || validaDV(value);
  },
  "El dígito verificador del RUT es inválido"
);

$(document).ready(() => {
  console.log("signup.js cargado");

  // Se cargan las comunas para la región de Valparaíso
  $("#region").change((e) => {
    if ($("#region").find(":selected").val() === "5") {
      $("#comuna").append('<option value="1">Valparaíso</option>');
      $("#comuna").append('<option value="2">Viña del Mar</option>');
      $("#comuna").append('<option value="3">Concón</option>');
      $("#comuna").append('<option value="4">Quilpué</option>');
      $("#comuna").append('<option value="5">Villa Alemana</option>');
    }
  });

  // Se comienza la validación del formulario usando JQuery Validator

  $("#signup").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
      },
      "confirm-password": {
        required: true,
        equalTo: "#password",
      },
      rut: {
        required: true,
        rut: true,
        rutdv: true,
      },
      tyc: {
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
      rut: {
        required: "El RUT es requerido",
        rut: "Formato: Sin puntos, con guión",
        rutdv: "El dígito verificador no es válido",
      },
      "confirm-password": {
        required: "La confirmación de contraseña es requerida",
        equalTo: "Las contraseñas deben coincidir",
      },
      tyc: {
        required: "",
      },
    },

    submitHandler: () => {
      const email = $("#email").val();
      const password = $("#password").val();
      console.table({ email, password });
    },
  });
});
