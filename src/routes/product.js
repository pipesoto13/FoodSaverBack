const router = require('express').Router()
const productController = require('../controllers/product.controller')

router.route('/').post(productController.create)
router.route('/').get(productController.list)

module.exports = router
