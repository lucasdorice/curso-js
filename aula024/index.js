const tresHoras = 60 ** 2 * 3 * 1000; //60 ** 2 * 3 * 1000
const umDia = 60 ** 2 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);

console.log(data.toString());

// --//--

const data1 = new Date(2019, 3); // ano, mês, dia, hora, minuto, segundo, milésimo

console.log(data1.toString());

// --//--

const data2 = new Date(`2026-04-12 16:40:00`);

console.log(data2.toString());
console.log(`Dia`, data2.getDate());
console.log(`Mês`, data2.getMonth());
console.log(`Ano`, data2.getFullYear());
console.log(`Hora`, data2.getHours());
console.log(`Minutos`, data2.getMinutes());
console.log(`Segundos`, data2.getSeconds());
console.log(`Milissegundos`, data2.getMilliseconds());
console.log(`Dia da semana`, data2.getDay());

// --//--
const data3 = new Date(1776027198494)

console.log(Date.now())
console.log(data3.toString())

// --//--

function zeroAEsquerda (numero) {
    return numero >= 10 ? numero : `0${numero}`
}

function converterData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes()); 
    const segundos = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data4 = new Date();
const dataConvertida = converterData(data4);

console.log(dataConvertida);





