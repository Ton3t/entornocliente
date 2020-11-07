

function validarForm() {
    var nombre = document.getElementById("idnombre").value;
    var apellidos = document.getElementById("idapellidos").value;
    var dni = document.getElementById("iddni").value;
    var email = document.getElementById("idemail").value;
    var idiomas = document.getElementsByName("idioma");
    if(nombre != null || apellidos != null || validarDni(dni) || validarEmail(email)) {
        var usuario = new Object();
        usuario.nombre = nombre;
        usuario.apellidos = apellidos;
        usuario.dni = dni;
        usuario.email = email;
        var idioma = "";
        for (let i = 0; i < idiomas.length; i++) {
            if (idiomas[i].checked) {
              // do whatever you want with the checked radio
              idioma += idiomas[i].value + ",";
              // only one radio can be logically checked, don't check the rest
            }
        }
        usuario.idiomas = idioma;
        console.log(usuario);
        var user = JSON.stringify(usuario);
        localStorage.setItem("usuario", user);
    }
    else {
        alert("Verifica los campos.");
    }

    var form = document.getElementById("formu");
    for(let i = 0; i < form.length; i++) {
        form[i].value = "";
        form[i].checked = 0;
    }
}

function recuperaDatos() {
    var nombre = document.getElementById("idnombre");
    var apellidos = document.getElementById("idapellidos");
    var dni = document.getElementById("iddni");
    var email = document.getElementById("idemail");
    var idioma = document.getElementsByName("idioma");

    if(localStorage.getItem("usuario")) {
        var obj = JSON.parse(localStorage.getItem("usuario", nombre));
        nombre.value = obj.nombre;
        apellidos.value = obj.apellidos;
        dni.value = obj.dni;
        email.value = obj.email;
        var lengua = obj.idiomas.split(",");
        for(let i = 0; i < lengua.length; i++) {
            if(lengua[i] != "") {
                idioma[i].checked = true;
            }
        }
        
    }
}

function borrarDatos() {
    localStorage.clear();
}

function validarDni(parametro) {
    var patron = /^(\d{8})([a-zA-Z])$/;
    var texto = parametro;
    var numeroDni = texto.replace(patron, "$1");
    var letraDni = texto.replace(patron, "$2");
    var resul = numeroDni % 23;
    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    if(letraDni.toUpperCase() == letras[resul] && patron.test(texto)) {
        return true;
    }
    else {
        return false;
    }
}

function validarEmail(parametro) {
    var patron = /^\w{1,20}[@]\w{1,20}[.]\D{2,3}$/;
    var texto = parametro;
    if(patron.test(texto)) {
        return true;
    }
    else {
        return false;
    }
}

function listener() {
    document.getElementById("idguardar").addEventListener("click", validarForm);
    document.getElementById("idrecuperar").addEventListener("click", recuperaDatos);
    document.getElementById("idborrar").addEventListener("click", borrarDatos);
}

window.onload = listener();
