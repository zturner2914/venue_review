/**
 * Created by zturner29 on 10/16/15.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../../models/user');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});

router.get('/registerLanding', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../public/views/registerLanding.html'));
});


router.post('/', function(req,res,next) {
    console.log("hit this end point");
    Users.create(req.body, function (err, post) {
        if (err)
            next(err);
        else
            res.send('/register/registerLanding');
    })
});

module.exports = router;