var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productsSchema = new Schema({
  cameraI: [Schema.Types.ObjectId],
  cameraO: [Schema.Types.ObjectId],
  ceilinA: [Schema.Types.ObjectId],
  ceilingM: [Schema.Types.ObjectId],
  doorbell: [Schema.Types.ObjectId],
  e27W: [Schema.Types.ObjectId],
  e27A: [Schema.Types.ObjectId],
  e27M: [Schema.Types.ObjectId],
  e14W: [Schema.Types.ObjectId],
  e14A: [Schema.Types.ObjectId],
  e14M: [Schema.Types.ObjectId],
  gu10W: [Schema.Types.ObjectId],
  gu10A: [Schema.Types.ObjectId],
  gu10M: [Schema.Types.ObjectId],
  gardenSpot: [Schema.Types.ObjectId],
  gardenStrip: [Schema.Types.ObjectId],
  heatActor12Motorized: [Schema.Types.ObjectId],
  heatActor230_06: [Schema.Types.ObjectId],
  heatActor230_10: [Schema.Types.ObjectId],
  heatActor24_06: [Schema.Types.ObjectId],
  heatActor24_10: [Schema.Types.ObjectId],
  lock: [Schema.Types.ObjectId],
  motionI: [Schema.Types.ObjectId],
  motionO: [Schema.Types.ObjectId],
  patLightW: [Schema.Types.ObjectId],
  pathLightM: [Schema.Types.ObjectId],
  plugN: [Schema.Types.ObjectId],
  plugD: [Schema.Types.ObjectId],
  radiator: [Schema.Types.ObjectId],
  recSpotA: [Schema.Types.ObjectId],
  recSpotW: [Schema.Types.ObjectId],
  recSpotM: [Schema.Types.ObjectId],
  recSwitchD: [Schema.Types.ObjectId],
  recSwitchN: [Schema.Types.ObjectId],
  sirenI: [Schema.Types.ObjectId],
  sirenO: [Schema.Types.ObjectId],
  smoke: [Schema.Types.ObjectId],
  strip: [Schema.Types.ObjectId],
  surfSpotA: [Schema.Types.ObjectId],
  surfSpotM: [Schema.Types.ObjectId],
  tableLamp: [Schema.Types.ObjectId],
  thermostatWired230: [Schema.Types.ObjectId],
  thermostatWired24: [Schema.Types.ObjectId],
  thermostatWireless: [Schema.Types.ObjectId],
  wallA: [Schema.Types.ObjectId],
  wallM: [Schema.Types.ObjectId],
  wallGardenM: [Schema.Types.ObjectId],
  wallGardenW: [Schema.Types.ObjectId],
  windowSensor: [Schema.Types.ObjectId],
});

var shSystemsSchema = new Schema({
  system: { type: String },
  basestation: { type: String },
  light: { type: Boolean },
  heating: { type: Boolean },
  security: { type: Boolean },
  baseNotFrom: [String],
  products: productsSchema,
});

//Export model
module.exports = mongoose.model('shSystems', shSystemsSchema, 'shSystems');

/*
1. sessionStorage splitting
    => array with products that are true
    => array with categories
    => get rid of lightbulbs, gardenLights and innerLights
2. Get Requests
    => Array shSystems find based on (light, heating, security)
    => Object backupSystem for filling
3. define arrays
    => let reqArray = shSystems array
    => let containerArray = will be the end-array
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
