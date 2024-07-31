const OrderModel = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      id: DataTypes.INTEGER(11),
      orderNfId: DataTypes.STRING(255),
      orderNumber: DataTypes.STRING(255),
      orderPath: DataTypes.STRING(255),
      orderFileName: DataTypes.STRING(255),
      orderOriginalName: DataTypes.STRING(255),
      emissionDate: DataTypes.STRING(255),
      pdfFile: DataTypes.STRING(255),
      emitedTo: DataTypes.STRING(255),
      nNf: DataTypes.STRING(255),
      CTE: DataTypes.STRING(255),
      value: DataTypes.STRING(255),
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cnpjId: DataTypes.INTEGER(11),
      userId: DataTypes.INTEGER(11),
      buyerId: DataTypes.INTEGER(11),
      providerId : DataTypes.INTEGER(11),
      orderStatusBuyer: { type: DataTypes.STRING(255), defaultValue: 0},
      orderStatusProvider: { type: DataTypes.STRING(255), defaultValue: 0},
      deliveryReceipt: DataTypes.STRING(255),
      cargoPackingList: DataTypes.STRING(255),
      deliveryCtrc: DataTypes.STRING(255)
    },
    {
      tableName: 'orders'
    });
  
    return Order;
  };
  
  module.exports = OrderModel;