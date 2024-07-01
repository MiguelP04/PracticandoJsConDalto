let contenedor = document.querySelector(".contenedor")

const h1_viejo = document.querySelector(".h1")

const h1_nuevo = document.createElement("H1")

let respuesta = contenedor.lastElementChild

console.log(respuesta.tagName)

if(respuesta.tagName == "P"){
    document.write("El último elemento es una etiqueta p")
} else {
    document.write("El último elemento NO es una etiqueta p")
}





