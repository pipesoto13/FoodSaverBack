module.exports = (sequelize, DataTypes) => {
  const productSchema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }

  const productOps = {
    timestamps: true,
    tableName: 'products',
  }

  const Product = sequelize.define('Product', productSchema, productOps)

  Product.associate = (db) => {
    db.Product.belongsTo(db.Seller)
  }

  return Product
}
