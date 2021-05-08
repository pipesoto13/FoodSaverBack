module.exports = (sequelize, DataTypes) => {
  const paymentSchema = {
  
  }

  const paymentOps = {
    timestamps: true,
    tableName: 'payments',
  }

  const Payment = sequelize.define('Payment', paymentSchema, paymentOps)

  Payment.associate = (db) => {
    db.Payment.belongsTo(db.Order)
  }

  return Payment
}
