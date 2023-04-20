$("#formulario").validate({
    rules: {
        input_nombre: {
          required: true,
          dos_nombres: true,
          solo_letras: true
        },
        input_telefono: {
            required: true,
            digits:true,
            rangelength: [9,9]
        }
      },
    messages: {
    input_nombre: {
        required: "Ingrese un nombre",
        solo_letras: "Debe ingresar solo letras",
        dos_nombres: "Ingrese el apellido"
    },
    input_telefono: {
        required: "Ingrese un telefono",
        digits:"Tiene que escribir solo dígitos",
        rangelength: "Tiene que tener 9 dígitos"

        }
    },
    
    submitHandler: function(form) {
        form.submit();
        alert("Registro válido")
    }

});

jQuery.validator.addMethod("dos_nombres", function(value, element) {
    return /\s/.test(value);
 }, "Ingrese un apellido");

jQuery.validator.addMethod("solo_letras", function(value, element) {
    return /[a-z]/.test(value);
}, "Ingrese solo letras");
