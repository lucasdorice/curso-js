const h1 = document.querySelector(`div.conteudo h1`);
const data = new Date();

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function  getDiaSemanaTexto(diaSemana) {
    const dias = [`domingo`, `segunda-feira`, `terça-feira`, `quarta-feira`, `quinta-feira`, `sexta-feira`, `sábado`];
    return dias[diaSemana]
}

function getNomeMes(numeroMes) {
    const meses = [`janeiro`, `fevereiro`, `março`, `abril`, `maio`, `junho`, `julho`, `agosto`, `setembro`, `outubro`, `novembro`, `dezembro`];
    return meses[numeroMes];
}

function criaData(data) {
    const numeroDia = data.getDate();
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    const nomeAno = data.getFullYear();
    const horas = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());

    return `${nomeDia}, ${numeroDia} de ${nomeMes} de ${nomeAno} ${horas}:${minutos}`;
}


h1.innerHTML = criaData(data);

// const h1 = document.querySelector(`div.conteudo h1`);
// const data = new Date();

// h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });