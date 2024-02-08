// FUNCION para: Devolver un numero aleatorio entero entre min y max
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

// FUNCION para: Transformar la eleción númerica en un emoji diciente
function eleccion(jugada){
    let resultado = ""
    if ( jugada == 1) {
        resultado = "🪨"
    } else if(jugada == 2) {
        resultado = "🧻"
    } else if (jugada == 3) {
        resultado = "✂️"
    } else {
        resultado = 'Opcion NO permitida: "' + jugada + '"'
    }
    return resultado
}

// FUNCION para: actualizar el resultado de la partida    
function combate(jugada) {
    jugada.resultado = ""    
    if(jugada.tuJugada == jugada.jugadaPc) {
        jugada.resultado = "EMPATASTE"
    } else if((jugada.tuJugada == 1 && jugada.jugadaPc == 3)||
              (jugada.tuJugada == 2 && jugada.jugadaPc == 1)||
              (jugada.tuJugada == 3 && jugada.jugadaPc == 2)){
        jugada.resultado = "GANASTE"
        jugada.triunfos +=1
    } else { 
        jugada.resultado = "PERDISTE"
        jugada.derrotas +=1
    }
    return jugada
}

let partida = {
    jugadaPc:0,
    tuJugada:0,
    resultado:"", 
    triunfos:0, 
    derrotas:0}

while (partida.triunfos < 3 && partida.derrotas < 3) {
    partida.jugadaPc = aleatorio(1,3) 
    partida.tuJugada = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
    
    alert("Tu eligiste: " + eleccion(partida.tuJugada))
    alert("El PC eligió: " + eleccion(partida.jugadaPc))
    
    partida = combate(partida)
    alert(partida.resultado + " la ronda. Vas " + partida.triunfos + " a " + partida.derrotas)
}

if(partida.triunfos > partida.derrotas){
    alert("!! G A N A S T E    L A    P A R T I D A !!")
} else{
    alert("!! P E R D I S T E    L A    P A R T I D A !!")
}
