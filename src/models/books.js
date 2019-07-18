const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../config/db');

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
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
    }
}, {
        sequelize,
        modelName: 'books',
    });

function createBook(name, author, year) {
    // Books.sync({ force: true }).then(() => {
        return Books.create({
            name,
            author,
            year,
        }).then(book => {
            return { created: true };
        }).catch(err => console.log(err));
    // })
}

function readBooks() {
    return Books.findAll().then(books => JSON.stringify(books, null, 4));
}

function editBook(idNumber, name, author, year) {
    return Books.update({ name, author, year}, { where: { id: idNumber} }).then(() => {
        return { update: true };
    });
}

function deleteBook(id) {
    return Books.destroy({ where: { id: id } });
}

function changeStatus(id, status) {
    return Books.update({status}, { where: { id: id } }).then(() => {
        return { update: true };
    });
}

function readStatus(id) {
    return Books.findOne({ where: { id: id } }).then(book => JSON.stringify(book, null, 2));
}

module.exports = { 
    createBook, 
    readBooks, 
    editBook, 
    deleteBook, 
    changeStatus,
    readStatus
};