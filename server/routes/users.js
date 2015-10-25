var express = require('express');
var router = express.Router();
var path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(req.isAuthenticated());
});

router.get('/home', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/views/signinLanding.html'))
});

module.exports = router;
