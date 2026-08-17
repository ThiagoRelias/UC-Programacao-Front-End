function trocarCorDeFundo(color) {
    document.body.style.backgroundColor = color;
}

function trocarFonteTitulos(fontFamily) {
    const titulos = document.querySelectorAll('h1, h2');
    titulos.forEach(titulo => {
        titulo.style.fontFamily = fontFamily;
    });
}

function removerMetaInformacoes() {
    const metas = document.querySelectorAll('.meta');
    metas.forEach(meta => {
        meta.remove();
    });
}

function inserirEmojiNoPrimeiroParagrafo(emoji) {
    const artigos = document.querySelectorAll('article');
    artigos.forEach(artigo => {
        const primeiroParagrafo = artigo.querySelector('article > p');
        if (primeiroParagrafo) {
            const textoEmoji = document.createTextNode(emoji + ' ');
            primeiroParagrafo.insertBefore(textoEmoji, primeiroParagrafo.firstChild);
        }
    });
}

function inserirAvisoIA() {
    const containerListagem = document.querySelector('main');
    if (containerListagem) {
        const divAlerta = document.createElement('div');
        divAlerta.className = 'alert';

        const paragrafo = document.createElement('p');
        paragrafo.textContent = ' Atenção: os textos abaixos são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programção. Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.';

        divAlerta.appendChild(paragrafo);
        containerListagem.insertBefore(divAlerta, containerListagem.firstChild);
    }
}

trocarCorDeFundo('#f4f6f9');
trocarFonteTitulos('system-ui, -apple-system, sans-serif');
removerMetaInformacoes();
inserirEmojiNoPrimeiroParagrafo('📖');
inserirAvisoIA();
