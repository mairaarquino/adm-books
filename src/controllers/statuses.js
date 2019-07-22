const statuses = require('../models/statuses');
const books = require('../models/books');

async function createStatus(req, res) {
    const status = req.query.status;

    const response = await statuses.createStatus(status);

    res.status(200).send(response);
}

async function searchAllBooksByDescription(req, res) {
    const desc = req.query.desc;

    const response = JSON.parse(await statuses.searchAllBooksByDescription(desc));
    const { id, description, books } = response[0];

    const final_response = {
        id,
        status: description,
        books,
    };
    res.status(200).send(final_response);   
}

async function changeStatusByDescription(req, res) {
    const id_livro = req.headers.id;
    const desc_status = req.headers.desc;

    const response = await books.changeBookStatusByDescription(id_livro, desc_status);
    res.status(200).send({ update: response});
}

module.exports = { 
    statusToCode, 
    codeToStatus,
    createStatus,
    searchAllBooksByDescription,
    changeStatusByDescription
};
