function solicitarUsuario () { let usuarioIngresado = prompt ("Ingresar usuario") 
alert (" El usuario ingresado es " + usuarioIngresado)
} 
solicitarUsuario ();

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
let precioLavarropa = 60000;
let descuentoNavidad = 10000;
let nuevoPrecio = resta(suma(precioLavarropa, iva(precioLavarropa)), descuentoNavidad);
console.log(nuevoPrecio);

   let respuesta = prompt("¿Compró el producto?").toLowerCase();

   if (respuesta === "si") {
     alert("Gracias por su compra");
   } else {
     let seguirNavegando = prompt("¿Desea seguir navegando en la página?").toLowerCase();
   
     if (seguirNavegando === "si") {
       alert("Puede seguir navegando");
     } else {
       alert("Gracias por su visita");
     }
   }

let clientes = 0;
let edadCliente = 0;
let descuento = 5000;

while (clientes < 5) {
 edadCliente = parseInt(prompt("Ingrese su edad:"));

 if (edadCliente > 25 && edadCliente <= 33) {
   console.log("¡Felicitaciones! Recibiste un descuento de $5.000 sobre el precio de tu proxima compra.");
   clientes++;
 } else {
   console.log("No cumple con los requisitos de edad.");
 }
}

console.log("Se han entregado todos los descuentos.");