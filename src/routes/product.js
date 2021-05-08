const router = require('express').Router()
const productController = require('../controllers/product.controller')

router.route('/').post(productController.create)
router.route('/').get(productController.list)
router.route('/:productId').delete(productController.destroy)

module.exports = router
