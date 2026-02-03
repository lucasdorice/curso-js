/*
const numero = Number(prompt(`Digite um número:`));

window.document.body.innerHTML = `<h1>Seu número é ${numero}</h1>`;
window.document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5}<br>`;
window.document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br>`;
window.document.body.innerHTML += `É NaN: ${Number.isNaN(numero)}<br>`;
window.document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br>`;
window.document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br>`;
window.document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br>`;
*/

const numero = Number(prompt(`Digite um número:`));
const numeroTitulo = window.document.getElementById(`numero-titulo`);
const texto = window.document.getElementById(`texto`);

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;