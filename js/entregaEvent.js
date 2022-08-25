import {listaArrays2} from './arrays.js';

function saludar() {
  alert("Bienvenid@ a SCH Mecanica Integral");
}

saludar();

let producto = "";

while (producto != "SALIR") {
  producto = prompt(
    "Seleccione su producto \n Taza|Remera|Gorra|Sticker|Ver|Salir".toUpperCase()
  );
  switch (producto) {
    case "taza".toUpperCase():
      comprarTaza();
      break;
    case "remera".toUpperCase():
      comprarRemera();
      break;
    case "gorra".toUpperCase():
      comprarGorra();
      break;
    case "sticker".toUpperCase():
      comprarSticker();
      break;
    case "ver".toUpperCase():
      verProductos();
      break;
    default:
      alert("Carrito vacio");
      break;
    case "SALIR":
      break;
  }
}
let carga = 3;
while (carga > 0) {
  alert(carga);
  carga--;
}
alert("Compra Finalizada");

function comprarTaza() {
  let productoElegido = prompt("Elija su Taza");
  const tazaBuscada = arrayTazas.find((taza) => {
    return taza.nombre == productoElegido;
  });
  if (tazaBuscada) {
    console.log("Comprado");
    console.log(tazaBuscada);
  } else {
    console.log("No tenemos ese producto");
  }
}

function comprarRemera() {
  let productoElegido = prompt("Elija su Remera");
  const remeraBuscada = arrayRemeras.find((remera) => {
    return remera.nombre == productoElegido;
  });
  if (remeraBuscada) {
    console.log("Comprado");
    console.log(remeraBuscada);
  } else {
    console.log("No tenemos ese producto");
  }
}

function comprarGorra() {
  let productoElegido = prompt("Elija su Gorra");
  const gorraBuscada = arrayGorras.find((gorra) => {
    return gorra.nombre == productoElegido;
  });
  if (gorraBuscada) {
    console.log("Comprado");
    console.log(gorraBuscada);
  } else {
    console.log("No tenemos ese producto");
  }
}

function comprarSticker() {
  let productoElegido = prompt("Elija su Sticker");
  const stickerBuscado = arrayStickers.find((sticker) => {
    return sticker.nombre == productoElegido;
  });
  if (stickerBuscado) {
    console.log("Comprado");
    console.log(stickerBuscado);
  } else {
    console.log("No tenemos ese producto");
  }
}

function verProductos() {
  listaArrays2.forEach((producto) => {
    alert(
      `ID: ${producto.id} Nombre: ${producto.nombre} Talle: ${producto.talle} Precio: ${producto.precio}`
    );
    console.log(
      `ID: ${producto.id} Nombre: ${producto.nombre} Talle: ${producto.talle} Precio: ${producto.precio}`
    );
  });
}
