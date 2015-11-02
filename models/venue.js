var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var reviewSchema = require('./reviews').schema;

var venueSchema = new Schema({


    "id": Number,
    "name": String,
    "coords": {
        "lat": Number,
        "lng": Number
    },
    reviewsStash:[reviewSchema]
});


var venues = mongoose.model('venues', venueSchema);

module.exports = venues;