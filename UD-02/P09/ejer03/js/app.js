class Fruta {
    constructor(ref, nombre, precio) {
        this.ref = ref;
        this.nombre = nombre;
        this.precio = precio;
    }
}

var aguacate = new Fruta(1, "Aguacate", 5);
var albaricoque = new Fruta(2, "Albaricoque", 3);
var cereza = new Fruta(3, "Cereza", 7);
var fresas = new Fruta(4, "Fresas", 6);
var granada = new Fruta(5, "Granada", 5);
var lima = new Fruta(6, "Lima", 1);
var manzana = new Fruta(7, "Manzana", 2);
var melocoton = new Fruta(8, "Melocoton", 3);
var naranja = new Fruta(9, "Naranja", 4);
var pera = new Fruta(10, "Pera", 4);
var pinya = new Fruta(11, "Piña", 2);
var platano = new Fruta(12, "Platano", 2);
var sandia = new Fruta(13, "Sandia", 1);

var frutas = [aguacate, albaricoque, cereza, fresas, granada, lima, manzana, melocoton, naranja, pera, pinya, platano, sandia];

var opcion = document.getElementsByClassName("peque");
var zonaRef = document.getElementById("ref");
var zonaPrecio = document.getElementById("precio");
var tabla = document.getElementById("lineas");
console.log(tabla.childNodes);

    console.log(opcion);

function esAguacate() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[0].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = aguacate.ref;
    zonaPrecio.value = aguacate.precio;
}

function esAlbaricoque() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[1].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = albaricoque.ref;
    zonaPrecio.value = albaricoque.precio;
}

function esCereza() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[2].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = cereza.ref;
    zonaPrecio.value = cereza.precio;
}

function esFresa() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[3].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = fresas.ref;
    zonaPrecio.value = fresas.precio;
}

function esGranada() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[4].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = granada.ref;
    zonaPrecio.value = granada.precio;
}

function esLima() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[5].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = lima.ref;
    zonaPrecio.value = lima.precio;
}

function esManzana() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[6].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = manzana.ref;
    zonaPrecio.value = manzana.precio;
}

function esMelocoton() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[7].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = melocoton.ref;
    zonaPrecio.value = melocoton.precio;
}

function esNaranja() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[8].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = naranja.ref;
    zonaPrecio.value = naranja.precio;
}

function esPera() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[9].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = pera.ref;
    zonaPrecio.value = pera.precio;
}

function esPinya() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[10].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = pinya.ref;
    zonaPrecio.value = pinya.precio;
}

function esPlatano() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[11].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = platano.ref;
    zonaPrecio.value = platano.precio;
}

function esSandia() {
    var objetivo = document.getElementById("ffac");
    var imagen = opcion[12].cloneNode();
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    objetivo.appendChild(imagen);
    zonaRef.value = sandia.ref;
    zonaPrecio.value = sandia.precio;
}

function validarDni() {
    var patron = /^(\d{8})([a-zA-Z])$/;
    var texto = document.getElementById("dni").value;
    var numeroDni = texto.replace(patron, "$1");
    var letraDni = texto.replace(patron, "$2");
    var resul = numeroDni % 23;
    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    if(letraDni.toUpperCase() == letras[resul] && patron.test(texto)) {
        return true;
    }
    else {
        return false;
    }
}

var facturasTotal = 0;

function anyadirFruta() {
    var cantidad = document.getElementById("cantidad").value;
    if(validarDni() && cantidad != "" && zonaRef.value != "ref" && zonaPrecio.value != 0) {
        console.log(tabla.childNodes);
        var fila = document.createElement("tr");
        var dni = document.createElement("td");
        var ref = document.createElement("td");
        var precio = document.createElement("td");
        var total = document.createElement("td");
        total.setAttribute("class", "sumaFactura");
        var can2 = document.createElement("td");
        var numPrecio = parseInt(zonaPrecio.value);
        var numCantidad = parseInt(cantidad);
        var coste = (numCantidad * numPrecio);
        dni.innerHTML = document.getElementById("dni").value;
        ref.innerHTML = document.getElementById("ref").value;
        precio.innerHTML = document.getElementById("precio").value;
        can2.innerHTML = cantidad;
        total.innerHTML = coste;
        fila.appendChild(dni);
        fila.appendChild(ref);
        fila.appendChild(precio);
        fila.appendChild(can2);
        fila.appendChild(total);
        var inp = inputBorrar();
        fila.appendChild(inp);
        tabla.appendChild(fila);
        var fac = document.createElement("th");
        var objetivo = document.getElementById("idPreciototal");
        if(objetivo.hasChildNodes()) {
            objetivo.removeChild(objetivo.childNodes[0]);
        }
        facturasTotal = facturasTotal + coste;
        objetivo.innerHTML = facturasTotal;
        cancelarFruta();
    }
    else {
        alert("Dni o cantidad incorrecto");
    }
}

function cancelarFruta() {
    var objetivo = document.getElementById("ffac");
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    document.getElementById("dni").value = "";
    document.getElementById("cantidad").value = "";
    zonaPrecio.value = "";
    zonaRef.value = "";
}

function inputBorrar() {
    var input = document.createElement("button");
    var td = document.createElement("td");
    input.innerHTML = "Borrar";
    input.setAttribute("class", "boton");
    td.appendChild(input);
    input.addEventListener("click", borrarFila);
    return td;
}

function borrarFila(e) {
    e.target.parentNode.parentNode.remove();
    var objetivo = document.getElementById("idPreciototal");
    if(objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    //if(objetivo.hasChildNodes()) {
    //    objetivo.removeChild(objetivo.childNodes[0]);
    //}
    console.log(e.target.parentNode.parentNode.childNodes[4]);
    var coste = e.target.parentNode.parentNode.childNodes[4].innerHTML;
    var dato = parseInt(coste);
    facturasTotal = facturasTotal - dato;
    
    console.log(objetivo.childNodes);
    objetivo.innerHTML = facturasTotal;
    console.log(dato);
}

function borrarTablalocal() {
    localStorage.clear();
}

function almacenaPedido() {
    var td = document.getElementsByTagName("td");
    var myObj = {dni: td[2].innerText, ref: td[3].innerText, precio: td[4].innerText, cantidad: td[5].innerText, total: td[6].innerText};
    
    var objeto = JSON.stringify(myObj);

    console.log(objeto);
    localStorage.setItem("factura", objeto);
}

function iniciar() {
    document.getElementById("grabar").addEventListener("click", anyadirFruta);
    document.getElementById("cancelar").addEventListener("click", cancelarFruta);
    document.getElementById("aguacate").addEventListener("dblclick", esAguacate);
    document.getElementById("albaricoque").addEventListener("dblclick", esAlbaricoque);
    document.getElementById("cerezas").addEventListener("dblclick", esCereza);
    document.getElementById("fresas").addEventListener("dblclick", esFresa);
    document.getElementById("granada").addEventListener("dblclick", esGranada);
    document.getElementById("lima").addEventListener("dblclick", esLima);
    document.getElementById("manzanas").addEventListener("dblclick", esManzana);
    document.getElementById("melocoton").addEventListener("dblclick", esMelocoton);
    document.getElementById("naranja").addEventListener("dblclick", esNaranja);
    document.getElementById("pera").addEventListener("dblclick", esPera);
    document.getElementById("piña").addEventListener("dblclick", esPinya);
    document.getElementById("platano").addEventListener("dblclick", esPlatano);
    document.getElementById("sandia").addEventListener("dblclick", esSandia);
    document.getElementById("idborrarTodo").addEventListener("click", borrarTablalocal);
    document.getElementById("almacenar").addEventListener("click", almacenaPedido);
}



window.onload = function () {
    this.iniciar();
}