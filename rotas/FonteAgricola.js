const express = require("express");
const rotas = express.Router();

//ROTAS
rotas.get("/", (req, res) => {
  res.send("Fonte Agricola - GET");
});

rotas.post("/", (req, res) => {
  res.send("Fonte Agricola - POST");
});

rotas.put("/", (req, res) => {
  res.send("Fonte Agricola - PUT");
});

rotas.delete("/", (req, res) => {
  res.send("Fonte Agricola - DELETE");
});
module.exports = rotas;
