/*
Crie um programa baseado no exemplo 12 que 
exiba a mensagem "Bem vindo" caso o usuário
digte a senha corretamente e "Usuario bloqueado"
caso o usuário erre a senha 3 vezes!
*/ 

const entrada = require('prompt-sync')();

const senha = '40028922';
let senhaDigitada = '';
let erros = -1;

do{
    erros++;

    if (erros >= 3){
        break;
    }
   senhaDigitada = entrada('Digite sua senha para entrar: ');
}
while (senha != senhaDigitada);

if (erros <3){
    console.log('Bem-Vindo!');
}
else{
    console.log('Você errou a senha 3 vezes, seu acesso foi negado!') 
}

