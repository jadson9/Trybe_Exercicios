const { book } = require('../models');


const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (id) => {
  const bookUni = await book.findByPk(id);
  return bookUni;
};

const insert = async (title, author, pageQuantity) => {
  const newBook = await book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await book.update({ title, author, pageQuantity }, { where: { id }});
  return updatedBook;
};


module.exports = {
  getAll,
  getById,
  insert,
  update,
};