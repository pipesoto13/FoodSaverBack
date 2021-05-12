const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.route('/').get(userController.list)
router.route('/').post(userController.create)
router.route('/signin').post(userController.signin)
router.route('/:userId').put(userController.update)
router.route('/:userId').get(userController.show)
router.route('/:userId').delete(userController.destroy)


module.exports = router
