let entrada = require('prompt-sync')();
 console.log('Programa que calcula a média de três idades diferentes');
  let nome1 = entrada('Digite o primeiro nome: ');
  let idade1 = parseInt(entrada('Digite a idade: '));
  let nome2 = entrada('Digite o segundo nome: ');
  let idade2 = parseInt(entrada('Digite a idade:'));
  let nome3 = entrada('Digite o terceiro nome: ');
  let idade3 = parseInt(entrada('Digite a idade:'));
  let soma = idade1 + idade2 + idade3;
  let divisão = soma / 3;
  console.log (+ soma);
  console.log (' A média entre as 3 idades é de: ' + divisão);
