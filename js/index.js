function saludar() {
  alert("Bienvenid@ a SCH Mecanica Integral");
}

saludar();

function selecProd() {
  alert("Seleccione su producto");
}

selecProd();

let producto = prompt("Llene su carrito");
if (
  producto != "" &&
  (producto == "TAZA SCH" || producto == "Taza SCH" || producto == "taza sch")
) {
  alert("Carrito Taza SCH");
} else if (
  producto != "" &&
  (producto == "GORRA SCH" || producto == "Gorra SCH" || producto == "gorra sch")
) {
  alert("Carrito Gorra SCH");
} else if (
  producto != "" &&
  (producto == "REMERA SCH" || producto == "Remera SCH" || producto == "remera sch")
) {
  alert("Carrito Remera SCH");
} else if (
  producto != "" &&
  (producto == "STICKER SCH" || producto == "Sticker SCH" || producto == "sticker sch")
) {
  alert("Carrito Sticker SCH");
}
else {
  alert ("Carrito Vacio")
}

alert("Procesando su compra");

let carga = 3;
while (carga <= 3) {
  carga--;
  alert(carga);
  if (carga == 0) {
    alert("Compra Finalizada");
    break;
  }
}
