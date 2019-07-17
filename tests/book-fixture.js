const faker = require('faker');

module.exports = {
    name: faker.name.firstName(),
    author: faker.name.firstName(),
    year: Math.floor(Math.random() * 10000) + 1,
}