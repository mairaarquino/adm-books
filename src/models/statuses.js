const Sequelize = require("sequelize");
const Model = Sequelize.Model;

const sequelize = require('../config/db');
const books = require('./books');

class Statuses extends Model {}

Statuses.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
        sequelize,
        modelName: 'statuses',
    });

    Statuses.hasMany(books.Books)

function createStatus(status) {
    // Statuses.sync({ force: true }).then(() => {

    return Statuses.create({ description: status }).then(status => { { created: true } }).catch(err => console.log(err));
    // });
}

function searchAllBooksByDescription(description) {
    return Statuses.findAll({ include: [{
        model: books.Books,
    }], where: { description: description }}).then(status => JSON.stringify(status, null, 4));
}

module.exports = {
    Statuses,
    createStatus,
    searchAllBooksByDescription,
}