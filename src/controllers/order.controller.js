const { Order, Product, Client, Seller } = require('../models')

module.exports = {
  async create(req, res) {
    const { body } = req

    const order = await Order.create(
      body,
      { include: [Product, Client/* , Seller */] }
    )
    console.log(Order)

    order.setProducts(body.productId)
    order.setClient(body.clientId)
    //order.setSeller(body.sellerId)

    res.status(201).json(order)
  },
  async list(req, res) {
    const orders = await Order
      .scope({ include: [Product, Client/* , Seller */] })
      .findAll()

    res.status(200).json(orders)
  }
}
