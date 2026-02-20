console.log(`Lucas Dorice` && 0 && `Luiz Otávio`); // 0

console.log(`Luiz` && true && `Lucas`); // Lucas

console.log(`Luiz` && true && NaN); // NaN

console.log(`Luiz` && `Maria`); // Maria

console.log(`Luiz` && false && `Maria`); // false

console.log(`Luiz` && 0 && `Maria`); // 0

console.log(`Luiz` && '' && `Maria`); // ''

console.log(`Luiz` && null && `Maria`); // null

console.log(`Luiz` && undefined && `Maria`); // undefined

console.log(`Luiz` && NaN && `Maria`); // NaN

function falaOi () {
    return `Oi`;
}

//const vaiExecutar = false; // 0, '' "" ``, null, undefined e NaN
const vaiExecutar = true;

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || `Lucas Dorice` || true);

/*
const corUsuario = null;
const corPadrao = corUsuario || `white`;

console.log(corPadrao);
*/

const corUsuario = `azul`;
const corPadrao = corUsuario || `white`;

console.log(corPadrao);

const a = 0;
const b = `false`;
const c = null;
const d = undefined;
const e = NaN;

console.log(a || b || c || d || e);
