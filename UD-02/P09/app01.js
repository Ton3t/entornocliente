function getCountries() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./ficheros.json");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var datos = JSON.parse(this.responseText);

            console.log(datos);
            mostrarCiclos(datos);
        } else {
            console.log(`Ha ocurrido un error: ${xhttp.status}`);
        }
    };
    xhttp.send();
}

function mostrarCiclos(parametro) {
    var obt = parametro.ciclos;
    var zona = document.getElementById("ul");

    obt.forEach(element => {
        var li = document.createElement("li");
        li.innerHTML = element.nombre + ": " + element.descripcion;
        zona.appendChild(li);

    });
}

document.getElementById("idcargar").addEventListener("click", getCountries);