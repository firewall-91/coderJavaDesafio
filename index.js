const NOMBRE = prompt ("Ingresa tu nombre")

function promedio(numeroUno, numeroDos) {
    let resultado = (numeroUno + numeroDos) / 2;
    return resultado;
  }
  
  function mostrarResultado(resultado) {
    alert(NOMBRE + "." + " " + "El resultado del promedio es: " + resultado);
  }
  
  function mostrarMenu() {
    let opcion = prompt(
        "Bienvenido" + " " + NOMBRE, " " + "selecciona una opción o S para salir\n1. Promedio"
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
          let numeroUno = parseFloat(prompt("Ingrese el primer numero"));
          let numeroDos = parseFloat(prompt("Ingrese el segundo numero"));
          switch (opcionSeleccionada) {
            case 1:
              let resultadoPromedio = promedio(numeroUno, numeroDos);
              mostrarResultado(resultadoPromedio)
              break;  
            
              default:
              alert("Opcion Incorrecta");
              break;
          }
        } else {
          alert("Ingresó una letra");
        }
      } else {
        alert("Seleccione la opción");
      }
      opcionSeleccionada = mostrarMenu();
    }
  }
  
  calculadora();