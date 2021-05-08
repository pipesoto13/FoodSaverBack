const { Payment, Order } = require('../models')

module.exports = {
  async create(req, res) {
    const { body } = req

    const payment = await Payment.create(
      body,
      { include: [Order] }
    )
    console.log(Payment)

    payment.setOrder(body.orderId)

    res.status(201).json(payment)
  },
  async list(req, res) {
    const payments = await Payment
      .scope({ include: [Order] })
      .findAll()

    res.status(200).json(payments)
  }
}
