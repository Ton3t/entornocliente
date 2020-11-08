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
    if (letraDni.toUpperCase() == letras[resul] && patron.test(texto)) {
        return true;
    } else {
        return false;
    }
}

var facturasTotal = 0;

function anyadirFruta() {
    var cantidad = document.getElementById("cantidad").value;
    if (validarDni() && cantidad != "" && zonaRef.value != "ref" && zonaPrecio.value != 0) {

        json();

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
        var objetivo = document.getElementById("idPreciototal");
        if (objetivo.hasChildNodes()) {
            objetivo.removeChild(objetivo.childNodes[0]);
        }
        facturasTotal = facturasTotal + coste;
        objetivo.innerHTML = facturasTotal;
        cancelarFruta();
    } else {
        alert("Dni o cantidad incorrecto");
    }
}

var lineas = [];

function json() {

    let nDni = document.getElementById("dni").value;
    let nRef = document.getElementById("ref").value;
    let nPrecio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    let total = nPrecio * cantidad;


    var facturas = {
        "dni": nDni,
        "ref": nRef,
        "precio": nPrecio,
        "cantidad": cantidad,
        "total": total
    };

    var objeto = JSON.stringify(facturas);
    sessionStorage.setItem("fac", objeto);
    lineas.push(objeto);
    console.log(lineas);
}

function almacenarTabla() {

    var objeto = [];
    console.log(objeto);
    for (let i = 0; i < lineas.length; i++) {
        objeto[i] = JSON.parse(lineas[i]);
    }
    for (let i = 0; i < objeto.length; i++) {
        localStorage.setItem("factura" + i, lineas[i]);
    }

}

function recuperarDatos() {

    var objeto = [];
    for (let i = 0; i < localStorage.length; i++) {
        objeto[i] = JSON.parse(localStorage.getItem("factura" + i));

    }

    console.log(objeto.length);

    for (let i = 0; i < objeto.length; i++) {
        var fila = document.createElement("tr");
        var dni = document.createElement("td");
        var ref = document.createElement("td");
        var precio = document.createElement("td");
        var cantidad = document.createElement("td");
        var total = document.createElement("td");
        dni.innerHTML = objeto[i].dni;
        ref.innerHTML = objeto[i].ref;
        precio.innerHTML = parseInt(objeto[i].precio);
        cantidad.innerHTML = parseInt(objeto[i].cantidad);
        total.innerHTML = parseInt(objeto[i].total);
        fila.appendChild(dni);
        fila.appendChild(ref);
        fila.appendChild(precio);
        fila.appendChild(cantidad);
        fila.appendChild(total);
        total.setAttribute("class", "sumaFactura");
        total.setAttribute("id", "presu");
        var inp = inputBorrar2();
        fila.appendChild(inp);
        tabla.appendChild(fila);
    }

    var objetivo = document.getElementById("idPreciototal");
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }

    var totfac = 0;
    for (let i = 0; i < objeto.length; i++) {
        totfac += parseInt(objeto[i].total);
    }
    objetivo.innerHTML = totfac;
}

function borrarTablalocal() {
    lineas = [];
    console.log(lineas.length);
    localStorage.clear();
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

function inputBorrar2() {
    var input = document.createElement("button");
    var td = document.createElement("td");
    input.innerHTML = "Borrar";
    input.setAttribute("class", "boton");
    td.appendChild(input);
    input.addEventListener("click", borrarFila2);
    return td;
}

function borrarFila2(e) {
    var total = document.getElementById("idPreciototal").value;
    console.log(total);
    var num = parseInt(total);
    console.log(num);
    e.target.parentNode.parentNode.remove();
    var objetivo = document.getElementById("idPreciototal");
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    //if(objetivo.hasChildNodes()) {
    //    objetivo.removeChild(objetivo.childNodes[0]);
    //}
    console.log(e.target.parentNode.parentNode.childNodes[4]);
    var coste = e.target.parentNode.parentNode.childNodes[4].innerHTML;
    var dato = parseInt(coste);
    //facturasTotal = facturasTotal - dato;

    console.log(objetivo.childNodes);
    objetivo.innerHTML = total - coste;
    console.log(dato);
}

function borrarFila(e) {
    e.target.parentNode.parentNode.remove();
    var objetivo = document.getElementById("idPreciototal");
    if (objetivo.hasChildNodes()) {
        objetivo.removeChild(objetivo.childNodes[0]);
    }
    //if(objetivo.hasChildNodes()) {
    //    objetivo.removeChild(objetivo.childNodes[0]);
    //}
    console.log(e.target.parentNode.parentNode.childNodes[4]);
    var coste = e.target.parentNode.parentNode.childNodes[4].innerHTML;
    var dato = parseInt(coste);
    //facturasTotal = facturasTotal - dato;

    console.log(objetivo.childNodes);
    objetivo.innerHTML = facturasTotal - dato;
    console.log(dato);
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
    document.getElementById("almacenar").addEventListener("click", almacenarTabla);
    document.getElementById("recuperar").addEventListener("click", recuperarDatos);
}



window.onload = function () {
    this.iniciar();
}