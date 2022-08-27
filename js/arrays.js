export let productos = [
  { id: 0, nombre: "Remera /algodon" },
  { id: 1, nombre: "Remera /mangaLarga" },
  { id: 2, nombre: "Remera /bordada" },
  { id: 3, nombre: "Remera /poliester" },
  { id: 4, nombre: "Taza /blanco" },
  { id: 5, nombre: "Taza /negro" },
  { id: 6, nombre: "Taza /naranja" },
  { id: 7, nombre: "Taza /azul" },
  { id: 8, nombre: "Gorra /azul" },
  { id: 9, nombre: "Gorra /naranja" },
  { id: 10, nombre: "Gorra /negro" },
  { id: 11, nombre: "Gorra /blanco" },
  { id: 12, nombre: "Sticker auto" },
  { id: 13, nombre: "Sticker termo" },
  { id: 14, nombre: "Sticker mochila" },
  { id: 15, nombre: "Sticker/parche" },
];
export let talles = [
  { id: 0, talle: "S" },
  { id: 1, talle: "M" },
  { id: 2, talle: "L" },
  { id: 3, talle: "XL" },
];
export let precios = [
  { id: 0, precio: "100" },
  { id: 1, precio: "150" },
  { id: 2, precio: "50" },
  { id: 3, precio: "250" },
];

export let listaArrays = productos.concat(talles, precios);

let arrayRemeras = [
  { id: 0, nombre: "Remera /algodon", talle: "S", precio: 100 },
  { id: 1, nombre: "Remera /poliester", talle: "M", precio: 20 },
  { id: 2, nombre: "Remera /bordada", talle: "L", precio: 80 },
  { id: 3, nombre: "Remera /mangaLarga", talle: "XL", precio: 200 },
];
let arrayGorras = [
  { id: 0, nombre: "Gorra c/blanco", talle: "S", precio: 150 },
  { id: 2, nombre: "Gorra c/negro", talle: "M", precio: 90 },
  { id: 1, nombre: "Gorra c/naranja", talle: "L", precio: 20 },
  { id: 3, nombre: "Gorra c/azul", talle: "XL", precio: 210 },
];
let arrayTazas = [
  { id: 0, nombre: "Taza c/blanco", talle: "", precio: 120 },
  { id: 1, nombre: "Taza c/negro", talle: "", precio: 30 },
  { id: 2, nombre: "Taza c/naranja ", talle: "", precio: 40 },
  { id: 3, nombre: "Taza c/azul", talle: "", precio: 70 },
];
let arrayStickers = [
  { id: 0, nombre: "Sticker auto", talle: "", precio: 130 },
  { id: 1, nombre: "Sticker termo", talle: "", precio: 60 },
  { id: 2, nombre: "Sticker mochila", talle: "", precio: 35 },
  { id: 3, nombre: "Sticker /parche", talle: "", precio: 45 },
];
export let listaArrays2 = arrayRemeras.concat(arrayGorras, arrayTazas, arrayStickers);
