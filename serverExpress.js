const { json, response } = require("express");
const express = require("express");
const Contenedor = require("./index.js");
const app = express();

const newArchivo = new Contenedor("product.txt");

let arrayAux = [];
const respuesta = newArchivo.getAll().then((response) => {
  arrayAux = response;
  return console.log(arrayAux);
});

app.get("/productos", (req, res) => {
  res.send(JSON.stringify(arrayAux, null, 2));
});

let arrayAuxRandom = [];
let respuestaRandom = newArchivo.getRandom().then((val) => {
  arrayAuxRandom = val;
  return console.log(arrayAuxRandom);
});
  
app.get("/productoRandom", (req, res) => {
  
  res.send(JSON.stringify(arrayAuxRandom, null, 2));
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor express corriendo en port ${PORT}`);
});

server.on("error", (error) => console.log(error));
