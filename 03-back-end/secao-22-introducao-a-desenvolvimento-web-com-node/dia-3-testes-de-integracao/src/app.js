const express = require('express');

const app = express();

app.use(express.json());

const dataCacau =   [
  { "id": 1, "name": "Mint Intense", "brandId": 1 },
  { "id": 2, "name": "White Coconut", "brandId": 1 },
  { "id": 3, "name": "Mon Chéri", "brandId": 2 },
  { "id": 4, "name": "Mounds", "brandId": 3 }
]

app.get("/chocolates/total", (req, res) => res.status(200).json({ totalChocolates: dataCacau.length }))

module.exports = app;