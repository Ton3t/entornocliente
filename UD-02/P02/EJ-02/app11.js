
var gradosC = parseInt(prompt("Introduce grados Celsius"));
var gradosF = parseInt(prompt("Introduce grados Fahrenheit"));

var far = gradosFahrenheit(gradosC);
var cel = gradosCelsius(gradosF);

document.write(gradosC + "º C es: " + far + "ºF<br/>");
document.write(gradosF + "º F es " + cel + "ºC");


function gradosCelsius(num) {
    if(isNaN(num)) {
        return "No es un número";
    }
    else {
        var grados = (num - 32) * 5 /9;
        return grados;
    }
}

function gradosFahrenheit(num) {
    if(isNaN(num)) {
        return "No es un número correcto";
    }
    else {
        var grados = num * 9 / 5 + 32;
        return grados;
    }
}
