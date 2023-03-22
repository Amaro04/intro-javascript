/*
   Crie um programa que receba o nome e a nota de 4 matérias.
   Exibir o nome das 4 matérias com a nota e a média final.
   EX:
   Matemática: 7,00
   Inglês: 10,00
   Geografia: 8,00
   Física: 8,00
   Média: 8,25
*/  
const entrada = require('prompt-sync')();
 console.log('Programa que recebe nome e nota de quatro matérias');

  let matéria1 = entrada('Digite a primeira matéria: ');
  let nota1 = parseFloat(entrada('Digite a nota: '));

  let matéria2 = entrada('Digite a segunda matéria: ');
  let nota2 = parseFloat(entrada('Digite a nota: '));

  let matéria3 = entrada('Digite a terceira matéria: ');
  let nota3 = parseFloat(entrada('Digite a nota: '));

  let matéria4 = (entrada('Digite a quarta matéria: '));
  let nota4 = parseFloat(entrada('Digite a nota: ')); 

let média = (nota1 + nota2 + nota3 + nota4) /4;

console.log('Notas: ');
console.log(matéria1 + ': ' + nota1.toFixed(2));
console.log(matéria2 + ': ' + nota2.toFixed(2));
console.log(matéria3 + ': ' + nota3.toFixed(2));
console.log(matéria4 + ': ' + nota4.toFixed(2));
console.log('Média: ' + média.toFixed(2));
