const router = require('express').Router()
const clientController = require('../controllers/client.controller')

router.route('/').get(clientController.list)
router.route('/').post(clientController.create)

module.exports = router
