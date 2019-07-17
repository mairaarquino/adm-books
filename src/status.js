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
            status = 'DISPONIVEL'
            break;
        case 2:
            status = 'EMPRESTADO';
            break;
        default:
            break;
    }

    return status;
}

module.exports = { statusToCode, codeToStatus };