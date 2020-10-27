function inicia() {
    document.getElementById("enviar").addEventListener("click", control);
}

function control() {
    var preguntas = document.getElementsByName("nomofobia");
    var contador = 0;
    var mensaje = document.getElementById("mensaje");

    for(let i = 0; i < preguntas.length; i++) {
        if(preguntas[i].checked) {
            contador++;
        }
    }

    if(contador <=  5) {
        mensaje.innerHTML = "Resulado: En principio no tienes nada de que preocuparte.\nConsejo: No tienes de que preocuparte.";
    }
    else if(contador > 5) {
        mensaje.innerHTML = "Resultado: Empiezas a tener signos de dependencia del móvil.\nConsejo: Puedes utilizar técnicas como apagar el móvil cuando no lo necesitas, cuando duermes, etc.";
    }
    else if(contador > 6) {
        mensaje.innerHTML = "Resultado: Tienes una gran dependencia del móvil.\nConsejo: Deberías seguir un plan de desintoxicación del móvil como por ejemplo dejar el móvil en casa cuando vas a comprar, apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc.";
    }
    else if(contador > 8) {
        mensaje.innerHTML = "Resultado: Tus síntomas de dependencia son muy preocupantes.\nConsejo: Además de todas las técnicas de los apartados anteriores deberías plantearte un plan de desintoxicación del móvil que consista en estar una o dos semanas sin utilizarlo. Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional.";
    }
}

window.onload = function() {
    this.inicia();
}