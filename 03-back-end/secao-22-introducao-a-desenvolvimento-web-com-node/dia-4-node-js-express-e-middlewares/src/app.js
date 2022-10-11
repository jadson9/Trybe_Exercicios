const express = require('express');
const crypto = require('crypto');
const { setToken } = require('./tokens/tokens')

const {
  validationPropName,
  validationNameQuant,
  validationPropPrice,
  validationPriceValue,
  validationPropDescrip,
  validationPropCreated,
  validationPropRating,
  validationPropDificulty,
  validationSignup,
  autentication
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
  autentication,
  (req, res) => {
    const dataReceive = { ...req.body };
    atividades.push(dataReceive);
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})


app.post('/signup', validationSignup, async (req, res) => {
  const result = crypto.randomBytes(8).toString('hex');
  await setToken(result);
  res.status(200).json({ "token": result })
})

module.exports = app;


// app.post('/teams', (req, res) => {
//     const newTeam = { ...req.body };
//     teams.push(newTeam);
//     res.status(201).json({ teams: newTeam });
// });