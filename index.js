const NOMBRE = prompt ("Ingresa tu nombre")
const EDAD = prompt ("Ingresa tu edad")

if(EDAD >= 18)  {
    alert(NOMBRE + " " + "estas habilitado a votar")
}
else {
    alert(NOMBRE + " " + "no estas habilitado a votar")
}