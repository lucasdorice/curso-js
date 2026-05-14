const pessoa = {
    nome: `Lucas`,
    sobrenome: `Dorice`,
    idade: 19,
    endereco: {
        rua: `Avenida Paulista`,
        numero: 100
    }
};

const { nome, ...resto } = pessoa;
console.log(nome, resto);
