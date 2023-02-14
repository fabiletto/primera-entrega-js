
let nombreViajero = prompt("Ingrese su nombre: ")
function saludoViajero(nombre) {
alert ("Bienvenido a tu proximo viaje " + nombre);
}
saludoViajero(nombreViajero);


const iva = 1.21;


    let elegirDestino = prompt("ingrese destino");

 function destinoElegido(elegirDestino) {
    alert("hola tu destino es "  + elegirDestino );
 }
 destinoElegido(elegirDestino);
 

 function vueloYhotel (numeroA,numeroB,){
    return numeroA + numeroB ;
 }
 
 let precioViaje = parseInt (prompt("ingrese el precio del viaje: "));
 let precioHotel=parseInt (prompt("ingrese el precio del alojamiento: "));

 let resultadoPaquete = vueloYhotel(precioViaje , precioHotel)
 console.log (resultadoPaquete);
alert ( nombreViajero + " el valor de su compra es $" + resultadoPaquete * iva);
 
let mensaje = nombreViajero + " realizo una compra de $" + (resultadoPaquete * iva);

console.log(mensaje);

let finalizar = prompt("muchas gracias por su compra, para salir ingrese: salir)");

while( finalizar != "salir") { 
    let nombreViajero = prompt("Ingrese su nombre: ")
function saludoViajero(nombre) {
alert ("Bienvenido a tu proximo viaje " + nombre);
}
saludoViajero(nombreViajero);


const iva = 1.21;


    let elegirDestino = prompt("ingrese destino");

 function destinoElegido(elegirDestino) {
    alert("hola tu destino es "  + elegirDestino );
 }
 destinoElegido(elegirDestino);
 

 function vueloYhotel (numeroA,numeroB,){
    return numeroA + numeroB ;
 }
 
 let precioViaje = parseInt (prompt("ingrese el precio del viaje: "));
 let precioHotel=parseInt (prompt("ingrese el precio del alojamiento: "));

 let resultadoPaquete = vueloYhotel(precioViaje , precioHotel)
 console.log (resultadoPaquete);
alert ( nombreViajero + " el valor de su compra es $" + resultadoPaquete * iva);
 
let mensaje = nombreViajero + " realizo una compra de $" + (resultadoPaquete * iva);
    


    console.log(finalizar);
    
    finalizar = prompt("muchas gracias por su compra, para salir ingrese: salir)");
    
    

}  


