'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('books', 'author_name');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('books', 'author_name', DataTypes.STRING);
  },
};
