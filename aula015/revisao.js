/*FUNÇAO SEM RETORNO E SEM PARAMETROS*/

function saudacao () {
    console.log(`Olá, como vai?`);
}

saudacao(); // Olá, como vai?
console.log(`--//--`);

/*FUNÇAO SEM RETORNO E COM PARAMETROS*/

function saudacaoNome (nome) {
    console.log(`Olá ${nome}, como vai?`);
}

saudacaoNome(`Lucas`); // Olá Lucas, como vai?
console.log(`--//--`);

/*FUNÇAO COM RETORNO GENÉRICO*/

function saudacaoRetorno (nome) {
    console.log(`Olá ${nome}, como vai?`);
    return `Retorno genérico`
}

const retornoFuncao = saudacaoRetorno(`Alex`); // Olá Alex, como vai?
console.log(retornoFuncao); // Retorno genérico
console.log(`--//--`);

/*FUNÇAO COM RETORNO CONDIZENTE*/

function saudacaoRetorno2 (nome) {
    return `Olá ${nome}, como vai?`;
}

const retornoFuncao2 = saudacaoRetorno2(`Vanessa`);
console.log(retornoFuncao2); // Olá Vanessa, como vai?

function soma (x, y) {
    const resultado = x + y;
    return resultado; // -> O return é sempre a última linha da função.
    console.log(`Qualquer código após o return não funciona.`)
}

const resultado = soma(2, 2);
console.log(resultado); // 4
console.log(soma()); // NaN
console.log(`--//--`);

/*FUNÇAO COM RETORNO CONDIZENTE E PARAMETROS PRÉ-DEFINIDOS*/

function multiplicacao (x = 1, y = 2) {
    const resultado = x * y;
    return resultado;
}

const resultado2 = multiplicacao();
const resultado3 = multiplicacao(4);
console.log(resultado2); // 2
console.log(resultado3); // 8
console.log(`--//--`);

/*FUNÇAO DENTRO DE UMA VARIAVEL*/

const raiz = function (numero) {
    return numero ** 0.5;
};

console.log(raiz(49)); //  7
console.log(`--//--`);

/*ARROW FUNCTION*/

const potenciacao = (x, y) => {
    return x ** y;
};

console.log(potenciacao(4, 4)); // 256
console.log(`--//--`);

/*ARROW FUNCTION COM SÓ UMA LINHA DE CÓDIGO*/

const soma2 = (x, y) => x + y;

console.log(soma2(50, 50));
console.log(`--//--`);

/*ARROW FUNCTION COM SÓ UMA LINHA DE CÓDIGO E UM PARAMETRO*/

const raiz2 = x => x ** 0.5;

console.log(raiz(100));








