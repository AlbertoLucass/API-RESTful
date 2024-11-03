# API-RESTful

## Como Rodar o Projeto

Execute os passos abaixo para rodar o projeto

1. Certifique-se de que tem o **Node.js** instalado. Caso não tenha, baixe [aqui](https://nodejs.org/).

2. Clone o repositório
```bash
git clone https://github.com/AlbertoLucass/API-RESTful.git
```

3. Acesse a pasta clonada
```bash
cd API-RESTful
```

4. Instale as dependências
```bash
npm install
```

5. Inicialize o projeto
```bash
node server.js
```

O servidor irá rodar na porta 3000.

Você verá a mensagem: Servidor Express inicializado...

## Como Tetsar as Requisições do Projeto

1. Certifique-se que possua.Ou faça a instalação. De alguma aplicação que permita teste de requisições API-Restful. Ex: Postman , Insomnia ou thunder cliebt( plugin que funciona diretamneto no VSCode)

2. Requisição Get, pode ser feita via Browser ou utilizando as aplicações anteriormente mencionadas. Com o seguinte url:
   
```bash
localhost:3000/aluno/
```

3. Requisição Post,para a adição de um novo elemento. Só podem ser feitas utilizando as aplicações anteriormente mencionadas.Além da adição do corpo da requisição no seguinte url:
   
```bash
localhost:3000/aluno/
```
EX corpo em formato Json:
```bash
{ 
  "nome":"Exemplo",
  "email":"Exemplo@gmail.com", 
  "nome_curso":"Exemplo" 
}
```
4.Requisição Put, para atualização de um id específico. Só podem ser feitas utilizando as aplicações anteriormente mencionadas. Além da adição do corpo da requisição no seguinte url:

```bash
localhost:3000/aluno/Id desejado para Atualização
```
EX corpo em formato Json:
```bash
{ 
  "nome":"Exemplo2",
  "email":"Exemplo2@gmail.com", 
  "nome_curso":"Exemplo2" 
}
```
5.Requisição Delete, para remoção de um id específico. Só podem ser feitas utilizando as aplicações anteriormente mencionadas. No seguinte url:

```bash
localhost:3000/aluno/Id desejado para exclusão
```




