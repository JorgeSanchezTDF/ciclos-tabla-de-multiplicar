/*Estructuras de Control

Tablas de Multiplicación

• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor
*/

let numero: number = Number(prompt("Ingrese un número"));
let numero2: number = Number(
  prompt(
    "Ingrese hasta qué número desea que muestre la tabla de multiplicación"
  )
);

for (let i = 1; i <= numero2; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}
