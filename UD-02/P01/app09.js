var nombre = prompt("Nombre alumno");

var nota1 = parseInt(prompt("Nota 1"));
var nota2 = parseInt(prompt("Nota 2"));
var nota3 = parseInt(prompt("Nota 3"));

if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    document.write("Uno de los 3 valores es incorrecto");
}

else {
    var promedio = (nota1 + nota2 + nota3) / 3;

    if(promedio > 7) {
        document.write("Promociona");
    }
    else {
        document.write(nombre + "<br>");
        document.write("No promociona");
    }
}