/* Calculadora con dos parametros */

var num1 = NaN;
var num2 = NaN;

while (isNaN(num1) || isNaN(num2)) {
    num1 = parseFloat(prompt("Introduce un número"));
    num2 = parseFloat(prompt("Introduce otro número"));
}

alert(sumar(num1, num2));
alert(restar(num1, num2));
alert(multplicar(num1, num2));
alert(dividir(num1, num2));

function sumar(num1, num2) {
    var total = num1 + num2;
    return "Suma: " + total;
}

function restar(num1, num2) {
    var total = num1 - num2;
    return "Resta: " + total;
}

function multplicar(num1, num2) {
    var total = num1 * num2;
    return "Multiplicación: " + total;
}

function dividir(num1, num2) {
    var cociente = num1 / num2;
    var resto = num1 % num2;
    return "Cociente: " + cociente + " Resto: " + resto;
}
