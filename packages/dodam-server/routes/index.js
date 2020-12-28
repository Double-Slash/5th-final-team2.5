const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* GET result page. */
router.get('/result', (req, res) => {
  res.render('result', { title: 'Express' });
});

module.exports = router;
