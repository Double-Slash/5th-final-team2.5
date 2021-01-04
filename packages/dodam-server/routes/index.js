const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));

/* GET result page. */
router.get('/result', (req, res) => {
  res.render('result', { title: 'Express' });
});

module.exports = router;
