import { listaTalles, listaPrecios, listaProductos } from "./data/arrays.js";
import { $selectProducto, $selectTalle, $selectPrecio, $submitBtn, $tablaSubmit } from "./data/const.js";
import { clickBtn, mostrarLocalStorage, mostrarValoresForm, datosTabla } from "./data/functions.js";

$tablaSubmit.addEventListener("click", datosTabla);
$submitBtn.addEventListener("click", clickBtn);
$submitBtn.addEventListener("click", mostrarValoresForm);
$submitBtn.addEventListener("click", mostrarLocalStorage);

export function Compra(producto, talle, precio) {
  this.producto = producto;
  this.talle = talle;
  this.precio = precio;
}

function mostrarSelectProd(arreglo, lugar) {
  let option =
    '<option value="" disabled selected>Seleccione producto</option>';

  for (let i = 0; i < arreglo.length; i++) {
    option += '<option value="' + arreglo[i] + '">' + arreglo[i] + "</option>";
  }

  lugar.innerHTML = option;
}

function mostrarSelectTalle(arreglo, lugar) {
  let option =
    '<option value="" disabled selected>Seleccione Talle</option>';

  for (let i = 0; i < arreglo.length; i++) {
    option += '<option value="' + arreglo[i] + '">' + arreglo[i] + "</option>";
  }

  lugar.innerHTML = option;
}

function mostrarSelectPrecio(arreglo, lugar) {
  let option =
    '<option value="" disabled selected>$</option>';

  for (let i = 0; i < arreglo.length; i++) {
    option += '<option value="' + arreglo[i] + '">' + arreglo[i] + "</option>";
  }

  lugar.innerHTML = option;
}

mostrarSelectProd(listaProductos, $selectProducto);
mostrarSelectTalle(listaTalles, $selectTalle);
mostrarSelectPrecio(listaPrecios, $selectPrecio);

function cortar(array, inicio, fin, lugar) {
  let cortar = array.slice(inicio, fin);
  mostrarSelectProd(cortar, lugar);
  mostrarSelectTalle(cortar, lugar);
  mostrarSelectPrecio(cortar, lugar);
}

$selectProducto.addEventListener("change", function () {
  const valorProd = $selectProducto.value;

  const listOne = ["Remera Algodon", "Remera Poliester", "Remera Manga Larga", "Remera Bordada", "Gorra Azul", "Gorra Naranja", "Gorra Negra", "Gorra Blanca"];
  const listTwo = ["Taza Blanca", "Taza Negra", "Taza Naranja", "Taza Azul", "Sticker Auto", "Sticker Termo", "Sticker Mochila", "Sticker Parche"];

  switch (true) {
    case listOne.includes(valorProd):
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case listTwo.includes(valorProd):
      cortar(listaTalles, 6, 7, $selectTalle);
      break;
  }
});