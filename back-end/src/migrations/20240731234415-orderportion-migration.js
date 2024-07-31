'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nDup: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      dVenc: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      vDup: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      availableToMarket: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1
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
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderportions');
  }
};
