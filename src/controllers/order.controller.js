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
  },
  async filterByUser(req, res) {
    try {
      const {
        user,
      } = req;
      const ordersByUser = await Order
      .scope({ include: [Product]})
      .findAll({
        where: { UserId: user }
      });
      res.status(200).json({ message: 'Orders filtered', ordersByUser });
    } catch (error) {
      res.status(400).json({ message: 'orders could not be obtained', error });
    }
  },
  async destroy(req, res) {
    const { orderId } = req.params
    console.log(orderId);
    const order = await Order.findByPk(orderId)
    await order.destroy()
    res.status(200).json(order)
  },
  async destroyByProductId(req, res) {
    const { productId } = req.params
    console.log(productId);
    const order = await Order
    .destroy({
      where: {ProductId: productId}
    })
    res.status(200).json(order)
  },
}
