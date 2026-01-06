//window.alert(`Clique em "OK" para confimar.`);
//window.confirm(`Clique em "OK" ou em "Cancelar".`);
//window.prompt(`Digite alguma coisa:`)

let divi = window.document.getElementById(`texto`)
let confirmacao = confirm(`OK ou Cancelar?`)

if (confirmacao == true) {
    divi.innerHTML = `Voce clicou em OK`
} else {
    divi.innerHTML = `Voce clicou em cancelar`
}

let numero1 = Number(prompt(`Digite um número`));
let numero2 = Number(prompt(`Digite outro número`));
let soma = numero1 + numero2

divi.innerHTML += `<br> Voce digitou os numeros: ${numero1} e ${numero2}`
divi.innerHTML += `<br> A soma entre ${numero1} e ${numero2} é: ${soma}`