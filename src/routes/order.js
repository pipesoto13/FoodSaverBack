const router = require('express').Router()
const orderController = require('../controllers/order.controller')

router.route('/').post(orderController.create)
router.route('/').get(orderController.list)

module.exports = router
