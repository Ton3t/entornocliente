function anyadeStorage() {
    var nombre = document.getElementById("idnombre").value;
    var apellidos = document.getElementById("idapellidos").value;
    var dni = document.getElementById("iddni").value;
    var email = document.getElementById("idemail").value;
    console.log(dni);

    if(isNaN(nombre) || isNaN(apellidos) || validarDni(dni) || validarEmail(email)) {
        sessionStorage.setItem(nombre, apellidos + " " + dni + " " + email);
    }
    else {
        alert("Revise los campos.");
    }
    nombre.value = "";
        apellidos.value = "";
        dni.value = "";
        email.value = "";
}

function validarDni(valor) {
    var patron = /^(\d{8})([a-zA-Z])$/;
    var numeroDni = valor.replace(patron, "$1");
    var letraDni = valor.replace(patron, "$2");
    var resul = numeroDni % 23;
    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    if(letraDni.toUpperCase() == letras[resul] && patron.test(texto)) {
        return true;
    }
    else {
        return false;
    }
}

function validarEmail(valor) {
    var patron = /^\w{1,20}[@]\w{1,20}[.]\D{2,3}$/;
    if(patron.test(valor)) {
        return true;
    }
    else {
        return alert("Correo electronico incorrecto");
    }
}


function listener() {
    document.getElementById("idguardar").addEventListener("click", anyadeStorage);
    document.getElementById("idrecuperar").addEventListener("click", recuperar);
    document.getElementById("idborrar").addEventListener("click", borrar);
}

window.onload = function() {
    this.listener();
}