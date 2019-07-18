const express = require('express');
const config = require('./config/');
const consign = require('consign');

var app = express();

consign()
  .include('src/routes.js')
  .into(app)

app.listen(config.PORT, function (){
    console.log(`Server listening on port: ${config.PORT}`);
});