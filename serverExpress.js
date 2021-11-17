const { json, response } = require("express");
const express = require("express");
const Contenedor = require("./index.js");
const app = express();

const newArchivo = new Contenedor("product.txt");
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor express corriendo en port ${PORT}`);
});
server.on("error", (error) => console.log(error));

app.get("/productos", async (req, res) => {
  const respuesta = await newArchivo.getAll()
  res.json(respuesta);
});
  
app.get("/productoRandom", async (req, res) => {
  const listaProductos = await newArchivo.getAll()
  const numberRandom = Math.floor(Math.random() * listaProductos.length);
  let respuestaRandom;

  if (numberRandom == 0) {
      respuestaRandom = await newArchivo.getById(1);
  }
  else {
      respuestaRandom = await newArchivo.getById(numberRandom);
  }
  res.send(respuestaRandom);
});