const books = require('./models/books');
const handler_status = require('./status');

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

async function deleteBook(req, res) {
    const id = req.query.id;

    res.sendStatus(200).send(await books.deleteBook(id));
}

async function changeStatus(req, res) {
    const id = req.query.id;
    const status = req.headers.status;

    res.sendStatus(200).send(await books.changeStatus(id, readStatus(status)));
}

async function readStatus(req, res) {
    const id = req.query.id;

    var book = JSON.parse(await books.readStatus(id));

    const final_status = handler_status.codeToStatus(book.status);

    const { name, author, year } = book;

    const final_book = {
        name, 
        author, 
        year, 
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