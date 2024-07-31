const OfferModel = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    id: DataTypes.INTEGER(11),
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
};