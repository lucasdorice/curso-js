//               0       1        2
const alunos = [`Luiz`, `Maria`, `João`];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos[0] = `Lucas`;

console.log(alunos); // [`Lucas`, `Maria`, `João`]

alunos[3] = `Bruno`;

console.log(alunos); // [`Lucas`, `Maria`, `João`, `Bruno`]

console.log(alunos.length);

alunos[alunos.length] = `Claudia`;

console.log(alunos); // [`Lucas`, `Maria`, `João`, `Bruno`, `Claudia`]

alunos.push(`Otávio`);

console.log(alunos); // [`Lucas`, `Maria`, `João`, `Bruno`, `Claudia`, `Otávio`]

alunos.unshift(`Vitor`);

console.log(alunos); // [`Vitor`, `Lucas`, `Maria`, `João`, `Bruno`, `Claudia`, `Otávio`]

alunos.pop();

console.log(alunos); // [`Vitor`, `Lucas`, `Maria`, `João`, `Bruno`, `Claudia`]

const removidoFinal = alunos.pop();

console.log(removidoFinal); // Claudia

console.log(alunos); // [`Vitor`, `Lucas`, `Maria`, `João`, `Bruno`]

const removidoComeco = alunos.shift();

console.log(removidoComeco); // Vitor

console.log(alunos); // [`Lucas`, `Maria`, `João`, `Bruno`]

delete alunos[1];

console.log(alunos);

console.log(alunos[1]); // undefined

alunos.push(`Luiz`);

alunos[1] = `Douglas`;

console.log(alunos); // [ 'Lucas', 'Douglas', 'João', 'Bruno', 'Luiz' ]

console.log(alunos.slice(0, 3)); // [ 'Lucas', 'Douglas', 'João' ]

console.log(alunos.slice(0, -1)); // [ 'Lucas', 'Douglas', 'João', 'Bruno' ]

console.log(alunos instanceof Array); // true




