const elementos = [
    {tag: `p`, texto: `Frase 1`},
    {tag: `div`, texto: `Frase 2`},
    {tag: `footer`, texto: `Frase 3`},
    {tag: `section`, texto: `Frase 4`},
];

const [{tag: tagP, texto: frase1}, {tag: tagDiv, texto: frase2}, {tag: tagFooter, texto: frase3}, {tag: tagSection, texto: frase4}] = elementos;
const tags = [tagP, tagDiv, tagFooter, tagSection];
const frases = [frase1, frase2, frase3, frase4];
const div = document.createElement(tagDiv);
const divConteudo = document.querySelector(`div.conteudo`);

for (let i = 0; i < tags.length; i++) {
    const tag = document.createElement(tags[i]);
    const divConteudo = document.getElementsByTagName(`div`)[2];
    div.appendChild(tag);
    tag.innerHTML = frases[i];
}



// const container = document.querySelector(`div.conteudo`);
// const div = document.createElement(`div`);
// const p = document.createElement(`p`);

// div.appendChild(p);
// container.appendChild(div);



