exports.paginaInicial = (req, res) => { 
    // console.log(req.session.usuario);
    // req.flash('info', `${req.session.nome}`)
    // req.flash('error', 'erro')
    // req.flash('sucess', 'sucessooo meu faixa')
    // console.log(req.flash('info'), req.flash('sucess'), req.flash('error'))
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};