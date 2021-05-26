const { Product, User } = require('../models')

module.exports = {
  async create(req, res) {
    const { body } = req

    const product = await Product.create(
      body,
      { include: [User] }
    )
    console.log(Product)

    product.setUser(body.sellerId)

    res.status(201).json(product)
  },
  async list(req, res) {
    const products = await Product
      .scope({ include: [User] })
      .findAll()

    res.status(200).json(products)
  },
  async destroy(req, res) {
    const { productId } = req.params
    console.log(productId);
    const product = await Product.findByPk(productId)
    await product.destroy()
    res.status(200).json(product)
  },
  async update(req, res) {
    const { body, params: { productId } } = req
    let product = await Product.findByPk(productId)
    product = await product.update(body)
    res.status(200).json(product)
  },
  async show(req, res) {
    const { productId } = req.params
    const product = await Product.findByPk(productId)
    res.status(200).json(product)
  },
  async filterByUser(req, res) {
    try {
      const {
        user,
      } = req;
      const productsByUser = await Product.findAll({
        where: { UserId: user }
      });
      res.status(200).json({ message: 'Products filtered', productsByUser });
    } catch (error) {
      res.status(400).json({ message: 'products could not be obtained', error });
    }
  },
}
