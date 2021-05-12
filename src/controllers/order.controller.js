const { Order, Product, User} = require('../models')

module.exports = {
  async create(req, res) {
    const { body } = req

    const order = await Order.create(
      body,
      { include: [Product, User] }
    )
    console.log(Order)

    order.setProducts(body.productId)
    order.setUser(body.clientId)

    res.status(201).json(order)
  },
  async list(req, res) {
    const orders = await Order
      .scope({ include: [Product, User] })
      .findAll()

    res.status(200).json(orders)
  }
}
