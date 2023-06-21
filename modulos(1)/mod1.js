const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' '+ sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Para exportar algo para dentro do objeto do node usamos "exports"
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

class Pessoa {
    constructor (nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

// o this referencia o "exports"
this.qualquerCoisa = 'O que eu quiser colocar';
