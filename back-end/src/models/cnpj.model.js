const CnpjModel = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('Cnpj', {
      id: DataTypes.INTEGER(11),
      cnpj: DataTypes.STRING(255),
      companyType: DataTypes.STRING(255),
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'cnpjs'
    });
  
    return Cnpj;
  };
  
  module.exports = UserModel;