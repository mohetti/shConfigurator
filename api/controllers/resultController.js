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
  shSystems
    .find(categories)
    .populate('products.cameraI')
    .populate('products.cameraO')
    .populate('products.ceilingA')
    .populate('products.ceilingM')
    .populate('products.doorbell')
    .populate('products.e27W')
    .populate('products.e27A')
    .populate('products.e27M')
    .populate('products.e14W')
    .populate('products.e14A')
    .populate('products.e14M')
    .populate('products.gu10W')
    .populate('products.gu10A')
    .populate('products.gu10M')
    .populate('products.gardenSpot')
    .populate('products.gardenStrip')
    .populate('products.heatActor12Motorized')
    .populate('products.HeatActor230_06')
    .populate('products.HeatActor230_10')
    .populate('products.HeatActor24_06')
    .populate('products.HeatActor24_10')
    .populate('products.lock')
    .populate('products.motionI')
    .populate('products.motionO')
    .populate('products.pathLightW')
    .populate('products.pathLightM')
    .populate('products.plugN')
    .populate('products.plugD')
    .populate('products.radiator')
    .populate('products.recSpotA')
    .populate('products.recSptM')
    .populate('products.recSpotW')
    .populate('products.recSwitchD')
    .populate('products.recSwitchN')
    .populate('products.sirenI')
    .populate('products.sirenO')
    .populate('products.smoke')
    .populate('products.strip')
    .populate('products.surfSpotA')
    .populate('products.surfSpotM')
    .populate('products.tableLamp')
    .populate('products.thermostatWired230')
    .populate('products.thermostatWired24')
    .populate('products.thermostatWireless')
    .populate('products.wallA')
    .populate('products.wallM')
    .populate('products.wallGardenM')
    .populate('products.wallGardenW')
    .populate('products.windowSensor')
    .exec((err, docs) => {
      if (err) return next(err);

      let potentialSystems = docs;
      console.log('%j', potentialSystems);
      let resSystems = [];

      // *****************************************
      // Code below could be the start of the filter function.
      // under the .result_get function is the action plan
      /*potentialSystems.map((x) => {
        resSystems.push({
          mainSystem: x.system,
          mainBase: x.basestation,
          substations: [],
          compSystems: [],
          partialCompSystems: [],
          notCompSystems: [],
          products: [],
        });
      });
      
      for (let i in x.products) {
        if (products.indexOf(x.products.type[i]) !== -1) {
          resSystems[index].products.push(x.products[i]);
        }
      }
      */

      res.send('respond with a resource');
    });
};

/*
4. reqArray.map => push to containerArray.
    => mainSystem: system, mainBase: basestation, compSystems: [], partialCompSystems: [], notComp: [], substations: [], products: []
5. reqArray.map i y => arraywithproducts.map x => conainerArray[i].prdocuts.push(y.products[x])
6. containerArray.map x => x.products.map y => 
        y.system === x.mainSystem ? do nothing
        y.system !== x.mainSystem && x.subsystems.find(y.system == -1) ? 
            => y.compatible.find(x.mainSystem) !== -1 ? pust to compSystems
            => y.partialComp !== -1 ? pusht to partialCompSystems
            => else push to notCompSystems
7. containerArray.map x => x.products.map y => y.baseNotFor.map z => z === x.system do nothing
    => z !== x.system req.Array.map a => a.basestation !== null ? x.substations.push(a.basestation)
*/
