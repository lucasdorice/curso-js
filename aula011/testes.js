let string1 = "Eu sou \"rico\"";
console.log(string1);

let string2 = `Barra invertida (\\)`;
console.log(string2);

//             01234
let string3 = `texto`;
console.log(string3[1]); // e
console.log(string3.charAt(1)); // e

let string4 = `conca`;
console.log(string4.concat(`tenação`));

//             01234
let string5 = `texto`;
console.log(string5.indexOf(`texto`)); // 0

//             0123456789
let string6 = `texto texto`;
console.log(string6.indexOf(`texto`, 5)); // 6
console.log(string6.lastIndexOf(`texto`)); // 6
console.log(string6.lastIndexOf(`texto`, 5)); // 0

let string7 = `um`;
console.log(string7.replace(`um`, `outra`));

//             0123456789
let string8 = `O rato roeu a roupa do rei de roma.`;
console.log(string8.length);
console.log(string8.slice(2, 6)); // rato
console.log(string8.slice(-5)); // roma.
console.log(string8.slice(-5, -1)); // roma
console.log(string8.substring(string8.length - 5, string8.length - 1)) // roma
console.log(string8.split(` `));
console.log(string8.split(`r`));
console.log(string8.split(`r`, 2));
console.log(string8.toUpperCase());
console.log(string8.toLowerCase());






