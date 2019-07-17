const assert = require('chai').assert;

const fixtureBook = require('./book-fixture');
const books = require('../src/models/books');

describe('Testing Crud', function() {
    it('should create a book', async function () {
        const { name, author, year } = fixtureBook;
        const response = await books.createBook(name, author, year);

        assert.deepEqual(response, { created: true });
    });
});