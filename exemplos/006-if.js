// Estruturas condicionais

const entrada = require('prompt-sync')();

let idadeTxT = entrada ('Digite sua idade: ');
let idade = parseInt(idadeTxT);

if (idade > 18) {
    console.log('Você tem mais de 18 anos!');
}

if (idade < 18) {
    console.log('Você tem menos de 18!');
}

if (idade === 18){
    console.log('Você tem 18 anos!');
}