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

module.exports = {
  getAll,
  getById,
}