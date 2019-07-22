const statuses = require('../models/statuses');

function statusToCode(status) {
    var statusCode = 0;

    switch (status) {
        case 'DISPONIVEL':
            statusCode = 1;
            break;
        case 'EMPRESTADO':
            statusCode = 2;
            break;
        default:
            break;
    }

    return statusCode;
}

function codeToStatus(code) {
    var status = "";

    switch (code) {
        case 1:
            status = 'DISPONIVEL';
            break;
        case 2:
            status = 'EMPRESTADO';
            break;
        default:
            break;
    }

    return status;
}

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
    }
    res.status(200).send(final_response);   
}

module.exports = { 
    statusToCode, 
    codeToStatus,
    createStatus,
    searchAllBooksByDescription
};
