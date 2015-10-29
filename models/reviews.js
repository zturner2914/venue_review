var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({

});


var Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;