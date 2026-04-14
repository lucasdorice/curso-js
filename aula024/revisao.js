const data = new Date();

console.log(data);
console.log(data.toString());
console.log(`--//--`);

const data1 = new Date(0);

console.log(data1.toString());
console.log(`--//--`);

const tresHoras = 60 ** 2 * 3 * 1000;
const data2 = new Date(0 + tresHoras);

console.log(data2.toString());
console.log(`--//--`);

const data3 = new Date(2026, 3, 12, 19, 48, 0, 999);

console.log(data3.toString());
console.log(`--//--`);

const data4 = new Date(2026, 3, 12, 19, 59, 60, 1000);

console.log(data4.toString());
console.log(`--//--`);

const data5 = new Date(2026, 3);

console.log(data5.toString());
console.log(`--//--`);

const data6 = new Date(`2026-04-12 19:55:00`);

console.log(data6.toString());
console.log(`--//--`);

const data7 = new Date()
const data7Convertida = data7.toString();

console.log(`Dia:`, data7.getDate());
console.log(`Mês:`, data7.getMonth());
console.log(`Ano:`, data7.getFullYear());
console.log(`Hora:`, data7.getHours());
console.log(`Minutos:`, data7.getMinutes());
console.log(`Segundos:`, data7.getSeconds());
console.log(`Milisegundos:`, data7.getMilliseconds());
console.log(`Dia da semana:`, data7.getDay());
console.log(`--//--`);

console.log(Date.now());
console.log(`--//--`);

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`
}

function converterData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data8 = new Date();
const dataHoje = converterData(data8);

console.log(dataHoje);
