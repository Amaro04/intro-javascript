// o comando abaixo apresenta uma mensagem na tela
console.log('Olá estou programando em javascript');
/*
     comentário que ocupa mais
     de uma linha  
*/
// criação de variável do tipo texto
let nome = 'Gabriel Amaro Pereira';
// criação de variável do tipo numérico (inteiro)
let idade = 16;
// criação de variável do tipo numérico (decimal)
let altura = 1.72;
// criação de variável do tipo verdadeiro/falso
let trabalha = false; // true = verdadeiro | false = falso
// exemplo de variável de nome composto
let corFavorita = 'Cinza';
// exemplo de variável do tipo lista de valores
let cores_favoritas = ['Cinza', 'Preto', 'Azul'];
// exemplo de variável que armazena um objeto
let endereço = {'logradouro'      : 'Rua',
                'nome_logradouro' : 'Brasil',
                'número'          : '50 A',
                'bairro'          : 'Centro',
                'cidade'          : 'Tupã',
};
let covid;
let dengue = null;

console.log('Tipo da Variável: ' +  typeof(nome));
console.log('Nome: '             +  nome);


console.log('Tipo da Variável: ' +  typeof(idade));
console.log('Idade: '            +  idade);

console.log('Tipo da Variável: ' +  typeof(altura));
console.log('Altura: '           +  altura);

console.log('Tipo da Variável: ' +  typeof(trabalha));
console.log('Trabalha: '         +  trabalha);

console.log('Tipo da Variável: ' +  typeof(corFavorita));
console.log('Cor Favorita: '     +  corFavorita);

console.log('Tipo da Variavel: ' +  typeof(cores_favoritas));
console.log('Cores Favoritas: '  +  cores_favoritas [0] + ', ' + cores_favoritas[1] + ', ' + cores_favoritas[2]);

console.log('Tipo da Variável: ' +  typeof(endereço));
console.log('Endereço: '         +  endereço.logradouro + ' ' + endereço.nome_logradouro + ', ' + endereço.número + ' - ' + endereço.bairro + ' - ' + endereço.cidade);


console.log('Tipo da Variável: ' +  typeof(covid));
console.log('Covid: '            +  covid);


console.log('Tipo da Variável: ' +  typeof(dengue));
console.log('Dengue: '           +  dengue);