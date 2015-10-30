var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    name: String,
    date: Date,
    staff: Number,
    drink: String,
    nearby: String,
    comments: String,
    venue: Number
});


var Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;