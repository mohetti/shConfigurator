var shSystems = require('../models/shSystems');
var shProducts = require('../models/shProducts');

exports.result_get = function (req, res, next) {
  console.log(req.body);
  res.send('respond with a resource');
};
