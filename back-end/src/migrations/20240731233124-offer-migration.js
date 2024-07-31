'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tax: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tariff: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      adValorem: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      float: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      iof: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.INTEGER(11),
      },
      sponsorId: {
        type: Sequelize.INTEGER(11),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offers');
  }
};
