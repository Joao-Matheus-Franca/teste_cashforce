'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING,
      },
      orderFileName: {
        type: Sequelize.STRING,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
      },
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      buyerId: {
        type: Sequelize.INTEGER,
      },
      providerId: {
        type: Sequelize.INTEGER,
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
