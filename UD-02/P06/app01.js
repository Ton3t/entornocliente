function validarEntero() {
    var patron = new RegExp('[0-9]$');
    var texto = document.getElementById("idNumero").value;
    if(patron.test(texto)) {
        alert("Es un número");
    }
    else {
        alert("No es un número");
    }
}

function validarDni() {
    
    var patron = /^(\d{8})([a-zA-Z])$/;
    var texto = document.getElementById("idDni").value;
    var numeroDni = texto.replace(patron, "$1");
    var letraDni = texto.replace(patron, "$2");
    var resul = numeroDni % 23;
    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    if(letraDni.toUpperCase() == letras[resul] && patron.test(texto)) {
        alert("Dni correcto");
    }
    else {
        alert("Dni incorrecto");
    }
}

function validarMatricula() {
    var patron = /^\d{4}\D{3}$/;
    var texto = document.getElementById("idMatricula").value;
    if(patron.test(texto)) {
        alert("Matricula correcta");
    }
    else {
        alert("Matricula incorrecta");
    }
}

function validarTwitter() {
    var patron = /^[@](\w){1,15}$/;
    var texto = document.getElementById("idUsuario").value;
    if(patron.test(texto)) {
        alert("Usuario de twitter correcto");
    }
    else {
        alert("Usuario de twitter incorreto");
    }
}

function validarFecha() {
    var patron = /^([0-3][1-9])[/]([0-1][1-9])[/]([0-2][0-9][0-9][0-9])$/;
    var texto = document.getElementById("idFecha").value;
    var mes = texto.replace(patron, "$2");
    if(patron.test(texto) && mes <= 12) {
        alert("Fecha " + texto + " introducida correctamente");
    }
    else {
        alert("Fecha no encontrada. Porfavor ingrese una fecha XX/XX/XXXX");
    }
}

function validarEmail() {
    var patron = /^\w{1,20}[@]\w{1,20}[.]\D{2,3}$/;
    var texto = document.getElementById("idEmail").value;
    if(patron.test(texto)) {
        alert("Correo electronico correcto");
    }
    else {
        alert("Correo electronico incorrecto");
    }
}

function validarScript() {
    var patron = /(\<\w*\>)(\w*)(\<\/\w*\>)$/ig;
    var texto = document.getElementById("idScript").value;
    var peligro = "";
    if(patron.test(texto)) {
        peligro = texto.replace(patron, "$1$2$3")
        alert("Etiqueta potencialmente peligrosa detectada " + peligro);
    }
    else {
        alert("No hay etiqueta peligrosa");
    }
}

function validarIban() {
    var patron = /^([E][S]\d{2})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})/;
    var texto = document.getElementById("idIban").value;
    if(patron.test(texto)) {
        texto = texto.replace(patron, "$1-$2-$3-$4-$5-$6");
        alert(texto);
    }
    else {
        alert("Iban nulo");
    }
}

function init() {
    document.getElementById("idValidaNum").addEventListener("click", validarEntero);
    document.getElementById("idValdni").addEventListener("click", validarDni);
    document.getElementById("idValidaMatricula").addEventListener("click", validarMatricula);
    document.getElementById("idValidaUsuario").addEventListener("click", validarTwitter);
    document.getElementById("idValidaFecha").addEventListener("click", validarFecha);
    document.getElementById("idValidaEmail").addEventListener("click", validarEmail);
    document.getElementById("idValidarScript").addEventListener("click", validarScript);
    document.getElementById("idValidaIban").addEventListener("click", validarIban);
}

window.onload = function() {
    this.init();
}