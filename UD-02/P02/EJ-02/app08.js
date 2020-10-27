function amstrong(num) {

    var texto = prompt("Número de 3 dígitos:");
    var num = texto.split("").join("");
    var numAms = 0;

    if (!isNaN(texto)) {
        for (let i = 0; i < 3; i++) {
            num[i] = parseInt(num[i]);
        }

        for (let i = 0; i < 3; i++) {
            numAms = numAms + num[i] * num[i] * num[i];
        }

        if (numAms == texto) {
            alert("Es un número Amstrong: " + num[0] + "^" + num[0] + " + " + num[1] + "^" + num[1] + " + " + num[2] + "^" + num[2] + " = " + numAms);
        } else {
            alert("No es un número Amstrong" + texto);
        }
    }
}

window.onload = function () {
    this.amstrong();
}