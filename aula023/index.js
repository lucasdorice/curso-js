const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? `Usuário VIP` : `Usuário normal`;

/*
if (pontuacaoUsuario >= 1000) {
    console.log(`Usuário VIP`);
} else {
    console.log(`Usuário normal`);
}
*/

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || `Preto`;

console.log(nivelUsuario, corPadrao);

