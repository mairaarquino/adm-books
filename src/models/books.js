const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const statuses = require('../models/statuses');

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
    statusId: {
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
        }).then(book => { { created: true } }).catch(err => console.log(err));
    // });
}

function readBooks() {
    return Books.findAll().then(books => JSON.stringify(books, null, 4));
}

function editBook(idNumber, name, author, year) {
    return Books.update({ name, author, year}, { where: { id: idNumber} }).then(() => true);
}

function deleteBook(id) {
    return Books.destroy({ where: { id: id } });
}

async function changeBookStatusByDescription(id_livro, desc_status) {
    const statusId = await statuses.Statuses.findOne({attributes: ['id'],
     where: { description: desc_status }}).then(status => JSON.parse(status.id));

    return Books.update({ statusId }, { where: { id: id_livro }}).then(() => true);
}

// function readStatus(id) {
//     return Books.findAll({ status: id}).then(book => JSON.stringify(book, null, 2));
// }

module.exports = { 
    Books,
    createBook, 
    readBooks, 
    editBook, 
    deleteBook, 
    changeBookStatusByDescription
    // readStatus
};