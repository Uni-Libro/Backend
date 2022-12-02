'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn('books', 'category');
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn('books', 'category', DataTypes.STRING);
  },
};
