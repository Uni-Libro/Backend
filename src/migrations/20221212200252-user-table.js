'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'email');
    await queryInterface.removeColumn('users', 'username');
    await queryInterface.removeColumn('users', 'firstName');
    await queryInterface.removeColumn('users', 'lastName');
  },

  async down(queryInterface) {
    await queryInterface.addColumn('users', 'email', {
      allowNull: false,
      type: DataTypes.STRING(45),
      unique: true,
    });
    await queryInterface.addColumn('users', 'username', {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true,
    });
    await queryInterface.addColumn('users', 'firstName', {
      allowNull: false,
      type: DataTypes.STRING(255),
    });
    await queryInterface.addColumn('users', 'lastName', {
      allowNull: false,
      type: DataTypes.STRING(255),
    });
  },
};
