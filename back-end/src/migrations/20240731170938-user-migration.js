'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      phoneNumber: {
        type: Sequelize.STRING(255)
      },
      mobile: {
        type: Sequelize.STRING(255)
      },
      departament: {
        type: Sequelize.STRING(255)
      },
      verificationCode: {
        type: Sequelize.STRING(255)
      },
      emailChecked: {
        type: Sequelize.TINYINT(1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cashforceAdm: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
