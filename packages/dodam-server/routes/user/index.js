const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/login/google', userController.login_google);
router.post('/login/google/callback', userController.login_google_callback);

module.exports = router;
