function codigoPostal() {
    var patron = /^([0])([3])(\d{3})$/g;
    var text = prompt("Ingresa un codigo postal");
    if(patron.test(text)) {
        alert("Código postal correcto");
    }
    else {
        alert("Código postal de 5 dígitos empezando por 03XXX");
    }
}

window.onload = function() {
    this.codigoPostal();
}