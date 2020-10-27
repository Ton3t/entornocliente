
var num = [];
for(let i = 0; i < 12; i++) {
    num[i] = Math.floor(Math.random() * 100);
}

var arrayNum = [
    [num[0], num[1], num[2], num[3], 0],
    [num[4], num[5], num[6], num[7], 0],
    [num[8], num[9], num[10], num[11], 0],
    [0, 0, 0, 0, ""]
];

arrayNum[0][4] = num[0] + num[1] + num[2] + num[3];
arrayNum[3][0] = num[0] + num[4] + num[8];
arrayNum[1][4] =  num[4] + num[5] + num[6] + num[7];
arrayNum[3][1] =  num[1] + num[5] + num[9];
arrayNum[2][4] =  num[8] + num[9] + num[10] + num[11];
arrayNum[3][2] =  num[2] + num[6] + num[10];
arrayNum[3][3] =  num[3] + num[7] + num[11];
 
document.write("<table><tr><td>" + arrayNum[0][0] + "</td><td>" + arrayNum[0][1] + "</td><td>" + arrayNum[0][2] + "</td><td>" + arrayNum[0][3] + "</td><td>" + arrayNum[0][4] + "</td></tr>");
document.write("<tr><td>" + arrayNum[1][0] + "</td><td>" + arrayNum[1][1] + "</td><td>" + arrayNum[1][2] + "</td><td>" + arrayNum[1][3] + "</td><td>" + arrayNum[1][4] + "</td></tr>");
document.write("<tr><td>" + arrayNum[2][0] + "</td><td>" + arrayNum[2][1] + "</td><td>" + arrayNum[2][2] + "</td><td>" + arrayNum[2][3] + "</td><td>" + arrayNum[2][4] + "</td></tr>");
document.write("<tr><td>" + arrayNum[3][0] + "</td><td>" + arrayNum[3][1] + "</td><td>" + arrayNum[3][2] + "</td><td>" + arrayNum[3][3] + "</td><td>" + arrayNum[3][4] + "</td></tr>");


// resultado filas

/*
// resultado columnas
contador = 0;
for(let i = 4; i < resultado.length; i++) {
    resultado[i] = num[contador] + num[contador + 3] + num[contador + 6] + num[contador + 9];
    contador = contador + 10;
}

contador = 0;

for(let i = 0; i < 1; i++) {
    document.write("<table>");
    for(let x = 0; x < 4; x++) {
        document.write("<tr>");
        for(let j = 0; j < 5; j++) {
            document.write("<td>" + num[contador] + "</td>");
            contador = contador + 4;
            for(let w = 0; w < 1; w++) {
                document.write("<td>" + resultado[cntresul] + "</td>");
                cntresul++;
            }
        }
        document.write("</tr>");
    }
    document.write("<tr>");
    
}

for(let v = 0; v < 1; v++) {
    for(let u = 0; u < resultado.length; u++) {
        document.write("<td>" + resultado[cntresul] + "</td>")
        cntresul++;
    }
}
document.write("</tr></table>");


*/
