const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use(routes);


app.listen(3000, ()=>{
    console.log('acessar http://localhost:3000')
    console.log('O servidor esta sendo executado na porta 3000');
});

