// TIPOS PRIMITIVOS: STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, BIGINT E SYMBOL.

/*VALOR PRIMITIVO = CÓPIA*/

let aValorPrimitivo = 10;
let bValorPrimitivo = aValorPrimitivo;

console.log(aValorPrimitivo, bValorPrimitivo);

aValorPrimitivo = 11;

console.log(aValorPrimitivo, bValorPrimitivo);
console.log(`--//--`)

// TIPOS POR REFERÊNCIA: ARRAY, OBJECT E FUNCTION.

/*VALOR POR REFERÊNCIA = MESMO LOCAL NA MEMÓRIA*/

const aValorReferencia = [`Lucas`, `Vitor`];
const bValorReferencia = aValorReferencia;

console.log(aValorReferencia, bValorReferencia);

aValorReferencia.push(`Alex`);

console.log(aValorReferencia, bValorReferencia);

bValorReferencia[2] = `Vanessa`;

console.log(aValorReferencia, bValorReferencia);


const aValorReferenciaObjeto = {
    nome: `Lucas`,
    idade: 19,
    genero: `Masculino`
}
const bValorReferenciaObjeto = aValorReferenciaObjeto;

console.log(aValorReferenciaObjeto, bValorReferenciaObjeto);

aValorReferenciaObjeto.nome = `Vitor`;

console.log(aValorReferenciaObjeto, bValorReferenciaObjeto);

bValorReferenciaObjeto.idade = 17;

console.log(aValorReferenciaObjeto, bValorReferenciaObjeto);
console.log(`--//--`)

/*COPIANDO VALOR POR REFERÊNCIA*/

const aCopiaValorReferencia = [`Alex`, `Vanessa`];
const bCopiaValorReferencia = [...aCopiaValorReferencia];

console.log(aCopiaValorReferencia, bCopiaValorReferencia);

aCopiaValorReferencia.push(`Lucas`);

console.log(aCopiaValorReferencia, bCopiaValorReferencia);


const aCopiaValorReferenciaObjeto = {
    modelo: `Livina`,
    ano: 2012
}
const bCopiaValorReferenciaObjeto = {...aCopiaValorReferenciaObjeto};

console.log(aCopiaValorReferenciaObjeto, bCopiaValorReferenciaObjeto);

aCopiaValorReferenciaObjeto.modelo = `Fox`;

console.log(aCopiaValorReferenciaObjeto, bCopiaValorReferenciaObjeto);

