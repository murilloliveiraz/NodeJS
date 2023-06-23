require('dotenv').config();

//Express
const express = require('express');
const app = express();

//Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Conectei a base de dados');
        app.emit('Pronto');
    })
    .catch(e => console.log(e));

// salvar cookies durante a sessão
const session = require('express-session');

// salvar as sessoés no banco de dados
const MongoStore = require('connect-mongo');

//mensagens flash
const flash = require('connect-flash');

// rotas da nossa aplicacao
const routes = require('./routes')

//caminhos
const path = require('path');

//seguranca do express
const helmet = require('helmet');

// tokens de formulario
const csrf = require('csurf');

// Middlewares 
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');

// o app vai usar o helmet
app.use(helmet());

// permite postar formularios
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//permite acessar arquivos estaticos diretamente
app.use(express.static(path.resolve(__dirname, 'public')));

//configurações da sessão
const sessionOptions = session({
    secret: 'eae murillo',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

//arquivos que vão ser renderizados
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//usa o csrf
app.use(csrf());

//chama os middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

//chama as rotas
app.use(routes);

//liga o servidor
app.on('Pronto', () => {
        app.listen(3000, ()=>{
        console.log('acessar http://localhost:3000')
        console.log('O servidor esta sendo executado na porta 3000');
    });
})

