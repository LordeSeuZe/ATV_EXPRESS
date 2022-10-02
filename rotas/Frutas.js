const express = require("express");
const rotas = express.Router();

//ROTAS
rotas.get("/", (req, res) => {
  res.send("Veiculo - GET");
});
rotas.post("/", (req, res) => {
  res.send("Veiculo - POST");
});
rotas.put("/", (req, res) => {
  res.send("Veiculo - PUT");
});
rotas.delete("/", (req, res) => {
  res.send("Veiculo - DELETE");
});
module.exports = rotas;
