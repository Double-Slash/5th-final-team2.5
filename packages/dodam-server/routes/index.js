const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

router.use('/user', require('./user'));
router.use('/club',verifyToken.checkToken, require('./club'));
router.use('/comment',verifyToken.checkToken, require('./comment'));



module.exports = router;
