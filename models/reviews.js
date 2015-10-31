var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    show: String,
    date: Date,
    overStar: Number,
    drink: String,
    nearby: String,
    comments: String
});


var Reviews = mongoose.model('Reviews', reviewSchema);

//module.exports = Reviews;

exports.schema = reviewSchema;
exports.model = Reviews;