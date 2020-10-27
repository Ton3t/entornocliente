function fecha() {
    
    var d = new Date();
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    
    var dia;
    var mes;
    var anyo;

    while (isNaN(dia) || isNaN(mes) || isNaN(anyo)) {
        dia = parseInt(prompt("Dia"));
        mes = parseInt(prompt("Mes"));
        anyo = parseInt(prompt("Año"));
        if (dia < 1 || dia > 31) {
            alert("Dia erroneo pon uno entre el 1 y 31");
            dia = NaN;
        } else if (mes < 1 || mes > 12) {
            alert("Mes erróneo pon uno entre 1 y 12");
            mes = NaN;
        } else if (anyo <= 999) {
            alert("Formato no permitido introduce 1000 como minimo en el año");
            anyo = NaN;
        }
    }

    var first = new Date(d.getFullYear(), d.getMonth(), 1);
    var last = new Date(d.getFullYear(), d.getMonth() + 1, 0);

    document.getElementById("demo").innerHTML = dia + "/" + mes + "/" + anyo + " - " + dias[d.getDay(dia)] + ", " + dia + " de " + meses[d.getMonth(mes)] + " de " + anyo + "<br/>";
    document.getElementById("r1").innerHTML = "El primer dia de la semana es: " + first;
    document.getElementById("r2").innerHTML = "El ultimo dia de la semana es: " + dias[last];
}

window.onload = function () {
    this.fecha();
}