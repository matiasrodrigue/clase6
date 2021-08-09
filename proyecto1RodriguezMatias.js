class mercadolibro{
    constructor(titulo, autor, precio, unidades) {
        this.titulo = titulo.toUpperCase();
        this.autor = autor;
        this.precio = parseFloat(precio);
        this.unidades = unidades;
        this.stock = true;
    }
    sumarIVA(){
        this.precio = this.precio * 1.21;
    }
    enstock(){
        this.stock = true;
    }
}

var arrayLibros = [];

do{
    var busquedaProducto = prompt("Ingrese titulo del Libro escogido o TERMINAR para acabar su eleccion");
    if (busquedaProducto === "TERMINAR" || busquedaProducto === "terminar" || busquedaProducto === "Terminar" ){
        break;
    }else{
        tituloP = busquedaProducto;
        var autorP = prompt("Ingrese Autor del Libro");
        var precioP = prompt("Ingrese Precio del Libro");
        var unidadesP = prompt("¿Cantidad de Libros que Desea?");
        arrayLibros.push( new mercadolibro(tituloP, autorP, precioP, unidadesP));

    }
}
while (busquedaProducto != "TERMINAR" || busquedaProducto != "terminar" || busquedaProducto != "Terminar");

console.log(arrayLibros);

var precioP = precioP*unidadesP*1.21


document.write("<ul><li><h3>Titulo: "+ tituloP+"<h3></li>");
document.write("<li><h3>Autor: "+autorP+"<h3></li>");
document.write("<li><h3>Cantidad: "+unidadesP+"<h3></li>");
document.write("<li><h3>valor Total :"+precioP+"<h3></li></ul><br>");


  console.log(tituloP);
  console.log(autorP);
  console.log(unidadesP);
  console.log(precioP);


const productos = [];

productos.push(new mercadolibro(tituloP, autorP, precioP, unidadesP ));

for(const mercadolibro of productos)
    mercadolibro.enstock();

    console.log(productos);


class biblioteca{
    constructor(libros, autores, idioma){
        this.libros = libros;
        this.autores = autores;
        this.idioma = idioma;

    }
   
}

const bestseller = []
bestseller.push( new biblioteca("Don Quijote de la Mancha", "Miguel de Cervantes", "Español"));
bestseller.push( new biblioteca("El Señor de los Anillos", "J. R. R. Tolkien","Ingles"));
bestseller.push( new biblioteca("El código Da Vinci", "Dan Brown", "Ingles"));
bestseller.push( new biblioteca("El alquimista", "Paulo Coelho", "Portugues" ));

    console.log(bestseller);

    const guiaL = [{ id: 1, producto: "Novela", precio: 1200 },
                { id: 2, producto: "Cuentos", precio: 500 },       
                { id: 3, producto: "Historia y Geografia", precio: 2000 },    
                { id: 4, producto: "Comics", precio: 700 }];
                
// const buscaCuentos = productos.find(producto => producto.id === 2);
// console.log(buscaCuentos)        //op1

const baratos = guiaL.filter(producto => producto.precio < 1000);
console.log(baratos);            //op2

// const aumentos = productos.map(producto => producto.precio += 30);
// console.log(aumentos);              // op3


var mensajeLector = document.createElement("p");
mensajeLector.innerHTML = "<h4>¡Disfruta de tu lectura!</h4>";
document.body.appendChild(mensajeLector);



var bestsellers = document.getElementById("sugerencias");

var sugerencias = ["Don Quijote de la Mancha", "El Señor de los Anillos", "El código Da Vinci", "El alquimista" ];

for (const titulo of sugerencias){

    var li = document.createElement("li");
    li.innerHTML = titulo
    bestsellers.appendChild(li);
}

