function meuEscopo () {
    const formulario = window.document.querySelector(`form#formulario`); //Capturando o formulario.

    formulario.addEventListener(`submit`, function (e) { //Espectando o evento de enviar.
        e.preventDefault(); //Parando o envio
        const inputPeso = e.target.querySelector(`input#input-peso`); //Capturando o input de peso.
        const inputAltura = e.target.querySelector(`input#input-altura`); //Capturando o input de altura.
        const peso = Number(inputPeso.value); //Convertendo e pegando o valor do input de peso.
        const altura = Number(inputAltura.value); //Convertendo e pegando o valor do input de altura.
        
        if (!peso) { //Se peso tiver um valor falso (falsy)
            setResultado(`Peso inválido!`, false); //É retornado dois parametros para a função setResultado, uma mensagem e o valor falso.
            return; //E finaliza a função.
        } 

        if (!altura) { //Se altura tiver um valor falso (falsy)
            setResultado(`Altura inválida`, false); //É retornado dois parametros para a função setResultado, uma mensagem e o valor falso.
            return; //E finaliza a função.
        }

        const imc = getImc(peso, altura); //Uma variavel que chama a função getImc e entrega para ela os parametros de peso e altura.
        const nivelImc = getNivelImc(imc); //Uma variavel que chama a função getNivelImc e entrega para ela o parametro do imc.
        const msg = `Seu IMC é ${imc} (${nivelImc})`; //Uma variavel que monta uma mensagem mostrando o imc e o nivel do imc.

        setResultado(msg, true); //Uma chamada para a função setResultado, que envia como parametros, a mensagem criada anteriormente e o valor true, indicando que o peso e a altura estao corretos.
    });

    function getNivelImc (imc) { //Uma função que de acordo com o valor do imc define o nível dele.
        const nivel = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`,`	Obesidade grau 2`, `Obesidade grau 3`]; //Um array com os níveis de imc.

        if (imc >= 39.9) return nivel[5]; //Estrutura condicional if que retorna como valor da função o nível do imc, de acordo com o valor do imc.
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    function getImc (peso, altura) { //Função que recebe dois valores como parametro para calcular o imc, o peso e a altura.
        const imc = peso / altura ** 2; //Variavel que calcula o valor do imc de acordo com os parametro recebidos.
        return imc.toFixed(2); //O retorno do calculo do imc com duas casas decimais.
    }

    function criaP () { //Uma função que cria paragrafos
        const p = document.createElement(`p`); //Uma variavel para criar paragrafos
        return p; //enviando o valor da variavel para outra funcao
    }

    function setResultado (msg, isValid) { //Função que exibe a mensagem na tela e define se será valida ou invalida
        const resultado = window.document.querySelector(`div#resultado`); //Capturando a div
        resultado.innerHTML = ``; //Limpa o texto da div

        const p = criaP(); //Uma variavel que cria um paragrafo através da funçao criaP

        if (isValid) { //Estrutura condicional que valida o imc e retorna uma classe para o paragrafo
            p.classList.add(`paragrafo-resultado`); //Adiciona a classe paragrafo-resultado ao paragrafo
        } else {
            p.classList.add(`bad`); //Adiciona a classe bad ao paragrado
        }

        p.innerHTML = msg; //Exibe a mensagem recebida na tela.
        resultado.appendChild(p) //Cria de fato o paragrafo.
    }

}

meuEscopo();