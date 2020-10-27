
function separarArray() {
    var array = [1, "Elemento", 2, 3, 4, "Otro elemento", "otro"];
    var arrayString = [];
    
    alert(array);
    
    for(let i = 0; i < array.length; i++) {
        if(isNaN(array[i])) {
            arrayString.push(array[i]);
            array.splice(i, i);
        }
        else {
    
        }
    }
    
    alert("Primer array: " + array);
    alert("Array de string: " + arrayString);
}

window.onload = function() {
    this.separarArray();
}