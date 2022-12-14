'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'AuthorBook',
      [
        { book_model_id: 1, author_model_id: 1, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 2, author_model_id: 2, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 3, author_model_id: 3, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 4, author_model_id: 4, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 5, author_model_id: 5, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 6, author_model_id: 6, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 7, author_model_id: 7, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 8, author_model_id: 8, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 9, author_model_id: 9, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 10, author_model_id: 10, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 11, author_model_id: 11, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 12, author_model_id: 12, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 13, author_model_id: 13, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 14, author_model_id: 14, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 15, author_model_id: 15, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 16, author_model_id: 16, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 17, author_model_id: 17, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 18, author_model_id: 18, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 19, author_model_id: 19, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 20, author_model_id: 20, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 21, author_model_id: 21, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 22, author_model_id: 22, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 23, author_model_id: 23, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 24, author_model_id: 24, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 25, author_model_id: 25, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 26, author_model_id: 26, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 27, author_model_id: 27, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 28, author_model_id: 28, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 29, author_model_id: 29, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 30, author_model_id: 30, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 31, author_model_id: 31, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 32, author_model_id: 32, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 33, author_model_id: 33, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 34, author_model_id: 34, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 35, author_model_id: 35, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 36, author_model_id: 36, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 37, author_model_id: 37, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 38, author_model_id: 38, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 39, author_model_id: 39, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 40, author_model_id: 40, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 41, author_model_id: 41, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 42, author_model_id: 42, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 43, author_model_id: 43, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 44, author_model_id: 44, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 45, author_model_id: 45, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 46, author_model_id: 46, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 47, author_model_id: 47, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 48, author_model_id: 48, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 49, author_model_id: 49, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 50, author_model_id: 50, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 51, author_model_id: 51, created_at: new Date(), updated_at: new Date() },
        { book_model_id: 52, author_model_id: 52, created_at: new Date(), updated_at: new Date() },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AuthorBook', { book_model_id: Array.from({ length: 52 }, (_, i) => i + 1) }, {});
  },
};
