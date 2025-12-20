/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = `Luiz Otávio`;
const sobrenome = `Miranda`;
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let indiceMassaCorporal; // peso / (altura * altura)
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
const anoAtual = new Date().getFullYear();
let anoNascimento;
anoNascimento = anoAtual - idade;

/*
console.log(nome, sobrenome, `tem`, idade, `anos, pesa`, peso, `kg`);
console.log(`tem`, alturaEmM, `de altura e seu IMC é de`, indiceMassaCorporal);
console.log(nome, `nasceu em`, anoNascimento)
*/

/*
console.log(nome + ` ` + sobrenome + ` tem ` + idade + ` anos, pesa ` + peso + ` kg, tem ` + alturaEmM + ` e seu IMC é de ` + indiceMassaCorporal + `. ` + nome + ` nasceu em ` + anoNascimento + `.`)
*/

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}. ${nome} nasceu em ${anoNascimento}.`);

