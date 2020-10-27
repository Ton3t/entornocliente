function iniciar() {
    document.getElementById("idiniciar").addEventListener("click", pregunta);
    document.getElementById("iddetener").addEventListener("click", detenerCambioDeColor);
}

var numero;
var setTime;

function flasheaTexto() {
    var texto = document.getElementById("idlorem");
    if(texto.style.color == "black") {
        rojo();
    }
    else if(texto.style.color == "red") {
        azul();
    }    
    else if(texto.style.color == "blue") {
        verde();
    }
    else {
        rojo();
    }
}

function detenerCambioDeColor() {
    clearInterval(setTime);
    document.getElementById("idlorem").style.color = "black";
}

function pregunta() {
    var valor = document.getElementById("idvalor").value;
    if(isNaN(valor) || valor == "" || valor == null) {
        alert("Debes poner un número");
    }
    else {
        numero = parseInt(valor);
        setTime = setInterval(flasheaTexto, numero);
    }
}

function rojo() {
    var texto = document.getElementById("idlorem");
    texto.style.color = "red";
}

function azul() {
    var texto = document.getElementById("idlorem");
    texto.style.color = "blue";
}

function verde() {
    var texto = document.getElementById("idlorem");
    texto.style.color = "green";
}

window.onload = function() {
    this.iniciar();
}
