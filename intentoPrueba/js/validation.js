$("#formulario").validate({

    rules: {

        txtNombre: {

            required: true,
            solo_letras: true

        },

        txtApellido: {

            required: true,
            solo_letras: true

        },

        txtRut: {

            required: true,
            validarRut: true

        },

        txtCorreo: {

            required: true,
            email: true

        },

        txtTelefono: {

            required: true,
            digits: true,
            rangelength: [9,9]

        }

    },

    messages: {

        txtNombre: {

            required: "Este campo es requerido",
            solo_letras: "Este campo solo admite letras"

        },

        txtApellido: {

            required: "Este campo es requerido",
            solo_letras: "Este campo solo admite letras"

        },

        txtRut: {

            required: "Este campo es requerido",
            validarRut: "Ingrese un rut valido"

        },

        txtCorreo: {

            required: "Este campo es requerido",
            email: "Este campo se debe llenar con un email valido"

        },

        txtTelefono: {

            required: "Este campo es requerido",
            digits: "Este campo solo admite numeros",
            rangelength: "Este campo debe tener 9 digitos"

        }

    },

    submitHandler: function(form) {

        form.submit();

    }

});


function validarRut(rut){
    var suma=0; 
    var arrRut = rut.split("-"); 
    var rutSolo = arrRut[0]; 
    var verif = arrRut[1]; 
    var continuar = true; 
    for(i=2;continuar;i++){ 
      suma += (rutSolo%10)*i; 
      rutSolo = parseInt((rutSolo /10)); 
      i=(i==7)?1:i; 
      continuar = (rutSolo == 0)?false:true; 
    }
     resto = suma%11; dv = 11-resto; 
     if(dv==10){  
        if(verif.toUpperCase() == 'K') return true;
     }else if (dv == 11 && verif == 0)
      return true; 
      else if (dv == verif) return true; 
      else return false;
      return false;
  
}

function validarRut(radio){

    if(document.querySelector('input[name="radio"]:checked')) {
        return true;
    }

    return false;
  

}


jQuery.validator.addMethod("solo_letras", function(value, element) {
    return /[a-z]/.test(value);
}, "Ingrese solo letras");

jQuery.validator.addMethod("validarRut", function(value, element) {
    return this.optional(element) || validarRut(value);
}, "Ingrese un rut valido");

jQuery.validator.addMethod("validarRadio", function(value, element) {
    return this.optional(element) || validarRadio(value);
}, "Ingrese una opcion");
