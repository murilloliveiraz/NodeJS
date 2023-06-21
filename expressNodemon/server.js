const express = require('express');
const app = express();

//         criar    ler   atualizar   apagar
// CRUD -> CREATE   READ  UPDATE      DELETE
//         POST      GET   PUT        DELETE

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method = "POST">
        Nome : <input type="text" name="nome">
        <button>Envia Formulario</button>
        </form>
    `);
});

app.post('/', (req,res) => {
    res.send('Recebi o formularioexpress')
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entra em contanto')
})

app.listen(3000, ()=>{
    console.log('acessar http://localhost:3000')
    console.log('O servidor esta sendo executado na porta 3000');
});