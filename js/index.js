let arrayRemeras = [
  { id: 0, nombre: "Remera", talle: "S", precio: 100 },
  { id: 1, nombre: "Remera2", talle: "M", precio: 20 },
  { id: 2, nombre: "Remera3", talle: "L", precio: 80 },
  { id: 3, nombre: "Remera4", talle: "XL", precio: 200 },
];
let arrayGorras = [
  { id: 0, nombre: "Gorra", talle: "S", precio: 100 },
  { id: 2, nombre: "Gorra3", talle: "M", precio: 80 },
  { id: 1, nombre: "Gorra2", talle: "L", precio: 20 },
  { id: 3, nombre: "Gorra4", talle: "XL", precio: 200 },
];
let arrayTazas = [
  { id: 0, nombre: "Taza", talle: "N/NA", precio: 100 },
  { id: 1, nombre: "Taza2", talle: "N/NA", precio: 20 },
  { id: 2, nombre: "Taza3", talle: "N/NA", precio: 80 },
  { id: 3, nombre: "Taza4", talle: "N/NA", precio: 200 },
];
let arrayStickers = [
  { id: 0, nombre: "Sticker", talle: "N/NA", precio: 100 },
  { id: 1, nombre: "Sticker2", talle: "N/NA", precio: 20 },
  { id: 2, nombre: "Sticker3", talle: "N/NA", precio: 80 },
  { id: 3, nombre: "Sticker4", talle: "N/NA", precio: 200 },
];
let listaArrays = arrayRemeras.concat(arrayGorras, arrayTazas, arrayStickers);

function saludar() {
  alert("Bienvenid@ a SCH Mecanica Integral");
}

saludar();

let producto = "";

while (producto != "Salir") {
  producto = prompt(
    "Seleccione su producto \n Taza|Remera|Gorra|Sticker|Ver|Salir"
  );
  switch (producto) {
    case "Taza":
      comprarTaza();
      break;
    case "Remera":
      comprarRemera();
      break;
    case "Gorra":
      comprarGorra();
      break;
    case "Sticker":
      comprarSticker();
      break;
    case "Ver":
      verProductos();
      break;
    case "Salir":
      break;
    default:
      alert("Carrito vacio");
      break;
  }
}
alert("Compra Finalizada");
let carga = 3;
while (carga > 0) {
  carga--;
  alert(carga);
}

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
  listaArrays.forEach((producto) => {
    console.log(
      `ID: ${producto.id} Nombre: ${producto.nombre} Talle: ${producto.talle} Precio: ${producto.precio}`
    );
  });
}

let submitButton = document.getElementById("submit-btn");
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
