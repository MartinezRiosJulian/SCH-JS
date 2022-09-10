import { Compra } from "../index.js";
import { $selectProducto, $selectTalle, $selectPrecio } from "./const.js";

export function clickBtn(event) {
    event.preventDefault();
    let msj = "Compra Finalizada";
    document.getElementById("compraFinal").innerText = msj;
    Swal.fire({
        title: 'Listo!',
        text: 'Compra Finalizada',
        icon: 'success',
        confirmButtonText: 'Cerrar'
    })
};

export function mostrarLocalStorage() {
    let objObtenido = localStorage.getItem("Compra")
    if (objObtenido) {
        console.log(JSON.parse(objObtenido));
    } else {
        console.log("No hay productos guardados");
    }
};

export function mostrarValoresForm() {
    const productoElegido = $selectProducto.value;
    const talleElegido = $selectTalle.value;
    const precioElegido = $selectPrecio.value;
    const nuevaCompra = new Compra(productoElegido, talleElegido, precioElegido);
    const objResult = localStorage.setItem("Compra", JSON.stringify(nuevaCompra));
    document.getElementById("objFinal").innerHTML += `<p>${nuevaCompra.producto}</p>-<p>${nuevaCompra.talle}</p>-<p>${nuevaCompra.precio}</p>`;
};

export async function datosTabla() {
    try {
        const response = await fetch("../js/data/data.json")
        const data = await response.json(); console.log(data);
        if (data) {
            data.forEach(e => {
                tdSegundaLinea.innerHTML += `<td>${e.nombre}</td>`
                tdTercerLinea.innerHTML += `<td>${e.talle}</td>`
                tdCuartaLinea.innerHTML += `<td>${e.precio}</td>`
            })
        }
    }
    catch (error) {
        console.log(error + "Hubo un error");
    }
};
// "./data/data.json"
// "../js/data/data.json"