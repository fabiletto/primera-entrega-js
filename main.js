
const botonDos = document.getElementById("botonDos");

botonDos.addEventListener("click", () => {
    Swal.fire({
        title: 'Quieres obtener importantes descuentos?',
        text: "dejanos tu email",
        input:'email',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
    
            'Excelente!',
            'Pronto nos comunicaremos con usted.',
            'success'
            
          )
        }
      })

})

class Paquetes {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio; 
        this.img = img;
        this.cantidad = 1;
       
    }
}

const Brasil = new Paquetes(1, "Brasil", 3000, "img/Brasil.jpg");
const Chile = new Paquetes(2, "Chile", 2800, "img/Chile.jpg");
const Uruguay = new Paquetes(3, "Uruguay", 1000, "img/Uruguay.jpg");
const Colombia = new Paquetes(4, "Colombia", 3500, "img/Colombia.jpg");
const EstadosUnidos = new Paquetes(5, "EE.UU", 6000, "img/EstadosUnidos.jpg");
const España = new Paquetes(6, "España", 8000, "img/España.jpg");
const Francia = new Paquetes(7, "Francia", 7000, "img/Francia.jpg");
const Qatar = new Paquetes(8, "Qatar", 12000, "img/Qatar.jpg");
const Italia = new Paquetes (9,"Italia",9000, "img/Italia.jpg");

const destinos = [Brasil, Chile, Uruguay, Colombia, EstadosUnidos, España, Francia,Qatar,Italia]; 


let carrito = [];

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
console.log(destinos);

const contenedorViajes = document.getElementById("contenedorViajes");

const mostrarProductos = () => {
    destinos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                <div class = "card" >
                    <img src = "${producto.img}" class = "card-img-tom imgPaquetes">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Vuelo</li>
                    <li class="list-group-item">Traslado</li>
                    <li class="list-group-item">Hospedaje</li>
                    <div class = "card-body" >
                        <h2> ${producto.nombre} </h2>
                        <p> $${producto.precio} </p>
                        <button class = "btn colorBoton" id = "boton${producto.id}" >comprar</button>
                    </div>
                 
                  </ul
                </div>`

        contenedorViajes.appendChild(card);
 
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })

    })
}
mostrarProductos();
 

const agregarAlCarrito = (id) => {
    const destinoComprado = carrito.find(producto => producto.id === id);
    if(destinoComprado) {
        destinoComprado.cantidad++;
    }else {
        const producto = destinos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    console.log(carrito);
    calcularTotal();
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
 
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
    
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                <div class = "card" >
                <img src = "${producto.img}" class = "card-img-tom imgPaquetes">
                    <div class = "card-body" >
                        <h2> ${producto.nombre} </h2>
                        <p> $${producto.precio} </p>
                        <p> ${producto.cantidad} </p>
                       
                        
                        <button class = "btn colorBoton" id="eliminar${producto.id}" > Eliminar</button>
                    </div>
                </div>`

        contenedorCarrito.appendChild(card);

       

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}


const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();
   
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
    
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
  
    localStorage.clear();
}

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach( producto => {
        totalCompra += producto.precio * producto.cantidad;
         
    })
    total.innerHTML = `Total $${totalCompra}`;
    
    
}


const contenedorPortada = document.getElementById("contenedorPortada");
const contenedorPortaa = document.createElement("div");
contenedorPortaa.classList.add("col-xl-12", "col-md-12", "col-sm-12");
 contenedorPortaa.innerHTML =`
 <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="img/avion5.jpg" class="d-block w-100" alt="avion despegando">
   </div>
   <div class="carousel-item">
     <img src="img/sale2.jpg" class="d-block w-100" alt="publicidad de sale">
   </div>
   <div class="carousel-item">
     <img src="img/playa1.jpg" class="d-block w-100" alt="playa">
   </div>
 </div>
</div>`
contenedorPortada.appendChild(contenedorPortaa);


setTimeout( () => {
    document.body.style.background="radial-gradient(#bbd2c5, #536976)";
}, 3000);


const dolar = document.getElementById("dolar");

const url = "https://criptoya.com/api/dolar";

setInterval( () => {
    fetch(url)
        .then((response) => response.json())
        .then(({blue, oficial, solidario, mep, ccl, ccb}) => {
            dolar.innerHTML = `<p>Dolar Blue $${blue} - Dolar Oficial $${oficial} - Dolar Solidario $${solidario} - Dolar MEP $${mep} - Dolar CCL $${ccl} - Dolar CCB $${ccb} </p>`
            valorDolar = blue;
        })
}, 2000)
