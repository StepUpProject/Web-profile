const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth');
const { checkUser } = require('../middleware/isAuth');

router.post('/', checkUser)
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
// router.route('/logout')
//     .get(AuthController.logout)

module.exports = router