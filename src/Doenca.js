const Sequelize = require('sequelize');
const sequelize = require('./db.js');

const schema = 'doenca';

class Doenca extends Sequelize.Model {}
Doenca.init({
    id: Sequelize.INTEGER,
    nome: Sequelize.STRING,
    sintomas: Sequelize.ARRAY,
    tratamento: Sequelize.STRING
}, {sequelize, modelName: 'doenca', schema});

sequelize.sync();
module.exports = Doenca;