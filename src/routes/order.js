const router = require('express').Router()
const orderController = require('../controllers/order.controller')
const { auth } = require('../utils/auth')

router.route('/').post(orderController.create)
router.route('/').get(orderController.list)
router.route('/byUser').get(auth, orderController.filterByUser)
router.route('/:orderId').delete(orderController.destroy)

module.exports = router
