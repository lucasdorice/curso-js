const pessoa = {
    nome: `Lucas`,
    idade: 19,
    endereco: {
        rua: `Av. Paulista`,
        numero: 180
    }
};
const {nome = `Desconhecido`, idade: idadePessoa, endereco: {rua, numero}} = pessoa;

console.log(nome, idadePessoa, rua, numero);

const pessoa1 = {
    nome1: `Vitor`,
    idade1: 17,
    endereco1: {
        rua1: `Av. Brigadeiro Faria Lima`,
        numero1: 81
    }
};
const {nome1 = `Desconhecido`, ...resto} = pessoa1;

console.log(nome1);
console.log(resto);