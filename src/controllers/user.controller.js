const { User } = require('../models')

module.exports = {
  async list(req, res) {
    const users = await User.findAll()
    res.status(200).json(users)
  },
  async create(req, res) {
    const { body } = req
    const user = await User.create(body)
    res.status(201).json(user)
  },
  async show(req, res) {
    const { userId } = req.params
    const user = await User.findByPk(userId)
    res.status(200).json(user)
  },
  async update(req, res) {
    const { body, params: { userId } } = req
    let user = await User.findByPk(userId)
    user = await user.update(body)
    res.status(200).json(user)
  },
  async destroy(req, res) {
    const { userId } = req.params
    const user = await User.findByPk(userId)
    await user.destroy()
    res.status(200).json(user)
  },
}
