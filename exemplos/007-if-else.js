 // Estruturas condicionais

 const entrada = require('prompt-sync')();

 let nome = entrada('Digite seu nome: ');
 let letra = nome.charAt(0).toLocaleLowerCase;

 let vogais = /[aeiou]/;

 if (vogais.test(letra)) {
     console.log('A 1ª letra do seu nome é uma vogal!');
 } else{
     console.log('A 1ª letra do seu nome é uma consoante!');
 }