function init() {
    document.getElementById("idsiguiente").addEventListener("click", siguiente);
    document.getElementById("idanterior").addEventListener("click", anterior);
    document.getElementById("idpresenta").addEventListener("click", rotar);
    document.getElementById("idparar").addEventListener("click", paraRotar);
}

var rotar;

function siguiente() {
    var fotos = document.getElementsByClassName("img");
    var fotoaux = fotos[0].src;
    fotos[0].src = fotos[2].src;
    fotos[2].src = fotos[1].src;
    fotos[1].src = fotoaux;
}

function anterior() {
    var fotos = document.getElementsByClassName("img");
    var fotoaux = fotos[0].src;
    fotos[0].src = fotos[1].src;
    fotos[1].src = fotos[2].src;
    fotos[2].src = fotoaux;
}

function rotar() {
    rotar = setInterval(siguiente, 2000);
}

function paraRotar() {
    clearInterval(rotar);
}

window.onload = function () {
    this.init();
}