/*OBJETOS*/

const objeto = {

};

/*OBJETOS COM ATRIBUTOS*/

const carro1 = {
    modelo: `HB20`,
    ano: 2026
};

console.log(carro1.modelo);
console.log(carro1.ano);

const carro2 = {
    modelo: `Livina`,
    ano: 2015
};

console.log(carro2.modelo);
console.log(carro2.ano);
console.log(`--//--`)

/*FACTORY (FUNÇÃO QUE CRIA OBJETOS)*/

function criaCarro (modelo, ano) {
    return {
        modelo: modelo,
        ano: ano
    }
};

const carro3 = criaCarro(`Celta`, 2010);

console.log(carro3.modelo);
console.log(carro3.ano);
console.log(`--//--`);

/*FACTORY SIMPLIFICADA*/

function criaCarro2 (modelo, ano) {
    return { modelo, ano }
}

const carro4 = criaCarro2(`Fastback`, 2022);

console.log(carro4.modelo);
console.log(carro4.ano);
console.log(`--//--`);

/*OBJETOS COM MÉTODOS*/

const pessoa1 = {
    nome: `Lucas`,
    idade: 19,

    apresentacao () {
        console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    },

    incrementoIdade () {
        this.idade++;
    }
};

pessoa1.apresentacao();
pessoa1.incrementoIdade();
pessoa1.apresentacao();
pessoa1.incrementoIdade();
pessoa1.apresentacao();
pessoa1.incrementoIdade();



