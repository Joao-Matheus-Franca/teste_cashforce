const SponsorModel = (sequelize, DataTypes) => {
    const Sponsor = sequelize.define('Sponsor', {
      id: { 
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(255),
      tradingName: DataTypes.STRING(255),
      cashforceTax: DataTypes.STRING(255),
      responsibleName: DataTypes.STRING(255),
      responsibleEmail: DataTypes.STRING(255),
      responsiblePosition: DataTypes.STRING(255),
      responsiblePhone: DataTypes.STRING(255),
      responsibleMobile : DataTypes.STRING(255),
      website: DataTypes.STRING(255),
      postalCode: DataTypes.STRING(255),
      address: DataTypes.STRING(255),
      number: DataTypes.STRING(255),
      complement: DataTypes.STRING(255),
      neighborhood: DataTypes.STRING(255),
      city: DataTypes.STRING(255),
      state: DataTypes.STRING(255),
      bank: DataTypes.STRING(255),
      bankAgency: DataTypes.STRING(255),
      account: DataTypes.STRING(255),
      documents: DataTypes.STRING(255),
      phoneNumber: DataTypes.STRING(255),
      situation: DataTypes.STRING(255),
      situationDate: DataTypes.STRING(255),
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cnpjId: DataTypes.INTEGER(11),
      email: DataTypes.STRING(255)
    },
    {
      tableName: 'sponsors'
    });

    return Sponsor
  };
  
  module.exports = SponsorModel;