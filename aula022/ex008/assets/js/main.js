const formulario = window.document.querySelector(`form#formulario`);
const botaoCalcular = window.document.querySelector(`button#botao-calcular`)

formulario.addEventListener(`submit`, function(e) {
    e.preventDefault();
});

function calcular () {
    const peso = Number(window.document.querySelector(`input#input-peso`).value);
    const altura = Number(window.document.querySelector(`input#input-altura`).value);
    const calculoIMC = peso / (altura * altura);
    const resultado = window.document.querySelector(`div#resultado`);

    if (!peso) {
        resultado.innerHTML = `Peso inválido!`
        resultado.style.color = `red`;
        resultado.style.fontWeight = `bold`;
    } else if (!altura) {
        resultado.innerHTML = `Altura inválida!`
        resultado.style.color = `red`;
        resultado.style.fontWeight = `bold`;
    } else if (calculoIMC < 18.5) {
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Abaixo do peso)`;
    } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Peso normal)`;
    } else if (calculoIMC >= 25 && calculoIMC <= 29.9) {
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Sobrepeso)`;
    } else if (calculoIMC >= 30 && calculoIMC <= 34.9) {
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Obesidade grau 1)`;
    } else if (calculoIMC >= 35 && calculoIMC <= 39.9) {
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Obesidade grau 2)`;
    } else if (calculoIMC > 40) {
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Obesidade grau 3)`;
    }
}

botaoCalcular.addEventListener(`click`, calcular);

