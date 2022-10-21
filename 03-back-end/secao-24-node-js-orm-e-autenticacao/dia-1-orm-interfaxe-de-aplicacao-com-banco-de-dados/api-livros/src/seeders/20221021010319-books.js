'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('books',
    [
      {
        title: 'O vendedor de Sonhos',
        author: 'Algusto Cury',
        pageQuantity: 15.90,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'O grande conflito',
        author: 'Elen G. White',
        pageQuantity: 29.95,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'O manda chuva',
        author: 'Leonardo Santos',
        pageQuantity: 69.50,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ]
    )
  },

  async down (queryInterface, _Sequelize) {
    return await queryInterface.bulkDelete('books', null, {})
  }
};
