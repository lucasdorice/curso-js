let a = `a`;
let b = `b`;
let c = `c`;

console.log(a, b, c);

[a, b, c] = [1, 2, 3];

console.log(a, b, c);

const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c);

const letras = [`b`, `c`, `a`];
[a, b, c] = letras;

console.log(a, b, c);

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, quatro, cinco, ...resto] = numeros1;
const [primeiro, , terceiro, , quinto, , setimo, , nono] = numeros1;

console.log(um, dois, tres, quatro, cinco);
console.log(resto);
console.log(primeiro, terceiro, quinto, setimo, nono);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros2[0][2]); // 3

const [ , [ , numeroCinco]] = numeros2;

console.log(numeroCinco); // 5

const [lista1, lista2, lista3] = numeros2;

console.log(lista1[0]); // 1








