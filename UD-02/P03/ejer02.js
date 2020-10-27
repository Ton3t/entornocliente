
function iniciar() {
    document.getElementById("lbl1").addEventListener("mouseenter", fondoColor1);
    document.getElementById("lbl1").addEventListener("mouseleave", fondoBlanco1);
    document.getElementById("lbl2").addEventListener("mouseenter", fondoColor2);
    document.getElementById("lbl2").addEventListener("mouseleave", fondoBlanco2);
}

function fondoColor1() {
    document.getElementById("lbl1").style.background = "rgb(235, 245, 251)";
    document.getElementById("lbl1").style.color = "rgb(44, 62, 80)";
    
}

function fondoBlanco1() {
    document.getElementById("lbl1").style.background = "white";
    document.getElementById("lbl1").style.color = "black";
    
}

function fondoColor2() {
    document.getElementById("lbl2").style.background = "rgb(235, 245, 251)";
    document.getElementById("lbl2").style.color = "rgb(44, 62, 80)";
}

function fondoBlanco2() {
    document.getElementById("lbl2").style.background = "white";
    document.getElementById("lbl2").style.color = "black";
}

window.onload = function() {
    this.iniciar();
}