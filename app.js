const db = require('./db')
const readline = require('readline-sync');
const livros = require('./db');
const { isConstructorDeclaration } = require('typescript');

const input = readline.question('Deseja buscar um livro? S/N')

switch(input){

    case 'S':
        console.log('Essas são as categorias disponíveis:');
        for(let i = 0; i < db.length; i++){
        console.log(db[i].categoria);
    }
    break;

    case 'N': console.log(db);
}

const inputCategoria = readline.question('Qual categoria vc quer?')
const retorno = livros.filter(livro => livro.categoria === inputCategoria)
console.table(retorno)