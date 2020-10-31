function pideCooki() {
    var cookname = document.getElementById("idusuario").value;
    var cookvalue = document.getElementById("idpass").value;
    var dias = 900000;
    setCookie(cookname, cookvalue, dias);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    return document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function listener() {
    document.getElementById("identrar").addEventListener("click", pideCooki);
}

window.onload = function() {
    this.listener();
}