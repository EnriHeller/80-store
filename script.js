//Creo un array donde se alojen todos los contenedores del articulo, para hacerles los efectos de seleccionado
let articulosContainer = document.getElementsByClassName("articulo-container");
//Los containers de articulos que tengan la clase containerToggle, van a ir al array containers seleccionados
let containersSeleccionados = [];
let productosSeleccionados = [];
let cantidadDeArticulos = document.getElementById("cantidadDeArticulos");

for (let container of articulosContainer){

    container.addEventListener("mouseover", () =>{
        container.classList.add("containerMouseOver");
    });

    container.addEventListener("mouseout", () =>{
        container.classList.remove("containerMouseOver");
    });

    container.addEventListener("click", () => {
        productosSeleccionados.splice(0, productosSeleccionados.length);
        container.classList.toggle("containerToggle");
        containersSeleccionados = document.getElementsByClassName('containerToggle');

        for(seleccion of containersSeleccionados){
            let imagenSeleccionada = seleccion.children[0].src;
            let nombreSeleccionado = seleccion.children[1].textContent;
            let precioSeleccionado = seleccion.children[2].textContent;
            let descripcionSeleccionada;

            for(producto of productos){
                if(nombreSeleccionado === producto.nombre){
                    descripcionSeleccionada = producto.descripcion;
                }
            }
            productoSeleccionado = new Producto(nombreSeleccionado, precioSeleccionado,descripcionSeleccionada,imagenSeleccionada);
            productosSeleccionados.push(productoSeleccionado);
        }
        
        cantidadDeArticulos.textContent = productosSeleccionados.length;
    });
}


class Producto{
    constructor(nombre,precio,descripcion, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    getNombre(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
    getDescripcion(){
        return this.descripcion;
    }
    getImagen(){
        return this.imagen;
    }
}

const camperaMcFly = new Producto("Campera de Marty McFly",5000,"¡Con esta campera podrás volver al futuro!","./src/assets/productos/campera-mcfly.jpg");

const cassette = new Producto("Cassette con hits de la época",600,"Van Halen, The Cure, Abba, U2 y más... En un solo cassette","./src/assets/productos/cassette.png");

const gameboy = new Producto("Gameboy color",3000,"Para revivir viejos recuerdos jugando con el gameboy","./src/assets/productos/gameboy.png");

const television = new Producto("Tv antigua",1500,"Ideal para ver Mtv","./src/assets/productos/television-antigua.png");

const videoCasetera = new Producto("Videocasetera",2500,"Para volver a ver tus vhs","./src/assets/productos/videocasssete.jpg");

const walkman = new Producto("Walkman",1200,"Escucha las mejores canciones","./src/assets/productos/walkman.png");

let productos = [camperaMcFly,cassette,gameboy,television,videoCasetera,walkman];

let imagenContainer = document.getElementsByClassName("imagen-articulo");
let nombreContainer = document.getElementsByClassName("nombre-articulo");
let precioContainer = document.getElementsByClassName("precio-articulo");

for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const contenidoImagen = imagenContainer[i];
    const contenidoNombre = nombreContainer[i];
    const contenidoPrecio = precioContainer[i];
    contenidoNombre.textContent = producto.nombre;
    contenidoPrecio.textContent = "$" + producto.precio;
    contenidoImagen.src = producto.imagen;
    contenidoImagen.alt = producto.nombre;
}








