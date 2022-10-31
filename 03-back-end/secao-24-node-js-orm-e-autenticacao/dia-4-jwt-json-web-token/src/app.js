const express = require('express');
const { validateLogin } = require('./middlewares/validateLogin');
const { login } = require('./middlewares/login');

const app = express();

app.use(express.json());

app.post('/login', validateLogin, login)


module.exports = app;