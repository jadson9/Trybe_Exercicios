const express = require('express');

const {
  validationPropName,
  validationNameQuant,
  validationPropPrice,
  validationPriceValue,
  validationPropDescrip,
  validationPropCreated,
  validationPropRating,
  validationPropDificulty
} = require('./midd.js')

const atividades = [
  {
    "name": "Trekking",
    "price": 0,
    "description": {
      "rating": 5,
      "difficulty": "Fácil",
      "createdAt": "10/08/2022"
    }
  }
]

const app = express();

app.use(express.json());

app.post(
  '/activities',
  validationPropName,
  validationNameQuant,
  validationPropPrice,
  validationPriceValue,
  validationPropDescrip,
  validationPropCreated,
  validationPropRating,
  validationPropDificulty,
  (req, res) => {
    const dataReceive = { ...req.body };
    atividades.push(dataReceive);
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = app;


// app.post('/teams', (req, res) => {
//     const newTeam = { ...req.body };
//     teams.push(newTeam);
//     res.status(201).json({ teams: newTeam });
// });