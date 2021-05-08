const router = require('express').Router()
const sellerController = require('../controllers/seller.controller')

router.route('/').get(sellerController.list)
router.route('/').post(sellerController.create)
router.route('/:sellerId').put(sellerController.update)
router.route('/:sellerId').get(sellerController.show)
router.route('/:sellerId').delete(sellerController.destroy)


module.exports = router
