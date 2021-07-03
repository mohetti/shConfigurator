let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let shProductSchema = new Schema({
  name: { type: String },
  system: { type: String },
  type: [String],
  compatible: [String],
  partialComp: [String],
});

module.exports = mongoose.model('shProducts', shProductSchema, 'shProducts');
