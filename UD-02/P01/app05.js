
var num = 1;
var arrayNum = [];
var indice = 0;

while(num != 0) {
    num = parseInt(prompt("Introduce número"));    
    if(isNaN(num)) {
        alert("Número erroneo");
    }
    else {
        arrayNum[indice] = num;
        indice++;
    }
}

var numMax = Math.max(...arrayNum);
alert("Valor máximo: " + numMax);

