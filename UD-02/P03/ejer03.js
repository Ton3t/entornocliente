function iniciar() {
    document.getElementById("idpintar").addEventListener("click", pintar);
}

function pintar() {
    var parrafo = document.getElementsByTagName("p");
    for(let i = 0; i < parrafo.length; i++) {
        if(i % 2 == 0) {
            parrafo[i].style.background = "blue";
        }
        else {
            parrafo[i].style.background = "red";
        }
    }
}

window.onload = function() {
    this.iniciar();
}