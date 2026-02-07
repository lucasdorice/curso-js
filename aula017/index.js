let nome = `Lucas`;
nome = `Luiz` // mudando o valor da variável, não o dado.

console.log(nome); 

let aPri = `A`;
let bPri = aPri; // Cópia

console.log(aPri, bPri);

aPri = `Outra coisa`;

console.log(aPri, bPri);

let aRef = [1, 2, 3];
let bRef = aRef;

console.log(aRef, bRef);

aRef.push(4);

console.log(aRef, bRef);

bRef.pop();

console.log(aRef, bRef);

let cRef = bRef;

cRef.push(`Lucas`);

console.log(aRef, bRef, cRef);

let aRefCopia = [1, 2, 3];
let bRefCopia = [...aRefCopia];

console.log(bRefCopia);

aRefCopia.push(4);

console.log(aRefCopia ,bRefCopia);

const a = {
    nome: `Lucas`,
    idade: 19,
    genero: `Masculino`
}
const b = a;

console.log(a, b);

a.idade = 20;

console.log(a, b);

const aCopia = { nome: `Lucas`, idade: 20 }
const bCopia = {...aCopia};

console.log(aCopia, bCopia);

aCopia.idade = 21;

console.log(aCopia, bCopia);
