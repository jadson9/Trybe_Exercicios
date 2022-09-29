const express = require('express');

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
];

const app = express();

app.use(express.json())

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const resultado = activities.find((el) => el.id === Number(id));
  return res.status(200).json({ resultado })
});

app.get('/myActivities', (req, res) =>res.status(200).json({ activities }));

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  const resultado = activities.filter((el) => el.status === status);
  return res.status(200).json({ resultado })
});

module.exports = app;