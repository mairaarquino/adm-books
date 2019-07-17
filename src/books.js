const books = require('./models/books');

async function createBook(req, res) {
    const name = req.headers.name;
    const author = req.headers.author;
    const year = req.headers.year;

    res.status(200).send(await books.createBook(name, author, year));
}

async function readBooks(req, res) {
    res.status(200).send(await books.readBooks());
}

async function editBook(req, res) {
    const id = req.query.id;
    const name = req.headers.name;
    const author = req.headers.author;
    const year = req.headers.year;

    res.status(200).send(await books.editBook(id, name, author, year));
}

module.exports = { createBook, readBooks, editBook };