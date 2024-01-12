const boton = document.querySelector(".boton-imagen");
const imagen = boton.querySelector("img");

boton.addEventListener("dblclick", function() {
    imagen.width = 500;
    imagen.height = 500;
});
