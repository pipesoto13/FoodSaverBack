const { User } = require('../models');
const bcrypt = require('bcrypt');

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
  async signin(req, res) {
    try {
      const { email, password } = req.body
      let validUser = await User.findOne({ where: { email } })

      if (!validUser) {
        throw Error('email o contraseña invalida')
      }

      const isValidPass = await bcrypt.compare(password, validUser.password)

      if (!isValidPass) {
        throw Error('Usuario o contraseña inválida');
      }

      res.status(201).json(validUser)
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
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
