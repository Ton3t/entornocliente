var mensaje = document.getElementById("mensaje");
var alto = window.innerHeight;
var ancho = window.innerWidth;
mensaje.innerHTML = "Ancho: " + ancho + " Alto: " + alto;

function comprobar() {
    var alto = window.innerHeight;
    var ancho = window.innerWidth;
    alert("Se ha redimensionado la ventana");
    mensaje.innerHTML = "Ancho: " + ancho + " Alto: " + alto;
}


function iniciar() {
    window.onresize = comprobar;
}

window.onload = function() {
    this.iniciar();
}