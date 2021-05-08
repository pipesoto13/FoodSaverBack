const { Seller } = require('../models')

module.exports = {
  async list(req, res) {
    const sellers = await Seller.findAll()
    res.status(200).json(sellers)
  },
  async create(req, res) {
    const { body } = req
    const seller = await Seller.create(body)
    res.status(201).json(seller)
  },
  async show(req, res) {
    const { sellerId } = req.params
    const seller = await Seller.findByPk(sellerId)
    res.status(200).json(seller)
  },
  async update(req, res) {
    const { body, params: { sellerId } } = req
    let seller = await Seller.findByPk(sellerId)
    seller = await seller.update(body)
    res.status(200).json(seller)
  },
  async destroy(req, res) {
    const { sellerId } = req.params
    const seller = await Seller.findByPk(sellerId)
    await seller.destroy()
    res.status(200).json(seller)
  },
}
