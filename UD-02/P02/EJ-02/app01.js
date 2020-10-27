function buscaNprimos() {
    var cant = 100;
    var num = 2;
    
    document.write("<p>Ejercicio 1<p>");
    
    for(let i = 0; i < cant; num++) {
        if(numPrimo(num)) {
            document.write("<p style='color:red'>" + num + "<p/>");
            i++;
        }
    }
    
    function numPrimo(numero) {
        for(let i = 2; i < numero; i++) {
            if(numero % i === 0) {
                return false;
            }
        }
        return numero !== 1;
    }
}

window.onload = function() {
    this.buscaNprimos();
}
