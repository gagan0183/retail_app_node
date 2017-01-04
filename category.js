/**
 * Created by Gagan on 03-01-2017.
 */
var mongoose = require('mongoose');

var Category = {
    _id: {
        type: String
    },
    parent: {
        type: String,
        ref: 'Category'
    },
    ancestors: [{
        type: String,
        ref: 'Category'
    }]
};

module.exports = new mongoose.Schema(Category);
module.exports.Category = Category;