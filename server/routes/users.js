var express = require('express');
var router = express.Router();
var path = require('path');

//json router
//var markerData = require('../../models/markers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(req.isAuthenticated());
});

router.get('/home', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/views/signinLanding.html'))
});


//get

//router.get('/getMarkers', function(req, res){
//  res.send(markerData);
//});


module.exports = router;
