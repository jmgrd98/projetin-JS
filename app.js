const db = require('./db')
const readline = require('readline-sync')

const input = readline.question('Deseja buscar um livro? S/N')

switch(input){

    case 'S': console.log('Você buscou um filme');
    break;

    case 'N': console.log(db)
}

