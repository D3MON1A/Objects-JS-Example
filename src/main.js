/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};
let persona = {
  nombre: "Juan",
  edad: 24,
  genero: "masculino",
  profesion: "Doctor",
  apellido: "Pérez",
  cedula: "981239"
};

let persona2 = {
  nombre: "Maria",
  edad: 57,
  genero: "femenino",
  profesion: "Maestra",
  apellido: "Warren",
  cedula: "9812312"
};

let persona3 = {
  nombre: "David",
  edad: 30,
  genero: "masculino",
  profesion: "Presidente",
  apellido: "Bukele",
  cedula: "128912"
};

let carro = {
  color: "rojo",
  marca: "mercedes",
  anio: "1994",
  modelo: "a 200",
  transmision: "manual",
  numero_puertas: 4,
  placa: "GMX912",
  dueno: persona,
  en_venta: true,
  multas: [
    "Se paso un semaforo en rojo",
    "Iba borracho",
    "Iba sin licencia",
    "Se peleó con el policía"
  ],
  duenos_anteriores: [persona2, persona3]
};

console.log(carro.color);
console.log(carro.numero_puertas);
console.log(carro.dueno.nombre);
console.log(carro.dueno.cedula);
console.log(carro.multas[0]);
console.log(carro.multas[carro.multas.length - 1]);
console.log(carro.duenos_anteriores[0].nombre);

console.log(carro["color"]);

carro.color = "negro";
carro.anio = "2008";
carro.multas.push("Nueva multa");

carro.tipo_de_combustible = "gasoil";
carro["serial_de_motor"] = "XNUIYU139";

const nueva_propiedad = "kms_recorridos";
carro[nueva_propiedad] = 300;

console.log(carro);
