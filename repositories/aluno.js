const { v4: uuidv4 } = require("uuid");

let alunos = [];

function create({ nome, email, nome_curso }) {
  const aluno = {
    id: uuidv4(),
    nome,
    email,
    nome_curso,
  };
  alunos.push(aluno);
  return aluno;
}

function update(id, { nome, email, nome_curso }) {
  const index = alunos.findIndex((vaga) => vaga.id === id);
  if (index === -1) {
    return null;
  }
  alunos[index] = {
    id,
    nome,
    email,
    nome_curso,
  };
  return alunos[index];
}

function findAll() {
    return alunos;
}

function remove(id) {
  const index = alunos.findIndex((aluno) => aluno.id === id);
  if (index === -1) {
    return null;
  }
  const [removedAluno] = alunos.splice(index, 1);
  return removedAluno;
}

module.exports = {
  create,
  update,
  remove,
  findAll,
};
