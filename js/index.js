import { listaTalles, listaPrecios, listaProductos } from "./data.js/arrays.js";
import {$selectProducto, $selectTalle, $selectPrecio, $submitBtn, $tablaSubmit } from "../js/data.js/const.js";
import {clickBtn ,mostrarLocalStorage, mostrarValoresForm} from "../js/data.js/funtions.js";
import {datosTabla} from "../js/data.js/funtions.js";

$tablaSubmit.addEventListener("click", datosTabla);
$submitBtn.addEventListener("click", clickBtn);
// $submitBtn.addEventListener("click", mostrarValoresForm);
// $submitBtn.addEventListener("click", mostrarLocalStorage);

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

  switch (valorProd) {
    case "Remera Algodon":
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case "Remera Poliester":
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case "Remera Manga Larga":
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case "Remera Bordada":
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case "Gorra Azul":
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case "Gorra Naranja":
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case "Gorra Negra":
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case "Gorra Blanca":
      cortar(listaTalles, 0, 6, $selectTalle);
      break;
    case "Taza Blanca":
      cortar(listaTalles, 6, 7, $selectTalle);
      break;
    case "Taza Negra":
      cortar(listaTalles, 6, 7, $selectTalle);
      break;
    case "Taza Naranja":
      cortar(listaTalles, 6, 7, $selectTalle);
      break;
    case "Taza Azul":
      cortar(listaTalles, 6, 7, $selectTalle);
      break;
    case "Sticker Auto":
      cortar(listaTalles, 6, 7, $selectTalle);
      break;
    case "Sticker Termo":
      cortar(listaTalles, 6, 7, $selectTalle);
      break;
    case "Sticker Mochila":
      cortar(listaTalles, 6, 7, $selectTalle);
      break;
    case "Sticker Parche":
      cortar(listaTalles, 6, 7, $selectTalle);
      break;

  }
});

$selectTalle.addEventListener("change", function () {
  const valorTalle = $selectTalle.value;

  switch (valorTalle) {
    case "XS":
      cortar(listaPrecios, 0, 2, $selectPrecio);
      break;
    case "S":
      cortar(listaPrecios, 2, 4, $selectPrecio);
      break;
    case "M":
      cortar(listaPrecios, 4, 6, $selectPrecio);
      break;
    case "L":
      cortar(listaPrecios, 4, 6, $selectPrecio);
      break;
    case "XL":
      cortar(listaPrecios, 6, 7, $selectPrecio);
      break;
    case "XXl":
      cortar(listaPrecios, 6, 7, $selectPrecio);
      break;
    case "N/NA":
      cortar(listaPrecios, 7, 8, $selectPrecio);
      break;
  }
});