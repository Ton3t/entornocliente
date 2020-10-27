function iniciar() {
    document.getElementById("idañadir").addEventListener("click", añadir);
    document.getElementById("ideliminar").addEventListener("click", eliminar);
}

function añadir() {
    var texto = "";
    while(texto == "") {
        texto = prompt("Introduce palabra");
    }
    
    var li = document.createElement("li");
    var zona = document.getElementById("item");
    var lista = document.getElementsByTagName("li");
    var i = 0;
    i = lista.length;
    var nodo = document.createTextNode((i + 1) + ". " + texto);   
    li.appendChild(nodo);
    zona.appendChild(li);
}

function eliminar() {
    var lista = document.getElementsByTagName("li");
    var posicion = 0;
    posicion = document.getElementsByTagName("li").length;
    if(posicion == 1) {

    }
    else {
        var ultimoElemento = lista[posicion-1];
        ultimoElemento.parentNode.removeChild(ultimoElemento);
    }
}

window.onload = function() {
    this.iniciar();
}