const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const escreve = require('./modules/escrever');
const ler =  require('./modules/ler')

// const pessoas = [
//     {nome: 'joao'},
//     {nome: 'maria'},
//     {nome: 'antonio'},
//     {nome: 'leandro'}
// ];

// const json = JSON.stringify(pessoas, "", 2);
// escreve(caminhoArquivo, json);

async function lerarquivo(caminho){
    const dados = await ler(caminho);
    renderizadados(dados);
}

function renderizadados(dados){
    console.log(dados)
}

lerarquivo(caminhoArquivo)
    