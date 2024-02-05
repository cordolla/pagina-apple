const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const imagemPrincipal = document.getElementById('imagem-visualizacao');
const nomePequeno = document.getElementById('nome-cor-selecionada');

const azulInverno = {
    nome: 'azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const estelar = {
    nome: 'estelar',
    pasta: 'imagens-estelar'
};

const meiaNoite = {
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite'
};

const rosaClaro = {
    nome: 'rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const cores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const tamanhos = ['41mm','45mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/'+ cores[corSelecionada].pasta +'/imagem-'+ imagemSelecionada +'.jpeg';
}

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = 'Pulseira loop esportiva '+ cores[corSelecionada].nome +' para caixa de ' + tamanhos[tamanhoSelecionado];
    if(tamanhos[tamanhoSelecionado] === '41mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarProduto() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = 'Pulseira loop esportiva '+ cores[corSelecionada].nome +' para caixa de ' + tamanhos[tamanhoSelecionado];
    imagemPrincipal.src = './imagens/opcoes-cores/'+ cores[corSelecionada].pasta +'/imagem-'+ imagemSelecionada +'.jpeg';
    nomePequeno.innerText = 'Cor - ' + cores[corSelecionada].nome
    document.getElementById('0-imagem-miniatura').src = './imagens/opcoes-cores/'+ cores[corSelecionada].pasta +'/imagem-0.jpeg';
    document.getElementById('1-imagem-miniatura').src = './imagens/opcoes-cores/'+ cores[corSelecionada].pasta +'/imagem-1.jpeg';
    document.getElementById('2-imagem-miniatura').src = './imagens/opcoes-cores/'+ cores[corSelecionada].pasta +'/imagem-2.jpeg';
}