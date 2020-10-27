function buscaTexto() {
    var cadena = prompt("Ingresa un texto");
    var busca = prompt("Busca texto");
    var posicion = cadena.indexOf(busca);
    var cuenta = 0;
    var retoque = cadena.replace(busca, "<u> " + busca + "</u>");

    if (cadena == "" || busca == "") {

    } 
    else {
        while(posicion != -1) {
            cuenta++;
            posicion = cadena.indexOf();
        }
        document.write(cadena + "<br/>");
        document.write("Palabra que buscamos: " + busca + "<br/>");
        document.write("Veces que se repite:" + cuenta + "<br/>");
        document.write("Texto con replace: <br/>" + retoque + "<br/>");
    }
}

window.onload = function () {
    this.buscaTexto();
}