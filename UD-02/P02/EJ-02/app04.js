
function ordenaNum() {
    
    var arrayNum = [];
    var num = 1;
    
    while(num != 100) {
        if(num % 2 == 0) {
            arrayNum.unshift(num);
        }
        else {
            arrayNum.push(num);
        }
        num++;
    }

    for(let i = 0; i < arrayNum.length; i++) {
        document.write(arrayNum[i] + "<br/>");
    }
    
}


window.onload = function() {
    this.ordenaNum();
}
