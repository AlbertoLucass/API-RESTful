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

    module.exports = {
        create,
        update,
        remove,
        findAll,
    }
}
