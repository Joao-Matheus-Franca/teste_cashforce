const CnpjModel = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('Cnpj', {
      id: { 
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, 
      },
      cnpj: { 
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      companyType: { 
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      createdAt: { 
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: { 
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      tableName: 'cnpjs'
    });
  
    return Cnpj;
  };
  
module.exports = CnpjModel;