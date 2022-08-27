import { productos, talles, precios } from "./arrays.js";

const localStorage = window.localStorage;

function mostrarLocalStorage() {
  let objObtenido = localStorage.getItem("PRODUCTOS_COMPRA");
  if (objObtenido) {
    console.log(objObtenido);
  } else {
    console.log("No hay productos guardados");
  }
}

mostrarLocalStorage();

let submitButton = document.querySelector("#submitBtn");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  mostrarValoresForm();
});

function mostrarValoresForm() {
  //
  const onlyInputs = document.querySelectorAll("#carrito-compra-form select");
  let objResult = {
    producto: {},
    talle: {},
    precio: {},
  };
  onlyInputs.forEach((input, i) => {
    if (i === 0) {
      objResult.producto = productos.find((_producto, index) => {
        return index === input.selectedIndex - 1;
      });
    }
    if (i === 1) {
      objResult.talle = talles.find((_talle, index) => {
        return index === input.selectedIndex - 1;
      });
    }
    if (i === 2) {
      objResult.precio = precios.find((_precio, index) => {
        return index === input.selectedIndex - 1;
      });
    }
  });
  localStorage.setItem("PRODUCTOS_COMPRA", JSON.stringify(objResult));
}

let submit = document.querySelector("#submitBtn");
submit.addEventListener("click", (event) => {
  event.preventDefault();

  let msj = "Compra Finalizada";
  document.querySelector("#compraFinal").innerHTML = msj;
  let objSelec = localStorage.getItem("PRODUCTOS_COMPRA");
  document.querySelector("#objFinal").innerHTML = objSelec;
});

productos.forEach(
  (prod) =>
    (selecProd.innerHTML += `<option value="${prod}">${prod.nombre}</option>`)
);

talles.forEach(
  (talle) =>
    (selecTalle.innerHTML += `<option value="${talle}">${talle.talle}</option>`)
);

precios.forEach(
  (precio) =>
    (selecPrecio.innerHTML += `<option value="${precio}">${precio.precio}</option>`)
);
