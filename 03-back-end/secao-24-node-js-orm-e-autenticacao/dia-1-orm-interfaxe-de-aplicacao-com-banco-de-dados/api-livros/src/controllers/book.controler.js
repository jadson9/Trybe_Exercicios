const { bookService } = require('../services');


const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro'});
  }
}

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(Number(id));
  if (book) return res.status(200).json(book);
  return res.status(404).json({ message: 'Book not found' });
}

const insert = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await bookService.insert(title, author, pageQuantity);
  res.status(201).json(newBook);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  await bookService.update(Number(id), title, author, pageQuantity);
  res.status(200).json({ message: 'Book updated!' });
}

module.exports = {
  getAll,
  getById,
  insert,
  update,
}