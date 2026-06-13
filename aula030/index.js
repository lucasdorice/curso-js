const frutas = [`maça`, `banana`, `manga`, `uva`];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

for (let index in frutas) {
    console.log(frutas[index])
}

console.log()

const pessoa = {
    nome: `Lucas`,
    sobrenome: `Dorice`,
    idade: 19
};

for (let key in pessoa) {
    console.log(key, pessoa[key])
}
