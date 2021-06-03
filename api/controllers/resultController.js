var shProducts = require('../models/shProducts');
var shSystems = require('../models/shSystems');

exports.result_get = function (req, res, next) {
  let categories = req.body.categories;
  let products = req.body.productsAdjusted;

  let systemRequirements = function (obj) {
    for (let i in obj) {
      if (obj[i] === false) {
        delete obj[i];
      }
    }
    return obj;
  };

  systemRequirements(categories);
  shSystems.find(categories, (err, docs) => {
    if (err) return next(err);
    console.log(docs);
  });
  res.send('respond with a resource');
};
