module.exports = (sequelize, DataTypes) => {
  const productSchema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    latLoc: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longLoc: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }

  const productOps = {
    timestamps: true,
    tableName: 'products',
  }

  const Product = sequelize.define('Product', productSchema, productOps)

  Product.associate = (db) => {
    db.Product.belongsTo(db.User)
    db.Product.hasOne(db.Order)
  }

  return Product
}
