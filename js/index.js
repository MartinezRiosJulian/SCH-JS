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

function saludar() {
  alert("Bienvenid@ a SCH Mecanica Integral");
}

saludar();

function selecProd() {
  alert("Seleccione su producto");
}

selecProd();


let producto = "";

while (producto != "Aceptar") {
  producto = prompt("Taza|Remera|Gorra|Sticker|Aceptar");
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
    case "Aceptar":
      break;
    default:
      alert("Carrito vacio");
      break;
  }
  alert("Procesando su compra");
  let carga = 3;
  while (carga >= 0) {
    carga--;
    alert(carga);
  }
  
  alert("Compra Finalizada");
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

//let producto = prompt("Llene su carrito");
/*if (producto.toLowerCase() == 'taza') {
  alert('Agregado a carrito "Taza SCH"');
} else if (producto.toLowerCase() == 'gorra') {
  alert('Agregado a carrito "Gorra SCH"');
} else if (producto.toLowerCase() == 'remera') {
  alert('Agregado a carrito "Remera SCH"');
} else if (producto.toLowerCase() == 'sticker') {
  alert('Agregado a carrito "Sticker SCH"');
} else {
  alert('Carrito vacio');
}*/
