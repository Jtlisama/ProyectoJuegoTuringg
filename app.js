
var x5 = document.getElementById("myAudio5"); 

function re(x5){
    var x5 = document.getElementById("myAudio5"); 
    
    x5.play()
}

// buscamos un numero aleatorio entre 1 y 100
var rango_superior = 200;
var rango_inferior = 1;
var numeroAdivinar=Math.floor((Math.random()*(rango_superior-(rango_inferior-1))) + rango_inferior);
console.log(numeroAdivinar)
var contadorRespuestas=0;
var intentosJugador = tipoPartida()
function tipoPartida(intentosDisponibles){
    intentosJugador = intentosDisponibles
    console.log(intentosJugador)
    
}

setTimeout


function adivinar()

{
    

    // obtenemos el numero de respuestas posibles
    var x = document.getElementById("myAudio"); 
    var x2 = document.getElementById("myAudio2"); 
    var x3 = document.getElementById("myAudio3"); 
    var numeroRespuestas=intentosJugador;
    document.getElementById("numeroRespuestas").value=numeroRespuestas
    console.log(numeroRespuestas)
    
    



    if(document.getElementById("numeroRespuestas").disabled==false)

    {

        if(isNumber(numeroRespuestas) && numeroRespuestas>0)

        {

            document.getElementById("numeroRespuestas").disabled=true;

            document.getElementById("numero").disabled=false;

            document.getElementById("numero").focus();

        }

    }else{

        // obtenemos el contenido del div que contiene las respuestas

        var respuestas=document.getElementById("respuestas").innerHTML;



        if(contadorRespuestas<numeroRespuestas)

        {

            // obtenemos el numero introducido por el usuario

            var numero=document.getElementById("numero").value;



            if(isNumber(numero) && numero>0 && numero<200)

            {

                // aumentanos el numero de la respuesta dada

                contadorRespuestas+=1;



                if(numero>numeroAdivinar)

                {

                    // El numero es superior



                    // A�adimos un texto a las respuestas

                    respuestas+="<br>"+numero+" - El numero que buscas es inferior";

                    document.getElementById("numero").focus();

                }else if(numero<numeroAdivinar){

                    // El numero es inferior



                    // A�adimos un texto a las respuestas

                    respuestas+="<br>"+numero+" - El numero que buscas es superior";

                    document.getElementById("numero").focus();

                }else{

                    // has acertado



                    // A�adimos un texto a las respuestas

                    respuestas+="<br><span><img style='width: 20rem' src='./campeon.png'></span><span style='width: 25rem' class='acertado'>El numero era "+ numero +"  <br>-- HAS ACERTADO!!</span>";
                    
                    x2.play()
                    window.scrollTo(0,2200);

                    fin()

                }

                // vaciamos el valor del numero

                document.getElementById("numero").value="";

            }else{

                respuestas+="<br><span class='error'>"+numero+" - Tiene que ser un valor numerico comprendido entre 1 y 200</span>";
                x3.play()

            }

        }else{

            respuestas+="<br><span><img style='width: 25rem' src='./perdiste.png'></span><span style='color:#e8e42c' class='fin'>NO HAS ACERTADO!! El numero era el "+numeroAdivinar+"</span>";

            x.play()
            
                window.scrollTo(0,3700); // horizontal and vertical scroll targets
         
            fin()
            

        }



        // ponemos nuevamente todas las respuestas

        document.getElementById("respuestas").innerHTML=respuestas;

    }



    // devolvemos false para que el formulario no envie los valores

    return false;

}



// Funcion que se ejecuta al finalizar el juego

// ya sea por haber descubierto el numero o por finalizar el numero de

// intentos

function fin()

{

    // deshabilitamos el casilla de entrar el numero, y el

    // boton de enviar

    document.getElementById("numero").disabled=true;

    document.getElementById("btnEnviar").disabled=true;

}



// Simple funci�n para validar un numero

function isNumber(n)

{

    return !isNaN(parseFloat(n)) && isFinite(n);

}
function recargar()
	{
        
    var borrar = document.getElementById("numeroRespuestas").value=" "
      
    }
    

var arriba;

function subir() {
if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
window.scrollBy(0, -15);
arriba = setTimeout('subir()', 10);

}
else location.reload() ; 

}
function resete(){


}



