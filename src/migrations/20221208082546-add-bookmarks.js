'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookmarks', {
      userModelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      bookModelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'books',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Bookmarks');
  },
};
