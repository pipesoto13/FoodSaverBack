const router = require('express').Router()
const sellerController = require('../controllers/seller.controller')

router.route('/').get(sellerController.list)
router.route('/').post(sellerController.create)

module.exports = router
