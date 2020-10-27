n1 = parseInt(prompt("N1"));
n2 = parseInt(prompt("N2"));

function suma() {
    var total = (n1 + n2);
    return total;
}

function numeros(callback) {
    n1 = parseInt(prompt("Inserta N1:"));
    n2 = parseInt(prompt("Inserta N2:"));
    var zona = document.getElementById("idresultado");
    zona.innerHTML = callback;
}

function init() {
    document.getElementById("idSumar").addEventListener("click", suma());
}

window.onload = function() {
    this.init();
}