const router = require('express').Router()
const paymentController = require('../controllers/payment.controller')

router.route('/').post(paymentController.create)
router.route('/').get(paymentController.list)

module.exports = router
