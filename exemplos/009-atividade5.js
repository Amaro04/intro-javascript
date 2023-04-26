/*
Crie um programa que receba duas notas.
Calcule a média entre elas e apresente o texto aprovado caso a média seja >= 7 e reprovado caso seja menor.
As notas digita devem estar entre 0 e 10.
*/

const entrada = require('prompt-sync')();

const nota1 = parseFloat (entrada('Digite sua primeira nota: '));
const nota2 = parseFloat (entrada('Digite sua segunda nota: ' ));
const média = parseFloat (nota1 + nota2) / 2;

if (média < 0 || média > 10 || isNaN(média)){
    if (média < 0) console.log ('A nota não pode ser menor que 0!');
    if (média > 10) console.log ('A nota não pode ser maior que 10!');
    if (isNaN(média)) console.log ('O valor deve ser numérico!');
}
else{
    if (média >= 7 ){
        console.log ('Aprovado');
     }
    else {
        console.log ('Reprovado');
     }
    }