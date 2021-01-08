var express = require('express');
var consign = require('consign');

var ava = express();
ava.set('view engine', 'ejs');
ava.set('view', '././ava/views');

consign()
.include('./ava/routes')
.then('././ava/config/database.js')
.then('././ava/models')
.into(ava);

module.exports = ava;
