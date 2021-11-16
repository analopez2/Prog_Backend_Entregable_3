const { json, response } = require("express");
const express = require("express");
const Contenedor = require("./index.js");
const app = express();

const newArchivo = new Contenedor("product.txt");

let arrayAux = [];
const respuesta = newArchivo.getAll().then((response) => {
  arrayAux = response;
  return arrayAux;
});

app.get("/productos", (req, res) => {
  res.send(console.log(arrayAux));
});

const respuestaRandom = newArchivo.getRandom().then((val) => console.log(val));

app.get("/productoRandom", (req, res) => {
  res.send(respuestaRandom);
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor express corriendo en port ${PORT}`);
});

server.on("error", (error) => console.log(error));
