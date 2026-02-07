/*
const pessoa1 = {
    nome: `Lucas`,
    sobrenome: `Dorice`,
    idade: 19
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const pessoa2 = {
    nome: `Vitor`,
    sobrenome: `Dorice`,
    idade: 17
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
*/

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa(`Lucas`, `Dorice`, 19);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const pessoa2 = criaPessoa(`Vitor`, `Dorice`, 17);
const pessoa3 = criaPessoa(`Alex`, `Gomes`, 49);
const pessoa4 = criaPessoa(`Vanessa`, `Silva`, 47);
const pessoa5 = criaPessoa(`Vaneide`, `Solange`, 62);

function criaPessoa2 (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa6 = {
    nome: `Lucas`,
    sobrenome: `Dorice`,
    idade: 19,
    
    fala() {
        console.log(`Olá meu nome é ${this.nome} e minha idade atual é ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();