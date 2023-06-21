const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method = "POST">
        Nome : <input type="text" name="nome">
        <button>Envia Formulario</button>
        </form>
    `);
});

app.get('/testes/:iduser?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebook);
})

app.post('/', (req,res) => {
    res.send(`Recebi o formulario express, e os dados que voce enviou foram : ${req.body.nome}`)
});

app.listen(3000, ()=>{
    console.log('acessar http://localhost:3000')
    console.log('O servidor esta sendo executado na porta 3000');
});

