var shProducts = require('../models/shProducts');
var shSystems = require('../models/shSystems');

exports.result_get = function (req, res, next) {
  let categories = req.body.categories;
  let products = req.body.productsAdjusted;
  let subStationQuery = [];

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

      let extractedDatabaseSystems = docs;
      //console.log('%j', potentialSystems);
      let responseSystems = [];

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

      extractedDatabaseSystems.map((x, index) => {
        for (let i in x.products) {
          if (products.indexOf(i) !== -1) {
            responseSystems[index].productsTemp.push(x.products[i]);
          }
        }
      });

      responseSystems.map((x) => {
        x.productsTemp.map((y) => {
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

      let subStationBucket = {};
      shSystems
        .find({ system: { $in: subStationQuery } })
        .select('basestation system')
        .exec((err, docs) => {
          if (err) return next(err);
          docs.map((x) => {
            subStationBucket[x.system] = x.basestation;
          });

          let populateSubstations = (compField, subField, baseNotFromField) => {
            compField.map((y) => {
              if (subStationBucket[y]) {
                console.log(subStationBucket[y]);
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

/* ********************************************************************
            *****   NEXT STEPS    *****
              => check new systems for basestation or not
              => comment code
              => && double check code
                => esp for Lupusec motionO
              => general Output



  ******************************************************************* */
