var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shSystemsSchema = new Schema({
  system: { type: String },
  basestation: { type: String },
  light: { type: Boolean },
  heating: { type: Boolean },
  security: { type: Boolean },
  products: {
    cameraI: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    cameraO: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    ceilingA: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    ceilingM: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    doorbell: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    e27W: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    e27A: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    e27M: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    e14W: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    e14A: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    e14M: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    gu10W: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    gu10A: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    gu10M: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    gardenSpot: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    gardenStrip: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    heatActor12Motorized: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    heatActor230_06: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    heatActor230_10: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    heatActor24_06: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    heatActor24_10: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    lock: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    motionI: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    motionO: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    motionOZ: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    pathLightW: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    pathLightM: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    plugN: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    plugD: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    radiator: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    recSpotA: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    recSpotW: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    recSpotM: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    recSwitchD: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    recSwitchN: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    sirenI: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    sirenO: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    smoke: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    strip: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    surfSpotA: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    surfSpotM: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    tableLamp: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    thermostatWired230: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    thermostatWired24: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    thermostatWireless: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    thermostatWirelessExt: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    wallA: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    wallM: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    wallGardenM: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    wallGardenW: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
    windowSensor: [{ type: Schema.Types.ObjectId, ref: 'shProducts' }],
  },
  baseNotFrom: [String],
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
