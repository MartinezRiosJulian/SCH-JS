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
    mostrarValoresForm();
    mostrarLocalStorage(); 
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
    function Compra(producto, talle, precio) {
        this.producto = producto;
        this.talle = talle;
        this.precio = precio;
    }
    const productoElegido = document.getElementById("selecProd").value;
    const talleElegido = document.getElementById("selecTalle").value;
    const precioElegido = document.getElementById("selecPrecio").value;
    const nuevaCompra = new Compra(productoElegido, talleElegido, precioElegido);
    const compraLocal = localStorage.setItem("Compra", JSON.stringify(nuevaCompra));
    document.getElementById("objFinal").innerHTML += `<p>${nuevaCompra.producto}</p>-<p>${nuevaCompra.talle}</p>-<p>${nuevaCompra.precio}</p>`;
};

export async function datosTabla() {
    const response = await fetch("../js/data.js/data.json")
    const data = await response.json();

    data.filter((elemento) => {
        (tdSegundaLinea.innerHTML += `<td>${elemento.nombre}</td>`);
    });
    data.filter((elemento) => {
        (tdTercerLinea.innerHTML += `<td>${elemento.talle}</td>`);
    });
    data.filter((elemento) => {
        (tdCuartaLinea.innerHTML += `<td>${elemento.precio}</td>`);
    });
};