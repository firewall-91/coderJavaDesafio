/* La constante es usada para personalizar la función con el nombre de la persona. */

const NOMB = prompt ("Ingresa tu nombre")
const APE = prompt ("Ingresa tu apellido")
/* Función promedio*/ 
function cuenta(numeroUno, numeroDos) {
    let resultado = (numeroUno / numeroDos) * 0.12 + (numeroUno / numeroDos);
    return resultado;
}

/* En consola muestre con Arrays los prestamos realizados */
function mostrarResultado(resultado) {
    alert(NOMB + "." + " " + "El monto por cuota es: " + " " + "$" + resultado);
    const arrayNombresPrestamo = [NOMB, APE, resultado];
    console.log(arrayNombresPrestamo)
    const obj = Object.assign({}, arrayNombresPrestamo);
    console.log(obj)
}

/* Base de datos manual con objeto*/

function mostrarMenu() {
    let opcion = prompt(
        "Selecciona una opción o S para salir\n1 Prestamo"
    );
    return opcion;
}

function calculadora() {
    let opcionSeleccionada = mostrarMenu();
    while (opcionSeleccionada !== "S") {
    if (opcionSeleccionada !== "") {
        opcionSeleccionada = parseInt(opcionSeleccionada);

        //isNaN nos sirve para saber si el contenido de una variable es NaN
        if (!isNaN(opcionSeleccionada)) {
            let numeroUno = parseFloat(prompt("Ingrese monto en pesos a retirar"));
            let numeroDos = parseFloat(prompt("Ingrese el numero de cuotas"));
            switch (opcionSeleccionada) {
            case 1:
                let resultadoCuenta = cuenta(numeroUno, numeroDos);
                mostrarResultado(resultadoCuenta)
                break;  
            
                default:
                alert("Opcion Incorrecta");
                break;

            }
        } else {
            alert("Ingresó una letra");
        }
    }   else {
        alert("Seleccione la opción");
        }
        opcionSeleccionada = mostrarMenu();
    }
}

calculadora();