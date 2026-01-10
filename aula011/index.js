let umaString = "Um \"texto\"";

console.log(umaString);

//           012345678910 
let texto = `um texto um`;

console.log(texto[4]);

console.log(texto.charAt(6));

console.log(texto.concat(` `, `em`, ` `, `um`, ` `,`lindo`, ` `, `dia`));

console.log(texto.indexOf('texto'));

console.log(texto.indexOf('um', 3));

console.log(texto.lastIndexOf('um'));

console.log(texto.lastIndexOf('um', 3));

console.log(texto.replace(`um`, `Outra`))

//            01234567
// negativos  87654321
let texto1 = 'um texto'

console.log(texto1.slice(3, 8));

console.log(texto1.slice(-5))

console.log(texto.slice(-8, -3))

console.log(texto.substring(texto.length - 8, texto.length - 3))

console.log(texto.split(' '));

let travaLingua = `O rato roeu a roupa do rei de roma`;

console.log(travaLingua.split('r'));

console.log(travaLingua.toUpperCase());
console.log(travaLingua.toLowerCase());




