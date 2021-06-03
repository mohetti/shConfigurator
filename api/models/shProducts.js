var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shProductSchema = new Schema({
  name: { type: String },
  system: { type: String },
  type: [String],
  compatible: [String],
  partialComp: [String],
});

module.exports = mongoose.model('shProducts', shProductSchema, 'shProducts');
