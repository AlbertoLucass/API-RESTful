const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let alunos = [];

app.get('/', (req, res) => {
  res.send('Servidor Express inicializado...');
});

app.post('/aluno', (req, res) => {
  const {nome, email, nome_curso} = req.body;
  const vaga = create ({nome, email, nome_curso});
  res.status(201).json(vaga);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

