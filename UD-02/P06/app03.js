function validarTelefono() {
    var patron = /(9|6|7)(\d{2})(\d{3})(\d{3})$/;
    var salir = true;
    while(salir) {
        var texto = prompt("Ingresa tu número de telefono");
        var numero = parseInt(texto);
        if(patron.test(numero)) {
            alert("Número de telefono correcto");
            salir = false;
        }
        else {
            alert("El número de empezar\n9XXXXXXXX\n6XXXXXXXX\n7XXXXXXXX");
        }
    }
    
    
}

window.onload = function() {
    this.validarTelefono();
}