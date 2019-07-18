const books = require('../models/books');
const handler_status = require('../status');

async function createBook(req, res) {
    const name = req.headers.name;
    const author = req.headers.author;
    const year = req.headers.year;

    res.status(200).send(await books.createBook(name, author, year));
}

async function readBooks(req, res) {
    const books_response = JSON.parse(await books.readBooks());

    res.status(200).send(books_response[0]);
}

async function editBook(req, res) {
    const id = req.query.id;
    const name = req.headers.name;
    const author = req.headers.author;
    const year = req.headers.year;

    res.status(200).send(await books.editBook(id, name, author, year));
}

async function deleteBook(req, res) {
    const id = req.query.id;

    res.sendStatus(200).send(await books.deleteBook(id));
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

    const final_status = handler_status.codeToStatus(book.status);

    const { name } = book;

    const final_book = {
        name, 
        status: final_status
    };

    res.status(200).send(final_book);
}

module.exports = { 
    createBook, 
    readBooks, 
    editBook, 
    deleteBook, 
    changeStatus, 
    readStatus
};