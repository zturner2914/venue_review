/**
 * Created by zturner29 on 10/30/15.
 */
var express = require('express');
var passport = require('passport');
var path = require('path');
var router = express.Router();
var Venue = require('../../models/venue');
var Reviews = require('../../models/reviews');




router.post('/addReview', function(req, res, next){
    console.log('this is body', req.body);
    console.log('this is venueDetz', req.body.venueDetails);

    var createObj = req.body;

    Reviews.model.create(createObj, function (err, reviews) {

        console.log('this is reviews', reviews);

        console.log('this is req', req.body);

        if(err) throw err;

        Venue.findOne({_id: req.body._id}, function(err, body){
            console.log('this is the venue', body);
            console.log('this is the review', reviews);

            //if(!venue.reviewsStash){
            //    venue.reviewsStash = []
            //}

            //venue = matched Venue

            //
            //venue.reviewsStash.push(reviews);
            //
            //venue.save(function(err){
            //    if(err) throw err;
            //});

        });
        res.sendStatus(200)
        });
});


router.get('/get', function(request, response, next){
    Reviews.find({}, function(err, reviews){
        if(err) throw err;
        response.send(reviews);
    });
});


module.exports = router;
