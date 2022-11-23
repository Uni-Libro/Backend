'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'category',
      [
        {
          name: 'علمی و تخیلی',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'روانشناسی',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'نمایشنامه',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'تاریخ',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'شعر',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: ' علوم اجتماعی',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'داستان و رمان',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'مدیریت، بازاریابی و فروش',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'سبک زندگی',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'موسیقی',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'دین و عرفان',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'زندگی‌نامه ، سفرنامه و خاطرات',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('category', null, {});
  },
};
