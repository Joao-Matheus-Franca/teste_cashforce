const OfferModel = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    id: { 
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tax: DataTypes.STRING(255),
    tariff: DataTypes.STRING(255),
    adValorem: DataTypes.STRING(255),
    float: DataTypes.STRING(255),
    iof: DataTypes.STRING(255),
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: { type: DataTypes.TINYINT(1), defaultValue: 0},
    paymentStatusProvider: { type: DataTypes.TINYINT(1), defaultValue: 0},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    orderId: DataTypes.INTEGER(11),
    sponsorId: DataTypes.INTEGER(11)
  }, 
  {
    tableNames: 'offers'
  });

  return Offer
};

module.exports = OfferModel;