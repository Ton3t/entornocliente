var pares = 0;
var nones = 0;
var error = 0;
var num = 1;

while(num != 0) {
    num = parseInt(prompt("Introduce número"));

    if(isNaN(num)) {
        error++;
    }
    else {
        if(num == 0) {

        }
        else if(num %2 == 0) {
            pares++;
        }
        else if(num %2 != 0){
            nones++;
        }
    }
}

alert("Pares: " + pares + "\nImpares: " + nones + "\nErróneos: " + error);