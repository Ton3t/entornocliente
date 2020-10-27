var n1 = parseInt(prompt("Número 1"));
var n2 = parseInt(prompt("Número 2"));

if(isNaN(n1) || isNaN(n2)) {
    alert("Valor erroneo");
}

else {
    var suma = n1 + n2;
    var producto = n1 * n2;
    alert("Suma: " + suma + "\nProducto: " + producto);
}