var preguntas = 
[
    "¿Quién creo este juego?",
    "¿Cuantas patas tiene una araña?",
    "¿Quién descubrió América?"
];

var respuestas = 
[
    ["Brian Durán", "Malcolm Young", "Yo mismo", "Máximo Cavazzani"],
    ["8", "4", "7", "12"],
    ["Cristobal Colón", "Lionel Messi", "Paseo Colon", "Mi perro"]
];

var respuestaCorrecta;

Jugar();

function Jugar()
{
    var numeroAleatorio = Math.floor(Math.random() * preguntas.length);
    var respuestasPosibles  = respuestas[numeroAleatorio];
    var txtRespuestas = "";

    var posiciones  = [0, 1, 2, 3];
    var respuestasReordenadas = [];
    var on = false;

    for(var i = 0; i < respuestasPosibles.length; i++)
    {
        var indiceAleatorio = Math.floor(Math.random() * posiciones.length);

        if(indiceAleatorio == 0 && on == false)
        {
            respuestaCorrecta = i;
            on = true;
        }

        respuestasReordenadas[i] = respuestasPosibles[posiciones[indiceAleatorio]];

        posiciones.splice(indiceAleatorio, 1);
    }

    for(var i = 0; i < respuestasReordenadas.length; i++)
    {
        txtRespuestas += '<label> <input type = "radio" class = "Respuesta" name = "p" value = "' + i + '">' + respuestasReordenadas[i] + '<label><br>';
    }

    document.querySelector('#preguntas').innerHTML = preguntas[numeroAleatorio];
    document.querySelector('#respuestas').innerHTML = txtRespuestas;
}

function Comprobar()
{
    var respuesta = $("input[type=radio]:checked").val();

    if(respuesta == respuestaCorrecta)
    {
        alert("¡Correcto !");
    }
    else
    {
        alert("¡Incorrecto!");
    }

    Jugar();
}