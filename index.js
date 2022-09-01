const NOMBRE = prompt ("Ingresa tu nombre")
if(NOMBRE != "") {
    const NUMERO_CALIFICACIONES = prompt ("Ingresa la cantidad de calificaciones")
    let sumatoria = 0
    let promedio = 0
    for(let index = 1; index <= NUMERO_CALIFICACIONES; index++) {
        const CALIFICACION = prompt ("Ingrese la calificación" + " " + index)
        sumatoria = sumatoria + parseFloat(CALIFICACION)
    }
    
    promedio = sumatoria / NUMERO_CALIFICACIONES
    
    if(promedio >= 6)  {
        alert(NOMBRE + " " + "¡Felicitaciones aprobaste!" + " " + "Tu nota es: " + " " + promedio.toFixed(0))
    }
    else {
        alert(NOMBRE + " " + "No aprobaste." + " " + "Tu nota es: " + " " + promedio.toFixed(1))
    }
}

//Si NOMBRE vacio entonces entra al while

let valor = prompt("ESC para salir")

while(valor != "ESC") {
    alert ("Comando incorrecto")
    valor = prompt("Escribe ESC para salir")
}