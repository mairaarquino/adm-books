const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../db');

class Books extends Model {}

Books.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
        sequelize,
        modelName: 'books',
    })

function createBook(name, author, year) {
    return Books.create({
        name,
        author,
        year,
    }).then(book => {
        return { created: true };
    }).catch(err => console.log(err));
}

function readBooks() {
    return Books.findAll().then(books => JSON.stringify(books, null, 4))
}

function editBook(idNumber, name, author, year) {
    return Books.update({ name, author, year}, { where: { id: idNumber} }).then(() => {});
}

function deleteBook(id) {
    return Books.destroy({ where: { id: id } });
}

module.exports = { createBook, readBooks, editBook, deleteBook };