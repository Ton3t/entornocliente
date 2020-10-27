var billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
var desglose = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var importe = parseInt(prompt("Introduce cantidad"));

if (isNaN(importe)) {
    alert("Valor nulo.");
} else {

    for (var i = 0; i < billetes.length; i++) {
        
        if (importe >= billetes[i]) {
            desglose[i]++;
            importe = importe - billetes[i];
            i--;
        }
        
    }
    alert("Desglose: \n500 = " + desglose[0] + "\n200 = " + desglose[1] + "\n100 = " + desglose[2] + "\n50 = " + desglose[3] +
    "\n20 = " + desglose[4] + "\n10 = " + desglose[5] + "\n5 = " + desglose[6] + "\n2 = " + desglose[7] + "\n1 = " + desglose[8]);
}

    