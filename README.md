# API-RESTful

## Visão Geral
Este projeto é uma API RESTful simples para gerenciar alunos. A API permite realizar operações de CRUD (Criar, Ler, Atualizar, Excluir) em registros de alunos.

## Pré-requisitos
Certifique-se de que você tem o **Node.js** instalado. Caso contrário, você pode baixá-lo [aqui](https://nodejs.org/).

## Como Rodar o Projeto

### Passos para Executar o Projeto

1. **Clone o Repositório**
    ```bash
    git clone https://github.com/AlbertoLucass/API-RESTful.git
    ```

2. **Acesse o Diretório do Projeto**
    ```bash
    cd API-RESTful
    ```

3. **Instale as Dependências**
    ```bash
    npm install
    ```

4. **Inicie o Servidor**
    ```bash
    npm start
    ```
    O servidor será iniciado na porta 3000, e você verá a mensagem:
    ```
    Servidor Express inicializado na porta 3000
    ```

## Testando os Endpoints da API

Você pode testar a API usando qualquer cliente REST, como **Postman**, **Insomnia** ou **Thunder Client** (uma extensão para VSCode).

### 1. **Listar Todos os Alunos**
   - **Descrição**: Recupera todos os alunos do banco de dados.
   - **Método**: GET
   - **Endpoint**:
      ```bash
      localhost:3000/aluno
      ```
   - **Exemplo**: Acesse esse endpoint no seu navegador ou cliente REST.

### 2. **Criar um Novo Aluno**
   - **Descrição**: Adiciona um novo aluno ao banco de dados.
   - **Método**: POST
   - **Endpoint**:
      ```bash
      localhost:3000/aluno
      ```
   - **Corpo da Requisição** (formato JSON):
      ```json
      { 
        "nome": "Exemplo",
        "email": "exemplo@gmail.com", 
        "nome_curso": "Curso Exemplo" 
      }
      ```
   - **Exemplo**: Use um cliente REST e inclua o corpo JSON na sua requisição.

### 3. **Atualizar um Aluno Existente**
   - **Descrição**: Atualiza os dados de um aluno existente pelo ID.
   - **Método**: PUT
   - **Endpoint**:
      ```bash
      localhost:3000/aluno/{id}
      ```
   - **Corpo da Requisição** (formato JSON):
      ```json
      { 
        "nome": "Exemplo Atualizado",
        "email": "exemplo2@gmail.com", 
        "nome_curso": "Curso Atualizado" 
      }
      ```
   - **Exemplo**: Substitua `{id}` pelo ID do aluno e envie a requisição por um cliente REST.

### 4. **Excluir um Aluno**
   - **Descrição**: Remove um aluno pelo ID.
   - **Método**: DELETE
   - **Endpoint**:
      ```bash
      localhost:3000/aluno/{id}
      ```
   - **Exemplo**: Substitua `{id}` pelo ID do aluno que deseja excluir e envie a requisição por um cliente REST.

