import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

let alunos = [];

app.get('/', (req, res) => {
  res.send('Servidor Express inicializado...');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

