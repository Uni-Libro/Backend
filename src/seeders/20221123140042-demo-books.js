'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          name: 'کتاب هیجانی',
          author_name: 'هیچکس',
          image_url: 'https://picsum.photos/200/300',
          description: '',
          price: 10000,
          category: 'علمی و تخیلی',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  },
};
