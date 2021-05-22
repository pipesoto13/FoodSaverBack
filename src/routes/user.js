const router = require('express').Router()
const userController = require('../controllers/user.controller')
const { auth } = require('../utils/auth')
const { formData } = require('../utils/formData');

router.route('/').get(auth, userController.list)
router.route('/').post(userController.create)
router.route('/signin').post(userController.signin)
router.route('/').put(auth, formData, userController.update)
router.route('/:userId').get(userController.show)
router.route('/:userId').delete(auth, userController.destroy)


module.exports = router
