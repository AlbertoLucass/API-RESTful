const express = require("express");
const { create, update, remove, findAll } = require("./repositories/aluno");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor Express inicializado...");
});

app.get('/aluno', (req, res) => {
  const aluno = findAll();
  res.json(aluno);
});

app.post("/aluno", (req, res) => {
  const { nome, email, nome_curso } = req.body;
  const aluno = create({ nome, email, nome_curso });
  res.status(201).json(aluno);
});

app.put("/aluno/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email, nome_curso } = req.body;
  const aluno = update(id, { nome, email, nome_curso });
  res.json(aluno);
});

app.delete("/aluno/:id", (req, res) => {
  const { id } = req.params;
  remove(id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
