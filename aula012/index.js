let numero1 = 1;
let numero2 = 2.5;

console.log(numero1.toString() + numero2); //12.5

//numero1 = numero1.toString();

let numero3 = 1500;

console.log(numero3.toString(2)); //10111011100

let numero4 = 10.123123423423;

console.log(numero4.toFixed(2)) //10.12

let numero5 = 10.25;

console.log(Number.isInteger(numero5)) //false

let notNumber = numero1 * `Olá`;

console.log(Number.isNaN(notNumber)); //true

let numero6 = 0.7;
let numero7 = 0.1;

//numero6 += numero7;
//numero6 = Number(numero6.toFixed(2));

numero6 = ((numero6 * 100) + (numero7 * 100)) / 100;

console.log(numero6)

