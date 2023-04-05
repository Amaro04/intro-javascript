/*
 Criar um programa que receba uma nota de 0 a 10 e retorne aprovado caso a nota seja maior que 7
*/

const entrada = require('prompt-sync')();

const notaTxT = entrada('Digite a nota: ');
const nota = parseFloat(notaTxT)

if (nota < 0 || nota > 10 || isNaN(nota)){
    if (nota < 0) console.log('A nota não pode ser menor que 0!');
    if (nota > 10) console.log('A nota não pode ser maior que 10!');
    if (isNaN(nota)) console.log('O valor deve ser numérico!');
 }
else{
if (nota >= 7 ){
    console.log('Apovado');
 }
else {
    console.log('Reprovado');
 }
}