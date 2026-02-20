console.log(true && true); // true
console.log(`--//--`);

console.log(true && true && true && true && true); // true
console.log(`--//--`);

console.log(true && false && true); // false
console.log(`--//--`);

const expressaoAnd = true && true;

console.log(expressaoAnd);
console.log(`--//--`);

const expressaoOr = true || false;

console.log(expressaoOr); //true
console.log(`--//--`);

const expressaoOr2 = false || true || false;

console.log(expressaoOr2); //true
console.log(`--//--`);

const usuario = `Lucas`;
const senha = `123456`;
const login = usuario === `Lucas` && senha === `123456`;

console.log(login);
console.log(`--//--`);

console.log(!true); // false
console.log(`--//--`);

console.log(!!true);

