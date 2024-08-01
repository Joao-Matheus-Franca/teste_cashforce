const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    email: { 
      type: DataTypes.STRING(255),
      allowNull: false, 
    },
    phoneNumber: { 
      type: DataTypes.STRING(255) 
    },
    mobile: { 
      type: DataTypes.STRING(255) 
    },
    departament: { 
      type: DataTypes.STRING(255) 
    },
    verificationCode: { 
      type: DataTypes.STRING(255) 
    },
    emailChecked: { 
      type: DataTypes.TINYINT(1), 
      defaultValue: 0
    },
    createdAt: { 
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: { 
      type: DataTypes.DATE,
      allowNull: false,
    },
    cashforceAdm: { 
      type: DataTypes.TINYINT(1), 
      defaultValue: 0
    }
  },
  {
    tableName: 'users'
  });

  User.associate = (models) => {
      User.hasMany(models.Order, { foreignKey: 'userId' });
  };

  return User;
};

module.exports = UserModel;