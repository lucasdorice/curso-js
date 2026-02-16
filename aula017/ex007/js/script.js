//formulario que ao enviar exibe os dados do input e salva os dados dentro de um array com varios objetos

function meuEscopo () {
    const formulario = document.querySelector(`form.formulario`);
    const resultado = document.querySelector(`div.resultado`);
    const pessoas = [];

    function enviarFormulario (evento) {
        evento.preventDefault();

        const nome = formulario.querySelector(`input.nome`).value;
        const sobrenome = formulario.querySelector(`input.sobrenome`).value;
        const peso = Number(formulario.querySelector(`input.peso`).value);
        const altura = Number(formulario.querySelector(`input.altura`).value);

        pessoas.push({nome, sobrenome, peso, altura});

        /*
        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });
        */
       
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`;
    }

    formulario.addEventListener(`submit`, enviarFormulario);
}

meuEscopo();