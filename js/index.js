import { productos, talles, precios } from "./arrays.js";

let submitButton = document.querySelector("#submitBtn");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  mostrarValoresForm();
});
function mostrarValoresForm() {
  const onlyInputs = document.querySelectorAll("#carrito-compra-form select");
  onlyInputs.forEach((input) => {
    console.log(input.value);
  });
}

let submit = document.querySelector("#submitBtn");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let msj = document.createElement("div");
  msj.innerHTML += `<div> "Compra Finalizada"</div>`;
  document.body.appendChild(msj);
});

productos.forEach(
  (prod) =>
    (selecProd.innerHTML += `<option value="${prod.nombre}">${prod.nombre}</option>`)
);

talles.forEach(
  (talle) =>
    (selecTalle.innerHTML += `<option value="${talle.talle}">${talle.talle}</option>`)
);

precios.forEach(
  (precio) =>
    (selecPrecio.innerHTML += `<option value="${precio.precio}">${precio.precio}</option>`)
);
