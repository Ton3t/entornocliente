



function iniciar() {
    document.getElementById("submit").addEventListener("click", validarFormu);
    document.getElementById("reset").addEventListener("click", reset);
}

function validarFormu() {
    var d = new Date();
    var formulario = document.getElementById("idformulario");
    var nif = document.getElementById("idnif").value;
    var cdpostal = document.getElementById("idcdpostal").value;

    if(formulario[0].value == "" || formulario[0].value == null) {
        alert("Nombre no añadido");
        document.getElementById("idnombre").style.background = "red";
        document.getElementById("idnombre").focus();
        document.getElementById("idnombre").value = "";
    }
    else {
        document.getElementById("idnombre").style.background = "white";
        if(formulario[1].value == "" || formulario[1].value == null) {
            alert("Dirección mal");
            document.getElementById("iddir").style.background = "red";
            document.getElementById("iddir").focus();
            document.getElementById("iddir").value = "";
        }
        else {
            document.getElementById("iddir").style.background = "white";
            if(formulario[2].value == "" || formulario[2].value == null || /^\d{9}[a-zA-Z]$/.test(nif)) {
                alert("NIF erroneo");
                document.getElementById("idnif").style.background = "red";
                document.getElementById("idnif").focus();
                document.getElementById("idnif").value = "";
            }
            else {
                document.getElementById("idnif").style.background = "white";
                var f = new Date(document.getElementById("idfechaCita").value);
                if(formulario[3].value == "" || formulario[3].value == null || f.getTime() > d.getTime()) {
                    alert("Introduce una fecha posterior a la de hoy");
                    document.getElementById("idfechaCita").style.background = "red";
                    document.getElementById("idfechaCita").focus();
                    document.getElementById("idfechaCita").value = "";
                }
                else {
                    document.getElementById("idfechaCita").style.background = "white";
                    alert("Fecha correcta");
                    var codigo = cdpostal.split("");
                    if(formulario[4].value == "" || formulario[4].value == null || codigo.length != 5) {
                        alert("Codigo postal erroneo introduce uno que contenga 5 digitos");
                        document.getElementById("idcdpostal").style.background = "red";
                        document.getElementById("idcdpostal").focus();
                        document.getElementById("idcdpostal").value = "";
                    }
                    else {
                        document.getElementById("idcdpostal").style.background = "white";
                        if(formulario[5].checked || formulario[5].value == null) {
                            alert("Debes selecionar un pais");
                            document.getElementById("idpais").style.background = "red";
                            document.getElementById("idpais").focus();
                            document.getElementById("idpais").value = "";
                        }
                        else {
                            document.getElementById("idpais").style.background = "white";
                            if(document.formulario.genero.checked) {
                                alert("Campo genero bien");
                                document.getElementById("idgenero").style.background = "white";
                            }
                            else {
                                document.getElementById("idmasc").style.background = "red";
                                document.getElementById("idfem").style.background = "red";
                                document.getElementById("idgenero").style.background = "white";
                                var color = document.formulario.color;
                                for(let i = 0; i < color.length; i++) {
                                    if(color[i].checked) {
                                        alert("Campo color correcto");
                                        color[i].style.background = "white";
                                    }
                                    else {
                                        color[i].style.background = "red";
                                        color[i].focus();
                                    }
                                }
                                var ntelefono = document.getElementById("idtelefono").value;
                                var telefono = ntelefono.split("");
                                if(formulario[8].value == "" || formulario[8].value == null || telefono.length != 9) {
                                    alert("Telefono con 9 digitos");
                                    document.getElementById("idtelefono").style.background = "red";
                                    document.getElementById("idtelefono").focus();
                                    document.getElementById("idtelefono").value = "";
                                }
                                else {
                                    document.getElementById("idtelefono").style.background = "white";
                                    var email = document.getElementById("idemail").value;
                                    if(formulario[9].value == "" || formulario[9].value == null) {
                                        if(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3,4})+$/.test(email)) {
                                            alert("Campo email incorrecto");
                                            document.getElementById("idemail").style.background = "red";
                                            document.getElementById("idemail").focus();
                                            document.getElementById("idemail").value = "";
                                        }
                                    }
                                    else {
                                        document.getElementById("idemail").style.background = "white";
                                        var pass1 = document.getElementById("idpass1").value;
                                        var pass2 = document.getElementById("idpass2").value
                                        if(pass1 == "" || pass2 == "" || pass1 == null || pass2 == null || pass1 != pass2) {
                                            alert("Campo contraseña no coincide");
                                            document.getElementById("idpass1").style.background = "red";
                                            document.getElementById("idpass2").style.background = "red";
                                            document.getElementById("idpass1").value = "";
                                            document.getElementById("idpass2").value = "";
                                            document.getElementById("idpass1").focus();
                                        }
                                        else {
                                            alert("Todo correcto");
                                            document.getElementById("idpass1").style.background = "white";
                                            document.getElementById("idpass2").style.background = "white";
                                            for(let i = 0; i < formulario.length; i++) {
                                                document.write(formulario[i].value + "<br>");
                                            }
                                            formulario.submit(formulario);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function reset() {
    var formu = document.formulario;
    var check = document.getElementsByClassName("chekc");
    for(let i = 0; i < formu.length; i++) {
        formu[i].value = "";
    }
}

window.onload = function() {
    this.iniciar();
}