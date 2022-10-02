const express = require("express");
const FrutaRotas = require("./rotas/Fruta");
const FonteAgricolaRotas = require("./rotas/FonteAgricola");
const app = express();

app.use("/Fruta", FrutaRotas);
app.use("/FonteAgricola", FonteAgricolaRotas);

const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));
