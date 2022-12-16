'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'category',
      [
        {
          id: 1,
          name: 'ادبیات',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'تاریخ',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'داستان و رمان',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'درسی و کمک درسی',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'دفاع مقدس',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: 'روان‌شناسی و موفقیت',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: 'زندگی نامه و خاطرات',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name: 'فلسفه و منطق',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          name: 'کودک و نوجوان',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          name: 'هنر',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category', { id: Array.from({ length: 10 }, (_, i) => i + 1) }, {});
  },
};
