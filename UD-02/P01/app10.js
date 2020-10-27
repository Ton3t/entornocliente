var numero = 1;

while (numero != 0) {

    numero = parseInt(prompt("Introduce un número entre 1 y 5"));

    if (isNaN(numero)) {
        alert("Dato erroneo.");
    } else {
        if(numero == 0) {
            alert("Salir");
            break;
        }
        else if (numero > 5 || numero < 1) {
            alert("Número fuera de rango");
        } 
        else {
            alert("Valor ingresado: " + numero);
        }

    }

}