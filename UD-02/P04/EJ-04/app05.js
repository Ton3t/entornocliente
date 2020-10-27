function inicia() {
    document.getElementById("idagrandar").addEventListener("click", agrandar);
    document.getElementById("idreducir").addEventListener("click", reducir);
    document.getElementById("idoriginal").addEventListener("click", original);
}

var tf = 1

function agrandar() {
    var texto = document.getElementById("idtexto").value;
    if(tf <= 2) {
        tf += 0.5;
        document.getElementById(texto).style.fontSize = tf + "em";
    }
}

function reducir() {
    var texto = document.getElementById("idtexto").value;
    if(tf >= 0.9) {
        tf -= 0.5;
        document.getElementById(texto).style.fontSize = tf + "em";
    }
}

function original() {
    var texto = document.getElementById("idtexto").value;
    tf = 1;
    document.getElementById(texto).style.fontSize = tf + "em";
}

window.onload = function() {
    this.inicia();
}