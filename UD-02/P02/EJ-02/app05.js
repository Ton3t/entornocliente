/* 5. Realizar una función que nos informe si una frase es un palíndromo. */

var x = palindromo(prompt("Inserta frase"));

function palindromo(frase) {
    
    var sinEspacio = frase.replace(/ /g, "");
    var array = sinEspacio.split("").reverse().join("");
    if(frase == array) {
        document.write("Es palindromo");
    }
    else {
        document.write("No es palindormo");
    }
}