const OrderPortionModel = (sequelize, DataTypes) => {
    const OrderPortion = sequelize.define('OrderPortion', {
      id: { 
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nDup: DataTypes.STRING(255),
      dVenc: DataTypes.STRING(255),
      vDup: DataTypes.STRING(255),
      dVenc: DataTypes.STRING(255),
      availableToMarket: { type: DataTypes.TINYINT(1), defaultValue: 1},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      orderId: DataTypes.INTEGER(11),
    },
    {
      tableName: 'orderportions'
    });
  
    return OrderPortion;
  };
  
  module.exports = OrderPortionModel;