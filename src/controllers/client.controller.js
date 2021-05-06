const { Client } = require('../models')

module.exports = {
  async list(req, res) {
    const clients = await Client.findAll()
    res.status(200).json(clients)
  },
  async create(req, res) {
    const { body } = req
    const client = await Client.create(body)
    res.status(201).json(client)
  },
  async show(req, res) {
    const { clientId } = req.params
    const client = await Client.findByPk(clientId)
    res.status(200).json(client)
  },
  async update(req, res) {
    const { body, params: { clientId } } = req
    let client = await Client.findByPk(clientId)
    client = await client.update(body)
    res.status(200).json(client)
  },
  async destroy(req, res) {
    const { clientId } = req.params
    const client = await Client.findByPk(clientId)
    await client.destroy()
    res.status(200).json(client)
  },
}
