var tiempo = 1000;
var contador = 0;

var inicia = setInterval(mostrarTexto, tiempo);

function funTexto() {
    var texto = document.getElementById("idparrafo").value;
    return texto;
}

function mostrarTexto() {
    var texto = "Este Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, necessitatibus ad unde quisquam facere repellat modi consectetur blanditiis nulla quibusdam totam? Illo distinctio sapiente earum saepe libero exercitationem impedit tempora.Aut repudiandae eos incidunt explicabo eligendi est rerum deleniti consectetur dolore blanditiis. Suscipit recusandae adipisci enim obcaecati officiis sed, animi quis quo maiores quidem incidunt architecto, aliquid repudiandae, quos sapiente!    Repellat cupiditate officia deserunt optio sunt exercitationem, nulla, tenetur aliquam aut a unde repellendus! Quaerat facere, odit illum expedita dignissimos atque, enim impedit dolores, repellat accusamus doloremque in? Nihil, molestias.    Quasi incidunt temporibus a dicta accusamus nostrum, amet sed, laudantium aspernatur eveniet modi sit, adipisci iure ratione dolorum ipsam totam. Amet ad sunt dolorem accusantium fuga consequuntur in tempora fugiat. Dolor quod fuga commodi, vel optio sapiente possimus exercitationem veniam veritatis? Atque, aut, modi autem cumque et totam quis unde laboriosam, tempore optio aspernatur! Nisi iusto consequuntur quod quibusdam itaque. Unde deserunt iste placeat at repudiandae aut fuga et alias recusandae aliquam. Natus dolores corrupti consequuntur facere sed cum eaque odit aliquam, optio delectus officia illum nobis vitae laboriosam a. Nulla minima dolorum quis. Perferendis aperiam doloribus eum at dolorem eos reprehenderit, iste id culpa temporibus odio aut ducimus recusandae consequatur ipsum, fugit officiis similique esse? Minima natus iure odit.    Animi eveniet ducimus rerum beatae molestias qui. Nobis voluptas qui, illo consectetur ipsam perferendis, voluptates vitae hic animi molestias, nostrum aspernatur delectus veritatis eaque voluptatum ipsum iste magni neque ad?    Eum necessitatibus earum vel voluptatibus rem quos dicta impedit beatae corrupti, pariatur odit numquam quae eligendi incidunt, architecto quo. Officia ipsam magnam ducimus nulla cumque, at ex tempore cum vero.    Dignissimos, repudiandae molestias possimus labore deserunt ex nemo. Optio, officiis. Facere repudiandae rem iure iste officia, itaque vero maiores praesentium accusamus molestias harum nisi reiciendis, perferendis ea unde dolore? Ipsum.";
    var arrayTxt = texto.split("");
    var zona = document.getElementById("idparrafo");
    if(contador == arrayTxt.length) {
        clearInterval(inicia);
    }
    else {
        zona.innerHTML += arrayTxt[contador];
        contador++;
    }
}

function rapido() {
    clearInterval(inicia);
    tiempo -= 200;
    if(tiempo <= 0) {
        tiempo = 1;
    }
    inicia = setInterval(mostrarTexto, tiempo);
}

function lento() {
    clearInterval(inicia);
    tiempo += 200;
    if(tiempo >= 9999) {
        tiempo = 9999;
    }
    inicia = setInterval(mostrarTexto, tiempo);
}

function borrarTexto() {
    
}

function botones() {
    document.getElementById("idrapido").addEventListener("click", rapido);

    document.getElementById("idlento").addEventListener("click", lento);
}



window.onload = function() {
    this.botones();
    this.mostrarTexto();
    
}

