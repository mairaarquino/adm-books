const express = require('express');
const books = require('./controllers/books');

var app = express();

app.get("/", (req, res) => books.readBooks(req, res));
app.post("/new", (req, res) => books.createBook(req, res ));
app.patch("/edit", (req, res) => books.editBook(req, res));
app.delete("/delete", (req, res) => books.deleteBook(req, res));
app.patch("/status", (req, res) => books.changeStatus(req, res));
app.get("/status", (req, res) => books.readStatus(req, res));

app.listen(3000, function (){
    console.log("Server listening on port 3000");
})