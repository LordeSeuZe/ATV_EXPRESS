const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Página inicial");
});

// ROTAS PARA AS FRUTAS

app.get("/Fruta", (req, res) => {
  res.send("Veja as Frutas aqui - get");

});
app.post("/Fruta", (req, res) => {
  res.send("Adicione as Frutas por aqui !- post");

});
app.put("/Fruta", (req, res) => {
  res.send("Adicione as Frutas por aqui !- put");

});
app.delete("/Fruta", (req, res) => {
  res.send("Alguma Fruta estragou? tirea por aqui!- delete");

});

const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));