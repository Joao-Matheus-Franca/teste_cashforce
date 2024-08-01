const OrderModel = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      id: { 
        type: { 
          type: DataTypes.INTEGER(11) 
        },
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: { 
        type: DataTypes.STRING(255),
        allowNull: false
      },
      orderNumber: { 
        type: DataTypes.STRING(255),
        allowNull: false
      },
      orderPath: { 
        type: DataTypes.STRING(255)
      },
      orderFileName: { 
        type: DataTypes.STRING(255)
      },
      orderOriginalName: { 
        type: DataTypes.STRING(255)
      },
      emissionDate: { 
        type: DataTypes.STRING(255)
      },
      pdfFile: { 
        type: DataTypes.STRING(255)
      },
      emitedTo: { 
        type: DataTypes.STRING(255),
        allowNull: false
      },
      nNf: { 
        type: DataTypes.STRING(255)
      },
      CTE: { 
        type: DataTypes.STRING(255)
      },
      value: { 
        type: DataTypes.STRING(255)
      },
      createdAt: { 
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: { 
        type: DataTypes.DATE,
        allowNull: false
      },
      cnpjId: { 
        type: DataTypes.INTEGER(11) 
      },
      userId: { 
        type: DataTypes.INTEGER(11) 
      },
      buyerId: { 
        type: DataTypes.INTEGER(11) 
      },
      providerId : { 
        type: DataTypes.INTEGER(11) 
      },
      orderStatusBuyer: { 
        type: DataTypes.STRING(255),
        defaultValue: '0'
      },
      orderStatusProvider: { 
        type: DataTypes.STRING(255),
        defaultValue: '0'
      },
      deliveryReceipt: { 
        type: DataTypes.STRING(255)
      },
      cargoPackingList: { 
        type: DataTypes.STRING(255)
      },
      deliveryCtrc: { 
        type: DataTypes.STRING(255)
      }
    },
    {
      tableName: 'orders'
    });
  
    return Order;
  };
  
  module.exports = OrderModel;