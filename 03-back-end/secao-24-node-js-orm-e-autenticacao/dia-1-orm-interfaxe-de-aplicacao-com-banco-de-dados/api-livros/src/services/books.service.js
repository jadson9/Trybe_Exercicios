const { book } = require('../models');


const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (id) => {
  const bookUni = await book.findByPk(id);
  return bookUni;
};


module.exports = {
  getAll,
  getById,
};