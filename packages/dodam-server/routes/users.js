var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

/* GET result page. */
router.get('/result', (req, res) => {
  res.render('result', { title: 'Express' });
});

module.exports = router;
