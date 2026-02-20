console.log(10 > 5); // true
console.log(`--//--`);

const expressaoComparacao1 = 10 > 5;

console.log(expressaoComparacao1); // true
console.log(`--//--`);

console.log(5 > 3, "- maior que (>)"); // true
console.log(5 > 8, "- maior que (>)"); // false
console.log(`--//--`);

console.log(6 >= 4, "- maior que ou igual a (>=)"); // true
console.log(6 >= 6, "- maior que ou igual a (>=)"); // true
console.log(6 >= 7, "- maior que ou igual a (>=)"); // false
console.log(`--//--`);

console.log(2 < 10 + "- menor que (<)"); // true
console.log(6 < 3, "- menor que (<)"); // false
console.log(`--//--`);

console.log(3 <= 10, "- menor que ou igual a (<=)"); // true
console.log(3 <= 3, "- menor que ou igual a (<=)"); // true
console.log(3 <= 2, "- menor que ou igual a (<=)"); // false
console.log(`--//--`);

const numero1 = 7;
const numero2 = 8;
const expressaoComparacao2 = numero1 < numero2;

console.log(expressaoComparacao2);
console.log(`--//--`)

console.log(10 == 10, "- igualdade (==)"); // true *não utilizar
console.log(10 == 11, "- igualdade (==)"); // false *não utilizar
console.log(`--//--`)

console.log(10 == '10', "- igualdade (==)"); // true *não utilizar
console.log(10 === '10', "- igualdade estrita (===)"); // false

console.log(10 != '10', "- diferente (!=)"); // false *não utilizar
console.log(10 !== '10', "- diferente estrito (!==)"); // true
console.log(`--//--`);

console.log(5 === 5, "- igualdade estrita (===)"); // true
console.log(15 === 14, "- igualdade estrita (===)"); // false
console.log(`--//--`);

console.log(38 != 45, "- diferente (!=)"); // true *não utilizar
console.log(25 != 25, "- diferente (!=)"); // false *não utilizar
console.log(`--//--`);

console.log(8 !== 9, "- diferente estrito (!==)"); // true
console.log(14 !== 14, "- diferente estrito (!==)"); // false

