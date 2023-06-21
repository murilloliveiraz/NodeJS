const dog = require('./z/mod2')

const chiuaua = new dog('chiuaua');

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', '..'))
chiuaua.latir();
console.log(__filename)
console.log(__dirname)