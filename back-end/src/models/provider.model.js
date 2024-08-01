const ProviderModel = (sequelize, DataTypes) => {
    const Provider = sequelize.define('Provider', {
      id: { 
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { 
        type: DataTypes.STRING(255),
        allowNull: false,
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
      bank: { 
        type: DataTypes.STRING(255)
      },
      bankAgency: { 
        type: DataTypes.STRING(255)
      },
      account: { 
        type: DataTypes.STRING(255)
      },
      documents: { 
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
        allowNull: false,
      },
      updatedAt: { 
        type: DataTypes.DATE,
        allowNull: false,
      },
      cnpjId: { 
        type: DataTypes.INTEGER(11),
        foreignKey: true,
      },
      email: { 
        type: DataTypes.STRING(255)
      }
    },
    {
      tableName: 'providers'
    });

    Provider.associate = (models) => {
      Provider.belongTo(models.Cnpj, { foreignKey: 'cnpjId' });
    };
    
    Provider.associate = (models) => {
      Provider.hasMany(models.Order, { foreignKey: 'providerId' });
    };

    return Provider
  };
  
  module.exports = ProviderModel;