module.exports = (sequelize, DataTypes) => {
  const userSchema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }

  const userOps = {
    timestamps: true,
    tableName: 'sellers',
  }

  const Seller = sequelize.define('Seller', userSchema, userOps)

  Seller.associate = (db) => {
    db.Seller.hasMany(db.Product)
    //db.Seller.hasMany(db.Order)
  }

  return Seller
}
