const {v4: uuidv4} = require  ('uuid');

let aluno = [];

function create ({nome, email, nome_curso}){
    const aluno = {
        id: uuidv4(),
        nome,
        email,
        nome_curso,
    }
    aluno.push(aluno);
    return aluno;
}

function update(id, {nome, email, nome_curso}){
    const index = vahas.findIndex(aluno => aluno.id === id);
    if (index === -1){
        return null;
    }
    vagas [index] = {
        is,
        nome,
        email,
        nome_curso,
    };
    return aluno[index];

    function remove (id) {
        const index = aluno.findIndex(aluno => aluno.id === id);
        if (index === -1) {
            return false;
        }
        aluno.splice(index, 1);
        return true;
    }

    function findAll() {
        return aluno;
    }

    module.exports = {
        create,
        update,
        remove,
        findAll,
    }
}
