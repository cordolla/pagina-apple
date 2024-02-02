const imagemVisualizacao = document.getElementById('imagem-visualizacao')

const azulInverno = {
    nome: 'azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const estelar = {
    nome: 'estelar',
    pasta: 'imagens-estelar'
}

const meiaNoite = {
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite'
}

const rosaClaro = {
    nome: 'rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagem-verde-cipreste'
}

const cores = [azulInverno, estelar, meiaNoite, rosaClaro, verdeCipreste]

let imagemSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+ imagemSelecionada +'.jpeg';


}