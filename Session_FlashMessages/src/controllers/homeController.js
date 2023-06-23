exports.paginaInicial = (req, res) => { 
    res.session.usuario = {nome: 'Murillo', logado: true};
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};