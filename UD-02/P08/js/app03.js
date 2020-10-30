var arrayCook = [];
function pideCooki() {
    var salir = true;
    while (salir) {
        var nCooks = parseInt(prompt("Inserta un número de cookies:"));
        if (isNaN(nCooks)) {
            alert("No has puesto un número");
        } else {
            
            for (let i = 0; i < nCooks; i++) {
                var cookname = prompt("Inserta el nombre de la cookie");
                var cookvalue = prompt("Inserta el valor la cookie");
                var cookduration = prompt("Inserta la duración en dias");
                if (isNaN(cookduration) || cookduration == "" || cookduration == null) {
                    alert("No has introducido un dato numérico... calcularemos la cookie con el valor predeterminado.");
                    var dias = 365;
                    arrayCook[i] = setCookie(cookname, cookvalue, dias);

                } else {
                    arrayCook[i] = setCookie(cookname, cookvalue, cookduration);
                    console.log(arrayCook[i]);
                }
            }
            salir = false;
        }
    }
}

function mostrarCooki() {
    var mensaje = "";
    var zona = document.getElementById("idmostar");
    mensaje = document.cookie;
    zona.innerHTML = mensaje;
    return zona;
}

function modificarCooki() {
    var nombre = prompt("Inserta el nombre de la cooki");
    if (getCookie(nombre)) {
        alert("Igual");
        var cookvalue = prompt("Inserta el valor la cookie");
        var cookduration = prompt("Inserta la duración en dias");
        if (isNaN(cookduration)) {
            cookduration = 365;
            alert("No has introducido un dato numérico... calcularemos la cookie con el valor predeterminado.");
            setCookie(nombre, cookvalue, cookduration);

        } else {
            setCookie(nombre, cookvalue, cookduration);
        }
    } else {
        alert("La cooki no existe");
    }
}

function borrarCooki() {
    var nombre = prompt("Inserta el nombre de la cooki");
    if(getCookie(nombre)) {
        var expires = -1;
        var value = "Cooki eliminada :)";
        setCookie(nombre, value, expires);
    }
    else {
        alert("Cookie no encontrada");
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    return document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            //return c.substring(name.length, c.length);
            return true;
        }
    }
    return false;
    //return "";
}

function listener() {
    document.getElementById("idañadir").addEventListener("click", pideCooki);
    document.getElementById("idconsultar").addEventListener("click", mostrarCooki);
    document.getElementById("idmodificar").addEventListener("click", modificarCooki);
    document.getElementById("idborrar").addEventListener("click", borrarCooki);
}

window.onload = function () {
    this.listener();
}