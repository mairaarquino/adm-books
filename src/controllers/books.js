const books = require('../models/books');
const handler_status = require('./statuses');

async function createBook(req, res) {
    const name = req.headers.name;
    const author = req.headers.author;
    const year = req.headers.year;

    const response = JSON.parse(await books.createBook(name, author, year));
    res.status(200).send({ created: response});
}

async function readBooks(req, res) {
    const books_response = await books.readBooks();

    res.status(200).send(JSON.parse(books_response));
}

async function editBook(req, res) {
    const id = req.query.id;
    const name = req.headers.name;
    const author = req.headers.author;
    const year = req.headers.year;

    const response = await books.editBook(id, name, author, year);
    res.status(200).send({ update: response});
}

async function deleteBook(req, res) {
    const id = req.query.id;

    const response = JSON.parse(await books.deleteBook(id));
    res.sendStatus(200).send({ deleted: response});
}

async function changeStatus(req, res) {
    const id = req.query.id;
    const status = req.headers.status;

    const book = JSON.parse(await books.changeStatus(id, readStatus(status)));

    res.sendStatus(200).send(book);
}

async function readStatus(req, res) {
    const id = req.query.id;

    var book = JSON.parse(await books.readStatus(id));

    res.status(200).send(book);
}

module.exports = {
    createBook,
    readBooks,
    editBook,
    deleteBook,
    changeStatus,
    readStatus
};