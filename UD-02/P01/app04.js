var i = 0;
var num = [11, 22, 33, 44];
var multi = 0;

for(var x = 0; x < 25; x++) {
    document.write(num[0] + " - " + num[1] + " - " + num[2] + " - " + num[3] + "<br>");
    for(multi = 0; multi < num.length; multi++) {
        num[multi] = num[multi] + 11;
    }
}

document.write("<br>");

while(i < 25) {
    document.write("11 - 22 - 33 - 44<br>");
    i++;
}
