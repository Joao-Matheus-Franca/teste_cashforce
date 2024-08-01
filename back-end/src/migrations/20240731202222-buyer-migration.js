'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tradingName: {
        type: Sequelize.STRING(255),
      },
      cashforceTax: {
        type: Sequelize.STRING(255),
      },
      responsibleName: {
        type: Sequelize.STRING(255),
      },
      responsibleEmail: {
        type: Sequelize.STRING(255),
      },
      responsiblePosition: {
        type: Sequelize.STRING(255),
      },
      responsiblePhone: {
        type: Sequelize.STRING(255),
      },
      responsibleMobile: {
        type: Sequelize.STRING(255),
      },
      website: {
        type: Sequelize.STRING(255),
      },
      postalCode: {
        type: Sequelize.STRING(255),
      },
      address: {
        type: Sequelize.STRING(255),
      },
      number: {
        type: Sequelize.STRING(255),
      },
      complement: {
        type: Sequelize.STRING(255),
      },
      neighborhood: {
        type: Sequelize.STRING(255),
      },
      city: {
        type: Sequelize.STRING(255),
      },
      state: {
        type: Sequelize.STRING(255),
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
      },
      situation: {
        type: Sequelize.STRING(255),
      },
      situationDate: {
        type: Sequelize.STRING(255),
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
        type: Sequelize.INTEGER(11),
        foreignKey: true,
        reference: { 
          model: 'Cnpj',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      confirm: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
      },
      email: {
        type: Sequelize.STRING(255),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('buyers');
  }
};
