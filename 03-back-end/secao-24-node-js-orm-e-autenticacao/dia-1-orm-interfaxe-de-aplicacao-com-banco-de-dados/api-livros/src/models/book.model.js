const bookModel = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })
  return book;
};