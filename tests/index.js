const assert = require('chai').assert;

const fixtureBook = require('./book-fixture');
const books = require('../src/models/books');


describe('Testing Crud', function() {
    it('should create a book', async function () {
        const { name, author, year } = fixtureBook;
        const response = await books.createBook(name, author, year);

        assert.deepEqual(response, { created: true });
    });
    it('should edit a book', async function () {
        const response = await books.editBook(20);

        assert.deepEqual(response, { update: true });
    });
    it('should deletes a book', async function () {
        const response = await books.deleteBook(20);

        assert.deepEqual(response, 0);
    })
});

describe('Testing Status', function() {
    it('should read status from a book', async function() {
        const { author, name, status, year } = fixtureBook;

        const response = JSON.parse(await books.readStatus(1));

        assert.deepEqual(response, { author, name, status, year });
    });
});