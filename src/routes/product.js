const router = require('express').Router()
const productController = require('../controllers/product.controller')
const { formData } = require('../utils/formData');

router.route('/').post(formData, productController.create)
router.route('/').get(productController.list)
router.route('/:productId').get(productController.show)
router.route('/:productId').put(formData, productController.update)
router.route('/:productId').delete(productController.destroy)

module.exports = router
