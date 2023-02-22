
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
 
 function vueloYhotel (numeroA,numeroB,numeroC){
    return (numeroA + numeroB )* numeroC ;
 }
 
 let precioViaje = parseInt (prompt("ingrese el precio del viaje: "));
 let precioHotel=parseInt (prompt("ingrese el precio del alojamiento: "));
 let cantidadPasaje=parseInt (prompt("ingrese la cantidad de pasajes : "));


 let resultadoPaquete = vueloYhotel(precioViaje , precioHotel ,cantidadPasaje)
 console.log (resultadoPaquete);
alert ( nombreViajero + " el valor de su compra es $" + resultadoPaquete * iva  );
 
let mensaje = nombreViajero + " realizo una compra de $" + (resultadoPaquete * iva );
 
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
 

 function vueloYhotel (numeroA,numeroB,numeroC){
    return (numeroA + numeroB )* numeroC ;
 }
 
 let precioViaje = parseInt (prompt("ingrese el precio del viaje: "));
 let precioHotel=parseInt (prompt("ingrese el precio del alojamiento: "));
 let cantidadPasaje=parseInt (prompt("ingrese la cantidad de pasajes : "));


 let resultadoPaquete = vueloYhotel(precioViaje , precioHotel ,cantidadPasaje)
 console.log (resultadoPaquete);
alert ( nombreViajero + " el valor de su compra es $" + resultadoPaquete * iva );
 
let mensaje = nombreViajero + " realizo una compra de $" + (resultadoPaquete * iva );
    


    console.log(finalizar);
    
    finalizar = prompt("muchas gracias por su compra, para salir ingrese: salir)");
    
    

}  

class Boletos {
   constructor( pais ,precio, stock) {
       this.pais = pais;
       this.precio = precio;
       this.stock = stock;
   }



   boletosDisponibles() {
       console.log("El stock de boletos a " + this.pais + " es de " + this.stock );
   }

   vender(cantidad) {
       if( this.stock >= cantidad) {
           this.stock -= cantidad;
           console.log("Se vendieron " + cantidad + " boletos a " + this.pais);
       } else {
           console.log("No hay suficiente cantidad de boletos a " + this.pais);
       }
   }
}


const brasil = new Boletos("Brasil", 250, 14);
const alemania = new Boletos("Alemania", 400, 27);



brasil.boletosDisponibles();
brasil.vender(1);
brasil.boletosDisponibles();
brasil.vender(13);
brasil.boletosDisponibles();


alemania.boletosDisponibles();
alemania.vender(100);
alemania.boletosDisponibles();
alemania.vender(6);
alemania.boletosDisponibles();

class paisesAmerica {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const chile = new paisesAmerica("Chile", 200);
const peru = new paisesAmerica("Peru", 250);
const uruguay = new paisesAmerica("Uruguay", 180);
const mexico = new paisesAmerica("Mexico", 320);

const arraypaisesAmerica = [chile , peru ,uruguay , mexico]; 

console.log("Destinos disponibles en America");
console.log(arraypaisesAmerica);
arraypaisesAmerica.forEach( nombre => {
    console.log(nombre);
})

arraypaisesAmerica.forEach(nombre => console.log(nombre.precio));
const menorValor = arraypaisesAmerica.filter( nombre => nombre.precio <190);

console.log("Filter: ");
console.log(menorValor);

 arraypaisesAmerica.push("Estados Unidos");
 console.log(arraypaisesAmerica);
 arraypaisesAmerica.pop();
 console.log(arraypaisesAmerica);
