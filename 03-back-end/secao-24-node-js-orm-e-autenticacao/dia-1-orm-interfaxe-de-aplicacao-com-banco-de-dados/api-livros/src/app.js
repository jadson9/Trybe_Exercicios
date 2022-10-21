const express = require('express');
const { bookController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/book', bookController.getAll);
app.get('/book/:id', bookController.getById);
app.post('/book', bookController.insert);

module.exports = app;