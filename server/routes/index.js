var express = require('express');
var passport = require('passport');
var path = require('path');
var router = express.Router();
var Venue = require('../../models/venue');
var Review = require('../../models/reviews');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.post('/',
    passport.authenticate('local'), function(req, res){
        res.send('/users/home');
    }
);

//router.post('/addReview', function(req, res){
//
//    console.log(req.body);
//
//
//    Venue.findOne({id: req.body.venueInfo.id}, function(err, venue){
//
//
//        venue = matched Venue
//
//        review obj
//
//        venue.reviews.push(req.body);
//
//        venue.save(function(err){
//           if(err) throw err;
//        });
//
//    });
//
//
//
//
//});



module.exports = router;
