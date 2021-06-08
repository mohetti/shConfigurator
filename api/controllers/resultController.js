var shProducts = require('../models/shProducts');
var shSystems = require('../models/shSystems');

exports.result_get = function (req, res, next) {
  // categories is an object with the keys light(s), heating and security.
  // It is used to query suitable systems from db.collection shSystems
  // systemRequirements() deletes the categories with a false value.
  let categories = req.body.categories;
  let systemRequirements = function (obj) {
    for (let i in obj) {
      if (obj[i] === false) {
        delete obj[i];
      }
    }
    return obj;
  };
  systemRequirements(categories);

  // products is an array of strings. The strings are used for  comparission to the key "type" in the db.collection shProducts
  // only (from the user) selected device types made it into this array.
  let products = req.body.productsAdjusted;

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
    .populate('products.motionOZ')
    .populate('products.thermostatWirelessExt')
    .exec((err, docs) => {
      if (err) return next(err);

      /*
       **** First of Two Database Queries *****
       * The Array responseSystems will be send back to the client after second query.
       * extractedDatabaseSystems has all suitable systems in it. It is used to modify responseSystems.
       * 3 arr.map are executed after above query.
       */

      let extractedDatabaseSystems = docs;
      let responseSystems = [];

      // 1. map: for each suitable system out of extractedDatabaseSystems, responseSystems gets a new object.
      extractedDatabaseSystems.map((x) => {
        responseSystems.push({
          mainSystem: x.system,
          mainBase: x.basestation,
          substations: [],
          compSystems: [],
          partialCompSystems: [],
          notCompSystems: [],
          productsTemp: [],
          baseNotFrom: x.baseNotFrom,
          products: [],
        });
      });

      // 2. map: predefined products for each system in db.shSystems' "products" key,
      //         are looped through. If the user selected them, they get temporarly passed to responseSystems
      extractedDatabaseSystems.map((x, index) => {
        for (let i in x.products) {
          if (products.indexOf(i) !== -1) {
            responseSystems[index].productsTemp.push(x.products[i]);
          }
        }
      });

      // 3. map: the final productlist for the response to client gets populated.
      //         each product is an object with product's name, type and compatibility.
      //         Also system names get pushed to substationQuery. The list is used for the second query.
      let subStationQuery = [];
      responseSystems.map((x) => {
        x.productsTemp.map((y) => {
          if (y[0].system === 'null') {
            return;
          }
          if (x.mainSystem !== y[0].system) {
            if (y[0].compatible.indexOf(x.mainSystem) !== -1) {
              x.products.push({
                name: y[0].name,
                type: y[0].type[0],
                comp: true,
              });
              if (x.compSystems.indexOf(y[0].system) === -1) {
                x.compSystems.push(y[0].system);
                subStationQuery.push(y[0].system);
              }
            } else if (y[0].partialComp.indexOf(x.mainSystem) !== -1) {
              x.products.push({
                name: y[0].name,
                type: y[0].type[0],
                comp: false,
              });
              if (x.partialCompSystems.indexOf(y[0].system) === -1) {
                x.partialCompSystems.push(y[0].system);
                subStationQuery.push(y[0].system);
              }
            } else {
              x.products.push({
                name: y[0].name,
                type: y[0].type[0],
                comp: null,
              });
              if (x.notCompSystems.indexOf(y[0].system) === -1) {
                x.notCompSystems.push(y[0].system);
                subStationQuery.push(y[0].system);
              }
            }
          } else {
            x.products.push({
              name: y[0].name,
              type: y[0].type[0],
              comp: 'main',
            });
          }
        });
        delete x.productsTemp;
      });

      /*
       **** Second of Two Database Queries *****
       * the query is needed to populate substations for each main system.
       * 3 arr.map are executed after below query.
       */

      let subStationBucket = {};
      shSystems
        .find({ system: { $in: subStationQuery } })
        .select('basestation system')
        .exec((err, docs) => {
          if (err) return next(err);

          // 1. map: substationBucket gets populated. It is used to populate the needed substations for each main system.
          docs.map((x) => {
            subStationBucket[x.system] = x.basestation;
          });

          // 3. map: the function takes 3 arguments: one of the 3 keys for compatibility in responseSystems,
          //         the substation key and the baseNotFrom key
          //         if one of the entries in the compatibility keys is found in the substationBucket,
          //         and this entry is not in the baseNotFrom, then it gets pushed to the needed substations.
          let populateSubstations = (compField, subField, baseNotFromField) => {
            compField.map((y) => {
              if (subStationBucket[y]) {
                if (
                  subField.indexOf(subStationBucket[y]) === -1 &&
                  subStationBucket[y] !== 'null' &&
                  baseNotFromField.indexOf(subStationBucket[y]) === -1
                ) {
                  subField.push(subStationBucket[y]);
                }
              }
            });
          };

          // 2. map: for each main system in responseSystem, the function populateSubstations gets executed.
          responseSystems.map((x) => {
            populateSubstations(x.compSystems, x.substations, x.baseNotFrom);
            populateSubstations(
              x.partialCompSystems,
              x.substations,
              x.baseNotFrom
            );
            populateSubstations(x.notCompSystems, x.substations, x.baseNotFrom);
            delete x.baseNotFrom;
          });
          res.send(responseSystems);
        });
    });
};
