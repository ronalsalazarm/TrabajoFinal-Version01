/* Obtener referencia a todos los botones */
let botones = document.querySelectorAll("#catalogo > article > div > div > button");
/*Agregar cuando escucha el evento click en los botones y ejecutar el método agregarCarrito  */

botones.forEach(element =>{ /* Para cada boton se le agrega el elemento al presionar el evento click */
    element.addEventListener("click",agregarCarrito);
})

/* Método para agregar el producto al carrito */
function agregarCarrito(producto){

    /* Obtuve los datos de mi producto  */
   let tituloProducto = producto.target.parentElement.querySelector("h5");
   let precioProducto = producto.target.parentElement.querySelector("span.precioFinal");
   let imagenProducto = producto.target.parentElement.querySelector("picture");



   /* Ahora colocar en el modal */
   let modalCuerpo = document.querySelector ("#ventanaCarrito > div > div > div.modal-body");
 
  
   /* Condicional para saber si está vacío */
if(modalCuerpo.querySelector("p").innerHTML =="Su carrito está actualmente vacío."){
   modalCuerpo.innerHTML = "" ;
}
modalCuerpo.innerHTML += "<h5>"+ tituloProducto.innerHTML+"</h5><p>"+precioProducto.innerHTML+"</p>";

 /* Avisar que se agregó al carrito */
 alert("Se agregó correctamente el producto");
}