export const listaProductos = [
  "Remera Algodon",
  "Remera Poliester",
  "Remera Manga Larga",
  "Remera Bordada",
  "Gorra Azul",
  "Gorra Naranja",
  "Gorra Negra",
  "Gorra Blanca",
  "Taza Blanca",
  "Taza Negra",
  "Taza Naranja",
  "Taza Azul",
  "Sticker Auto",
  "Sticker Termo",
  "Sticker Mochila",
  "Sticker Parche"
]
export const listaTalles = ["XS", "S", "M", "L", "XL", "XXL", "N/NA"]

export const listaPrecios = [500, 550, 600, 650, 700, 750, 800, 150]

export const productos = [
  { id: 0, nombre: "Remera", tipo: "Algodon" },
  { id: 1, nombre: "Remera", tipo: "Poliester" },
  { id: 2, nombre: "Remera", tipo: "Manga Larga" },
  { id: 3, nombre: "Remera", tipo: "Bordada" },
  { id: 4, nombre: "Taza", color: "Blanca" },
  { id: 5, nombre: "Taza", color: "Negra" },
  { id: 6, nombre: "Taza", color: "Naranja" },
  { id: 7, nombre: "Taza", color: "Azul" },
  { id: 8, nombre: "Gorra", colorRopa: "Azul" },
  { id: 9, nombre: "Gorra", colorRopa: "Naranja" },
  { id: 10, nombre: "Gorra", colorRopa: "Negra" },
  { id: 11, nombre: "Gorra", colorRopa: "Blanca" },
  { id: 12, nombre: "Sticker", para: "Auto" },
  { id: 13, nombre: "Sticker", para: "Termo" },
  { id: 14, nombre: "Sticker", para: "Mochila" },
  { id: 15, nombre: "Sticker", para: "Parche" },
];
export const talles = [
  { id: 0, talle: "S" },
  { id: 1, talle: "M" },
  { id: 2, talle: "L" },
  { id: 3, talle: "XL" },
];
export const precios = [
  { id: 0, precio: "100" },
  { id: 1, precio: "150" },
  { id: 2, precio: "50" },
  { id: 3, precio: "250" },
];

export const listaArrays = productos.concat(talles, precios);

export const arraysdeRemeras = [
  { id: 0, nombre: "Remera algodon", precio: "A partir de 500" },
  { id: 1, nombre: "Remera poliester", precio: "A partir de 500" },
  { id: 2, nombre: "Remera bordada", precio: "A partir de 500" },
  { id: 3, nombre: "Remera mangaLarga", precio: "A partir de 500" },
];
export const arraysdeGorras = [
  { id: 0, nombre: "Gorra blanco", precio: "A partir de 500" },
  { id: 2, nombre: "Gorra negro", precio: "A partir de 500" },
  { id: 1, nombre: "Gorra naranja", precio: "A partir de 500" },
  { id: 3, nombre: "Gorra azul", precio: "A partir de 500" },
];
export const arraysdeTazas = [
  { id: 0, nombre: "Taza blanco", precio: "A partir de 150" },
  { id: 1, nombre: "Taza negro", precio: "A partir de 150" },
  { id: 2, nombre: "Taza naranja ", precio: "A partir de 150" },
  { id: 3, nombre: "Taza azul", precio: "A partir de 150" },
];
export const arraysdeStickers = [
  { id: 0, nombre: "Sticker auto", precio: "A partir de 150" },
  { id: 1, nombre: "Sticker termo", precio: "A partir de 150" },
  { id: 3, nombre: "Sticker parche", precio: "A partir de 150" },
  { id: 2, nombre: "Sticker mochila", precio: "A partir de 150" },
];
export const listaArrays2 = arraysdeRemeras.concat(
  arraysdeGorras,
  arraysdeTazas,
  arraysdeStickers
);

export const listaRemeras = [
  { id: 0, nombre: "Remera", tipo: "Algodon" },
  { id: 1, nombre: "Remera", tipo: "Poliester" },
  { id: 2, nombre: "Remera", tipo: "Manga Larga" },
  { id: 3, nombre: "Remera", tipo: "Bordada" },
]
export const listaGorras = [
  { id: 0, nombre: "Gorra", color: "azul" },
  { id: 1, nombre: "Gorra", color: "naranja" },
  { id: 2, nombre: "Gorra", color: "negra" },
  { id: 3, nombre: "Gorra", color: "blanca" },
]
export const listaTazas = [
  { id: 0, nombre: "Taza", color: "blanca" },
  { id: 1, nombre: "Taza", color: "negra" },
  { id: 2, nombre: "Taza", color: "naranja" },
  { id: 3, nombre: "Taza", color: "azul" },
]
export const listaStickers = [
  { id: 0, nombre: "Sticker", para: "auto" },
  { id: 1, nombre: "Sticker", para: "termo" },
  { id: 2, nombre: "Sticker", para: "mochila" },
  { id: 3, nombre: "Sticker", para: "parche" },
]
export const productosTotales = listaRemeras.concat(listaGorras, listaTazas, listaStickers);