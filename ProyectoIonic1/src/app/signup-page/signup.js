function validaDV(run) {
    // Se separa el número del dígito verificador
    const [numero, dv] = run.replace("-K", "-k").split("-");
  
    // Aquí se debe aplicar módulo 11. La función se extrajo de:
    // https://validarunchile.cl/calcular-run-en-javascript.php
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
    "run",
    function (value, element) {
        return this.optional(element) || /^[0-9]{7,8}-[0-9Kk]{1}$/.test(value);
    },
    "El R.U.N. ingresado es inválido"
);
  
$.validator.addMethod(
    "rundv",
    function (value, element) {
        return this.optional(element) || validaDV(value);
    },
    "El dígito verificador del R.U.N. es inválido"
);

$(document).ready(() => {
    console.log("signup.js cargado");

    $("#region").change((e) => {
        ind = $("#region").find(":selected").val();
        $("#comuna").empty();

        if (ind === "15") {
            $("#comuna").append('<option value="1">Arica</option>');
            $("#comuna").append('<option value="2">Camarones</option>');
            $("#comuna").append('<option value="3">Putre</option>');
            $("#comuna").append('<option value="4">General Lagos</option>');
        }
        else if (ind === "1") {
            $("#comuna").append('<option value="1">Iquique</option>');
            $("#comuna").append('<option value="2">Alto Hospicio</option>');
            $("#comuna").append('<option value="3">Pozo Almonte</option>');
            $("#comuna").append('<option value="4">Camiña</option>');
            $("#comuna").append('<option value="5">Colchane</option>');
            $("#comuna").append('<option value="6">Huara</option>');
            $("#comuna").append('<option value="7">Pica</option>');
        }
        else if (ind === "2") {
            $("#comuna").append('<option value="1">Antofagasta</option>');
            $("#comuna").append('<option value="2">Mejillones</option>');
            $("#comuna").append('<option value="3">Sierra Gorda</option>');
            $("#comuna").append('<option value="4">Taltal</option>');
            $("#comuna").append('<option value="5">Calama</option>');
            $("#comuna").append('<option value="6">Ollagüe</option>');
            $("#comuna").append('<option value="7">San Pedro de Atacama</option>');
            $("#comuna").append('<option value="8">Tocopilla</option>');
            $("#comuna").append('<option value="9">María Elena</option>');
        }
        else if (ind === "3") {
            $("#comuna").append('<option value="1">Copiapó</option>');
            $("#comuna").append('<option value="2">Caldera</option>');
            $("#comuna").append('<option value="3">Tierra Amarilla</option>');
            $("#comuna").append('<option value="4">Chañaral</option>');
            $("#comuna").append('<option value="5">Diego de Almagro</option>');
            $("#comuna").append('<option value="6">Vallenar</option>');
            $("#comuna").append('<option value="7">Alto del Carmen</option>');
            $("#comuna").append('<option value="8">Freirina</option>');
            $("#comuna").append('<option value="9">Huasco</option>');
        }
        else if (ind === "4") {
            $("#comuna").append('<option value="1">La Serena</option>');
            $("#comuna").append('<option value="2">Coquimbo</option>');
            $("#comuna").append('<option value="3">Andacollo</option>');
            $("#comuna").append('<option value="4">La Higuera</option>');
            $("#comuna").append('<option value="5">Paihuano</option>');
            $("#comuna").append('<option value="6">Vicuña</option>');
            $("#comuna").append('<option value="7">Illapel</option>');
            $("#comuna").append('<option value="8">Canela</option>');
            $("#comuna").append('<option value="9">Los Vilos</option>');
            $("#comuna").append('<option value="10">Salamanca</option>');
            $("#comuna").append('<option value="11">Ovalle</option>');
            $("#comuna").append('<option value="12">Combarbalá</option>');
            $("#comuna").append('<option value="13">Monte Patria</option>');
            $("#comuna").append('<option value="14">Punitaqui</option>');
            $("#comuna").append('<option value="15">Río Hurtado</option>');
        }
        else if (ind === "5") {
            $("#comuna").append('<option value="1">Valparaíso</option>');
            $("#comuna").append('<option value="2">Casablanca</option>');
            $("#comuna").append('<option value="3">Concón</option>');
            $("#comuna").append('<option value="4">Juan Fernández</option>');
            $("#comuna").append('<option value="5">Puchuncaví</option>');
            $("#comuna").append('<option value="6">Quintero</option>');
            $("#comuna").append('<option value="7">Viña del Mar</option>');
            $("#comuna").append('<option value="8">Isla de Pascua</option>');
            $("#comuna").append('<option value="9">Los Andes</option>');
            $("#comuna").append('<option value="10">Calle Larga</option>');
            $("#comuna").append('<option value="11">Rinconada</option>');
            $("#comuna").append('<option value="12">San Esteban</option>');
            $("#comuna").append('<option value="13">La Ligua</option>');
            $("#comuna").append('<option value="14">Cabildo</option>');
            $("#comuna").append('<option value="15">Papudo</option>');
            $("#comuna").append('<option value="16">Petorca</option>');
            $("#comuna").append('<option value="17">Zapallar</option>');
            $("#comuna").append('<option value="18">Quillota</option>');
            $("#comuna").append('<option value="19">La Calera</option>');
            $("#comuna").append('<option value="20">Hijuelas</option>');
            $("#comuna").append('<option value="21">La Cruz</option>');
            $("#comuna").append('<option value="22">Nogales</option>');
            $("#comuna").append('<option value="23">San Antonio</option>');
            $("#comuna").append('<option value="24">Algarrobo</option>');
            $("#comuna").append('<option value="25">Cartagena</option>');
            $("#comuna").append('<option value="26">El Quisco</option>');
            $("#comuna").append('<option value="27">El Tabo</option>');
            $("#comuna").append('<option value="28">Santo Domingo</option>');
            $("#comuna").append('<option value="29">San Felipe</option>');
            $("#comuna").append('<option value="30">Catemu</option>');
            $("#comuna").append('<option value="31">Llay-Lllay</option>');
            $("#comuna").append('<option value="32">Panquehue</option>');
            $("#comuna").append('<option value="33">Putaendo</option>');
            $("#comuna").append('<option value="34">Santa María</option>');
            $("#comuna").append('<option value="35">Quilpué</option>');
            $("#comuna").append('<option value="36">Limache</option>');
            $("#comuna").append('<option value="37">Olmué</option>');
            $("#comuna").append('<option value="38">Villa Alemana</option>');
        }
        else if (ind === "6") {
            $("#comuna").append('<option value="1">Rancagua</option>');
            $("#comuna").append('<option value="2">Codegua</option>');
            $("#comuna").append('<option value="3">Coinco</option>');
            $("#comuna").append('<option value="4">Coltauco</option>');
            $("#comuna").append('<option value="5">Doñihue</option>');
            $("#comuna").append('<option value="6">Graneros</option>');
            $("#comuna").append('<option value="7">Las Cabras</option>');
            $("#comuna").append('<option value="8">Machalí</option>');
            $("#comuna").append('<option value="9">Malloa</option>');
            $("#comuna").append('<option value="10">Mostazal</option>');
            $("#comuna").append('<option value="11">Olivar</option>');
            $("#comuna").append('<option value="12">Peumo</option>');
            $("#comuna").append('<option value="13">Pichidegua</option>');
            $("#comuna").append('<option value="14">Quinta de Tilcoco</option>');
            $("#comuna").append('<option value="15">Rengo</option>');
            $("#comuna").append('<option value="16">Requínoa</option>');
            $("#comuna").append('<option value="17">San Vicente</option>');
            $("#comuna").append('<option value="18">Pichilemu</option>');
            $("#comuna").append('<option value="19">La Estrella</option>');
            $("#comuna").append('<option value="20">Litueche</option>');
            $("#comuna").append('<option value="21">Marchigüe</option>');
            $("#comuna").append('<option value="22">Navidad</option>');
            $("#comuna").append('<option value="23">Paredones</option>');
            $("#comuna").append('<option value="24">San Fernando</option>');
            $("#comuna").append('<option value="25">Chépica</option>');
            $("#comuna").append('<option value="26">Chimbarongo</option>');
            $("#comuna").append('<option value="27">Lolol</option>');
            $("#comuna").append('<option value="28">Nancagua</option>');
            $("#comuna").append('<option value="29">Palmilla</option>');
            $("#comuna").append('<option value="30">Peralillo</option>');
            $("#comuna").append('<option value="31">Placilla</option>');
            $("#comuna").append('<option value="32">Pumanque</option>');
            $("#comuna").append('<option value="33">Santa Cruz</option>');
        }
        else if (ind === "7") {
            $("#comuna").append('<option value="1">Talca</option>');
            $("#comuna").append('<option value="2">Constitución</option>');
            $("#comuna").append('<option value="3">Curepto</option>');
            $("#comuna").append('<option value="4">Empedrado</option>');
            $("#comuna").append('<option value="5">Maule</option>');
            $("#comuna").append('<option value="6">Pelarco</option>');
            $("#comuna").append('<option value="7">Pencahue</option>');
            $("#comuna").append('<option value="8">Río Claro</option>');
            $("#comuna").append('<option value="9">San Clemente</option>');
            $("#comuna").append('<option value="10">San Rafael</option>');
            $("#comuna").append('<option value="11">Cauquenes</option>');
            $("#comuna").append('<option value="12">Chanco</option>');
            $("#comuna").append('<option value="13">Pelluhue</option>');
            $("#comuna").append('<option value="14">Curicó</option>');
            $("#comuna").append('<option value="15">Hualañé</option>');
            $("#comuna").append('<option value="16">Licantén</option>');
            $("#comuna").append('<option value="17">Molina</option>');
            $("#comuna").append('<option value="18">Rauco</option>');
            $("#comuna").append('<option value="19">Romeral</option>');
            $("#comuna").append('<option value="20">Sagrada Familia</option>');
            $("#comuna").append('<option value="21">Teno</option>');
            $("#comuna").append('<option value="22">Vichuquén</option>');
            $("#comuna").append('<option value="23">Linares</option>');
            $("#comuna").append('<option value="24">Colbún</option>');
            $("#comuna").append('<option value="25">Longaví</option>');
            $("#comuna").append('<option value="26">Parral</option>');
            $("#comuna").append('<option value="27">Retiro</option>');
            $("#comuna").append('<option value="28">San Javier</option>');
            $("#comuna").append('<option value="29">Villa Alegre</option>');
            $("#comuna").append('<option value="30">Yerbas Buenas</option>');
        }
        else if (ind === "16") {
            $("#comuna").append('<option value="1">Chillán</option>');
            $("#comuna").append('<option value="2">Bulnes</option>');
            $("#comuna").append('<option value="3">Chillán Viejo</option>');
            $("#comuna").append('<option value="4">El Carmen</option>');
            $("#comuna").append('<option value="5">Pemuco</option>');
            $("#comuna").append('<option value="6">Pinto</option>');
            $("#comuna").append('<option value="7">Quillón</option>');
            $("#comuna").append('<option value="8">San Ignacio</option>');
            $("#comuna").append('<option value="9">Yungay</option>');
            $("#comuna").append('<option value="10">Quirihue</option>');
            $("#comuna").append('<option value="11">Cobquecura</option>');
            $("#comuna").append('<option value="12">Coelemu</option>');
            $("#comuna").append('<option value="13">Ninhue</option>');
            $("#comuna").append('<option value="14">Portezuelo</option>');
            $("#comuna").append('<option value="15">Ránquil</option>');
            $("#comuna").append('<option value="16">Treguaco</option>');
            $("#comuna").append('<option value="17">San Carlos</option>');
            $("#comuna").append('<option value="18">Coihueco</option>');
            $("#comuna").append('<option value="19">Ñiquén</option>');
            $("#comuna").append('<option value="20">San Fabián</option>');
            $("#comuna").append('<option value="21">San Nicolás</option>');
        }
        else if (ind === "8") {
            $("#comuna").append('<option value="1">Concepción</option>');
            $("#comuna").append('<option value="2">Coronel</option>');
            $("#comuna").append('<option value="3">Chiguayante</option>');
            $("#comuna").append('<option value="4">Florida</option>');
            $("#comuna").append('<option value="5">Hualqui</option>');
            $("#comuna").append('<option value="6">Lota</option>');
            $("#comuna").append('<option value="7">Penco</option>');
            $("#comuna").append('<option value="8">San Pedro de La Paz</option>');
            $("#comuna").append('<option value="9">Santa Juana</option>');
            $("#comuna").append('<option value="10">Talcahuano</option>');
            $("#comuna").append('<option value="11">Tomé</option>');
            $("#comuna").append('<option value="12">Hualpén</option>');
            $("#comuna").append('<option value="13">Lebu</option>');
            $("#comuna").append('<option value="14">Arauco</option>');
            $("#comuna").append('<option value="15">Cañete</option>');
            $("#comuna").append('<option value="16">Contulmo</option>');
            $("#comuna").append('<option value="17">Curanilahue</option>');
            $("#comuna").append('<option value="18">Los Álamos</option>');
            $("#comuna").append('<option value="19">Tirúa</option>');
            $("#comuna").append('<option value="20">Los Ángeles</option>');
            $("#comuna").append('<option value="21">Antuco</option>');
            $("#comuna").append('<option value="22">Cabrero</option>');
            $("#comuna").append('<option value="23">Laja</option>');
            $("#comuna").append('<option value="24">Mulchén</option>');
            $("#comuna").append('<option value="25">Nacimiento</option>');
            $("#comuna").append('<option value="26">Negrete</option>');
            $("#comuna").append('<option value="27">Quilaco</option>');
            $("#comuna").append('<option value="28">Quilleco</option>');
            $("#comuna").append('<option value="29">San Rosendo</option>');
            $("#comuna").append('<option value="30">Santa Bárbara</option>');
            $("#comuna").append('<option value="31">Tucapel</option>');
            $("#comuna").append('<option value="32">Yumbel</option>');
            $("#comuna").append('<option value="33">Alto Biobío</option>');
            
        }
        else if (ind === "9") {
            $("#comuna").append('<option value="1">Temuco</option>');
            $("#comuna").append('<option value="2">Carahue</option>');
            $("#comuna").append('<option value="3">Cunco</option>');
            $("#comuna").append('<option value="4">Curarrehue</option>');
            $("#comuna").append('<option value="5">Freire</option>');
            $("#comuna").append('<option value="6">Galbarino</option>');
            $("#comuna").append('<option value="7">Gorbea</option>');
            $("#comuna").append('<option value="8">Lautaro</option>');
            $("#comuna").append('<option value="9">Loncoche</option>');
            $("#comuna").append('<option value="10">Melipeuco</option>');
            $("#comuna").append('<option value="11">Nueva Imperial</option>');
            $("#comuna").append('<option value="12">Padre Las Casas</option>');
            $("#comuna").append('<option value="13">Perquenco</option>');
            $("#comuna").append('<option value="14">Pitrufquén</option>');
            $("#comuna").append('<option value="15">Pucón</option>');
            $("#comuna").append('<option value="16">Saavedra</option>');
            $("#comuna").append('<option value="17">Teodoro Schmidt</option>');
            $("#comuna").append('<option value="18">Toltén</option>');
            $("#comuna").append('<option value="19">Vilcún</option>');
            $("#comuna").append('<option value="20">Villarica</option>');
            $("#comuna").append('<option value="21">Cholcholl</option>');
            $("#comuna").append('<option value="22">Angol</option>');
            $("#comuna").append('<option value="23">Collipulli</option>');
            $("#comuna").append('<option value="24">Curacautín</option>');
            $("#comuna").append('<option value="25">Ercillla</option>');
            $("#comuna").append('<option value="26">Lonquimay</option>');
            $("#comuna").append('<option value="27">Los Sauces</option>');
            $("#comuna").append('<option value="28">Lumaco</option>');
            $("#comuna").append('<option value="29">Purén</option>');
            $("#comuna").append('<option value="30">Renaico</option>');
            $("#comuna").append('<option value="31">Traiguén</option>');
            $("#comuna").append('<option value="32">Victoria</option>');
        }
        else if (ind === "14") {
            $("#comuna").append('<option value="1">Valdivia</option>');
            $("#comuna").append('<option value="2">Corral</option>');
            $("#comuna").append('<option value="3">Lanco</option>');
            $("#comuna").append('<option value="4">Los Lagos</option>');
            $("#comuna").append('<option value="5">Máfil</option>');
            $("#comuna").append('<option value="6">Mariquina</option>');
            $("#comuna").append('<option value="7">Pailllaco</option>');
            $("#comuna").append('<option value="8">Panguipulli</option>');
            $("#comuna").append('<option value="9">La Unión</option>');
            $("#comuna").append('<option value="10">Futrono</option>');
            $("#comuna").append('<option value="11">Lago Ranco</option>');
            $("#comuna").append('<option value="12">Río Bueno</option>');            
        }
        else if (ind === "10") {
            $("#comuna").append('<option value="1">Puerto Montt</option>');
            $("#comuna").append('<option value="2">Calbuco</option>');
            $("#comuna").append('<option value="3">Cochamó</option>');
            $("#comuna").append('<option value="4">Fresia</option>');
            $("#comuna").append('<option value="5">Frrunillar</option>');
            $("#comuna").append('<option value="6">Los Muermos</option>');
            $("#comuna").append('<option value="7">Llanquihue</option>');
            $("#comuna").append('<option value="8">Maullín</option>');
            $("#comuna").append('<option value="9">Puerto Varas</option>');
            $("#comuna").append('<option value="10">Castro</option>');
            $("#comuna").append('<option value="11">Ancud</option>');
            $("#comuna").append('<option value="12">Chonchi</option>');
            $("#comuna").append('<option value="13">Curaco de Vélez</option>');
            $("#comuna").append('<option value="14">Dalcahue</option>');
            $("#comuna").append('<option value="15">Puqueldón</option>');
            $("#comuna").append('<option value="16">Queilén</option>');
            $("#comuna").append('<option value="17">Quellón</option>');
            $("#comuna").append('<option value="18">Quemchi</option>');
            $("#comuna").append('<option value="19">Quinchao</option>');
            $("#comuna").append('<option value="20">Osorno</option>');
            $("#comuna").append('<option value="21">Puerto Octay</option>');
            $("#comuna").append('<option value="22">Purranque</option>');
            $("#comuna").append('<option value="23">Puyehue</option>');
            $("#comuna").append('<option value="24">Río Negro</option>');
            $("#comuna").append('<option value="25">San Juan de la Costa</option>');
            $("#comuna").append('<option value="26">San Pablo</option>');
            $("#comuna").append('<option value="27">Chaitén</option>');
            $("#comuna").append('<option value="28">Futaleufú</option>');
            $("#comuna").append('<option value="29">Hualaihué</option>');
            $("#comuna").append('<option value="30">Palena</option>');            
        }
        else if (ind === "11") {
          $("#comuna").append('<option value="1">Coyhaique</option>');
          $("#comuna").append('<option value="2">Lago Verde</option>');
          $("#comuna").append('<option value="3">Aysén</option>');
          $("#comuna").append('<option value="4">Cisnes</option>');
          $("#comuna").append('<option value="5">Guaitecas</option>');
          $("#comuna").append('<option value="6">Cochrane</option>');
          $("#comuna").append("<option value='7'>O'Higgins</option>");
          $("#comuna").append('<option value="8">Tortel</option>');
          $("#comuna").append('<option value="9">Chile Chico</option>');
          $("#comuna").append('<option value="10">Río Ibáñez</option>');
        }
        else if (ind === "12") {
          $("#comuna").append('<option value="1">Punta Arenas</option>');
          $("#comuna").append('<option value="2">Laguna Blanca</option>');
          $("#comuna").append('<option value="3">Río Verde</option>');
          $("#comuna").append('<option value="4">San Gregorio</option>');
          $("#comuna").append('<option value="5">Cabo de Hornos</option>');
          $("#comuna").append('<option value="6">Antártica</option>');
          $("#comuna").append('<option value="7">Porvenir</option>');
          $("#comuna").append('<option value="8">Primavera</option>');
          $("#comuna").append('<option value="9">Timaukel</option>');
          $("#comuna").append('<option value="10">Natales</option>');
          $("#comuna").append('<option value="11">Torres del Paine</option>');
        }
        else if (ind === "13") {
            $("#comuna").append('<option value="1">Santiago</option>');
            $("#comuna").append('<option value="2">Cerrillos</option>');
            $("#comuna").append('<option value="3">Cerro Navia</option>');
            $("#comuna").append('<option value="4">Conchalí</option>');
            $("#comuna").append('<option value="5">El Bosque</option>');
            $("#comuna").append('<option value="6">Estación Central</option>');
            $("#comuna").append('<option value="7">Huechuraba</option>');
            $("#comuna").append('<option value="8">Independencia</option>');
            $("#comuna").append('<option value="9">La Cisterna</option>');
            $("#comuna").append('<option value="10">La Florida</option>');
            $("#comuna").append('<option value="11">La Granja</option>');
            $("#comuna").append('<option value="12">La Pintana</option>');
            $("#comuna").append('<option value="13">La Reina</option>');
            $("#comuna").append('<option value="14">Las Condes</option>');
            $("#comuna").append('<option value="15">Lo Barnechea</option>');
            $("#comuna").append('<option value="16">Lo Espejo</option>');
            $("#comuna").append('<option value="17">Lo Prado</option>');
            $("#comuna").append('<option value="18">Macul</option>');
            $("#comuna").append('<option value="19">Maipú</option>');
            $("#comuna").append('<option value="20">Ñuñoa</option>');
            $("#comuna").append('<option value="21">Pedro Aguirre Cerda</option>');
            $("#comuna").append('<option value="22">Peñalolén</option>');
            $("#comuna").append('<option value="23">Providencia</option>');
            $("#comuna").append('<option value="24">Pudahuel</option>');
            $("#comuna").append('<option value="25">Quilicura</option>');
            $("#comuna").append('<option value="26">Quinta Normal</option>');
            $("#comuna").append('<option value="27">Recoleta</option>');
            $("#comuna").append('<option value="28">Renca</option>');
            $("#comuna").append('<option value="29">San Joaquín</option>');
            $("#comuna").append('<option value="30">San Miguel</option>');
            $("#comuna").append('<option value="31">San Ramón</option>');
            $("#comuna").append('<option value="32">Vitacura</option>');
            $("#comuna").append('<option value="33">Puente Alto</option>');
            $("#comuna").append('<option value="34">Pirque</option>');
            $("#comuna").append('<option value="35">San José de Maipo</option>');
            $("#comuna").append('<option value="36">Colina</option>');
            $("#comuna").append('<option value="37">Lampa</option>');
            $("#comuna").append('<option value="38">Til Til</option>');
            $("#comuna").append('<option value="39">San Bernardo</option>');
            $("#comuna").append('<option value="40">Buin</option>');
            $("#comuna").append('<option value="41">Calera de Tango</option>');
            $("#comuna").append('<option value="42">Paine</option>');
            $("#comuna").append('<option value="43">Melipilla</option>');
            $("#comuna").append('<option value="44">Alhué</option>');
            $("#comuna").append('<option value="45">Curacaví</option>');
            $("#comuna").append('<option value="46">María Pinto</option>');
            $("#comuna").append('<option value="47">San Pedro</option>');
            $("#comuna").append('<option value="48">Talagante</option>');
            $("#comuna").append('<option value="49">El Monte</option>');
            $("#comuna").append('<option value="50">Isla de Maipo</option>');
            $("#comuna").append('<option value="51">Padre Hurtado</option>');
            $("#comuna").append('<option value="52">Peñaflor</option>');            
        }
      });

    $("#signupValidation").validate({

        rules: {
            name: {
                required: true,
            },
            run: {
                required: true,
                run: true,
                rundv: true,
            },
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
            },
            confirmPassword: {
                required: true,
                minlength: 8,
                equalTo: "#password",
            },
            tyc: {
                required: true,
            },
        },
        messages: {
            name:
            {
                required: "Debe ingresar su nombre",
            },
            run: {
                required: "El R.U.N. es requerido",
                run: "Formato: Sin puntos, con guión",
                rundv: "El dígito verificador no es válido",
            },
            email: {
                required: "El email es obligatorio",
                email: "El email no es válido",
            },
            password: {
                required: "La contraseña es obligatoria",
                minlength: "La contraseña debe ser de almenos 8 carácteres",
            },
            confirmPassword: {
                required: "La confirmación de contraseña es requerida",
                minlength: "La contraseña debe ser de almenos 8 carácteres",
                equalTo: "Las contraseñas deben coincidir",
            },
            tyc: {
                required: "",
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
