const { Product, Seller } = require('../models')

module.exports = {
  async create(req, res) {
    const { body } = req

    const product = await Product.create(
      body,
      { include: [Seller] }
    )
    console.log(Product)

    product.setSeller(body.sellerId)

    res.status(201).json(product)
  },
  async list(req, res) {
    const products = await Product
      .scope({ include: [Seller] })
      .findAll()

    res.status(200).json(products)
  }
}
