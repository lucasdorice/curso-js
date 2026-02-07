function apresentacao (nome) {
    return `Olá, meu nome é ${nome}`
}

const retornoSalvo = apresentacao(`Lucas`);
console.log(retornoSalvo);
console.log(`--//--`);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
    // console.log(`Olá, mundo!`);
}

const resultado = soma(2, 2);
console.log(resultado)
console.log(`--//--`);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado2 = soma(4);
console.log(resultado2);
console.log(`--//--`);

const raiz = function (numero) {
    return numero ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(`--//--`);

const arrowFunction = (numero) => {
    return numero ** 0.5; 
};

console.log(arrowFunction(36));
console.log(arrowFunction(4));
console.log(arrowFunction(49));
console.log(`--//--`);

const arrowFunction2 = (numero) => numero ** 0.5;

console.log(arrowFunction(36));
console.log(arrowFunction(4));
console.log(arrowFunction(49));
console.log(`--//--`);

const arrowFunction3 = numero => numero ** 0.5;

console.log(arrowFunction(36));
console.log(arrowFunction(4));
console.log(arrowFunction(49));
console.log(`--//--`);


