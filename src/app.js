const express = require('express');
const config = require('./config/');
const consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

consign()
  .include('src/routes.js')
  .into(app);

app.listen(config.PORT, function (){
    console.log(`Server listening on port: ${config.PORT}`);
});