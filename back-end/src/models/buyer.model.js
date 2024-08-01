const BuyerModel = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    id: { 
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, 
    },
    name: { 
      type: DataTypes.STRING(255),
      allowNull: false 
    },
    tradingName: { 
      type: DataTypes.STRING(255) 
    },
    cashforceTax: { 
      type: DataTypes.STRING(255) 
    },
    responsibleName: { 
      type: DataTypes.STRING(255) 
    },
    responsibleEmail: { 
      type: DataTypes.STRING(255) 
    },
    responsiblePosition: { 
      type: DataTypes.STRING(255) 
    },
    responsiblePhone: { 
      type: DataTypes.STRING(255) 
    },
    responsibleMobile : { 
      type: DataTypes.STRING(255) 
    },
    website: { 
      type: DataTypes.STRING(255) 
    },
    postalCode: { 
      type: DataTypes.STRING(255) 
    },
    address: { 
      type: DataTypes.STRING(255) 
    },
    number: { 
      type: DataTypes.STRING(255) 
    },
    complement: { 
      type: DataTypes.STRING(255) 
    },
    neighborhood: { 
      type: DataTypes.STRING(255) 
    },
    city: { 
      type: DataTypes.STRING(255) 
    },
    state: { 
      type: DataTypes.STRING(255) 
    },
    phoneNumber: { 
      type: DataTypes.STRING(255) 
    },
    situation: { 
      type: DataTypes.STRING(255) 
    },
    situationDate: { 
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
      type: DataTypes.INTEGER(11),
      foreignKey: true, 
    },
    confirm: { 
      type: DataTypes.TINYINT(1), 
      defaultValue: 1
    },
    email: { 
      type: DataTypes.STRING(255) 
    }
  },
  {
    tableName: 'buyers'
  });

  Buyer.associate = (models) => {
    Buyer.belongsTo(models.Cnpj, { foreignKey: 'cnpjId' });
  };

  Buyer.associate = (models) => {
    Buyer.hasMany(models.Order, { foreignKey: 'buyerId' });
  };

  return Buyer
};

module.exports = BuyerModel;