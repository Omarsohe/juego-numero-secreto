
//Declaración de las variables y su inicalización 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
       //cambiar el texto dependiendo si se acerto o no el número
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if (numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número es mayor');
        } else{
            asignarTextoElemento('p', 'El número es menor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}
//limpiar el input cada que no se acierte el número
function  limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
    
}
// función para generar un número seudo aleatorio
function generarNumeroSecreto() {
    // guradamos el Math en una variable local 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números es la condición para salir de la recursividad 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Has sorteado todos los números posibles' )
    }else{

        //Si el número generado esta incluido en la lista | el metodo includes devulve un dato booleano si el número esta incluido en la lsta 
        if (listaNumerosSorteados.includes(numeroGenerado)){
        //aqui aplicamos la recursividad para llamar a la funcion de generar numero secrerto para no repetir un numero que ya haya salido 
            return generarNumeroSecreto();
        }else{
            //Sino esat en la lista se genera un numero y se guarda en la lista con el metodo de push
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
//Función para reestablecer las condicones iniciales vada vez que se reinicie el juego 
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indique un número de 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}
//función para reiniciar el juego 
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indiar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos  
    condicionesIniciales();  
    //Desahibilitar el boton de nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}



    condicionesIniciales();

