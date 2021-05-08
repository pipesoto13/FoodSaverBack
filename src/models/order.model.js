module.exports = (sequelize, DataTypes) => {
  const productSchema = {
  
  }

  const productOps = {
    timestamps: true,
    tableName: 'orders',
  }

  const Order = sequelize.define('Order', productSchema, productOps)

  Order.associate = (db) => {
    db.Order.belongsToMany(db.Product, { through: 'OrderProduct' })
    db.Order.belongsTo(db.Client)
  }

  return Order
}
