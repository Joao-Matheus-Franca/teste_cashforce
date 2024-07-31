const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER(11),
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    phoneNumber: DataTypes.STRING(255),
    mobile: DataTypes.STRING(255),
    departament: DataTypes.STRING(255),
    verificationCode: DataTypes.STRING(255),
    emailChecked: { type: DataTypes.TINYINT(1), defaultValue: 0},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cashforceAd: { type: DataTypes.TINYINT(1), defaultValue: 0}
  },
  {
    tableName: 'users'
  });

  return User;
};

module.exports = UserModel;