const express = require('express');
const books = require('./books');

var app = express();

app.get("/", (req, res) => books.readBooks(req, res));
app.post("/newBook", (req, res) => books.createBook(req, res ));
app.patch("/edit", (req, res) => books.editBook(req, res));
// app.delete("/delete",(req, res) => )

app.listen(3000, function (){
    console.log("Server listening on port 3000");
})