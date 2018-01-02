'use strict';

var express = require('express');

var PORT = 8888;

var app = express();
app.get('/wen/rest', function (req, res) {
  res.send('Hello world - v1\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
