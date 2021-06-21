const garden = () => {
  return {
    type: 'garden',
  };
};

const heating = () => {
  return {
    type: 'heating',
  };
};

const innerLights = () => {
  return {
    type: 'innerLights',
  };
};

const light = () => {
  return {
    type: 'light',
  };
};
const lightbulbs = () => {
  return {
    type: 'lightbulbs',
  };
};

const security = () => {
  return {
    type: 'security',
  };
};

const e14W = () => {
  return {
    type: 'e14W',
  };
};

const e14A = () => {
  return {
    type: 'e14A',
  };
};

const e14M = () => {
  return {
    type: 'e14M',
  };
};
const e27W = () => {
  return {
    type: 'e27W',
  };
};

const e27A = () => {
  return {
    type: 'e27A',
  };
};

const e27M = () => {
  return {
    type: 'e27M',
  };
};

const gu10W = () => {
  return {
    type: 'gu10W',
  };
};

const gu10A = () => {
  return {
    type: 'gu10A',
  };
};

const gu10M = () => {
  return {
    type: 'gu10M',
  };
};

const gardenSpot = () => {
  return {
    type: 'gardenSpot',
  };
};

const gardenStrip = () => {
  return {
    type: 'gardenStrip',
  };
};

const pathLightM = () => {
  return {
    type: 'pathLightM',
  };
};
const pathLightW = () => {
  return {
    type: 'pathLightW',
  };
};

const wallGardenM = () => {
  return {
    type: 'wallGardenM',
  };
};

const wallGardenW = () => {
  return {
    type: 'wallGardenW',
  };
};

const ceilingM = () => {
  return {
    type: 'ceilingM',
  };
};

const ceilingA = () => {
  return {
    type: 'ceilingA',
  };
};

const plugD = () => {
  return {
    type: 'plugD',
  };
};

const plugN = () => {
  return {
    type: 'plugN',
  };
};

const recSpotA = () => {
  return {
    type: 'recSpotA',
  };
};

const recSpotM = () => {
  return {
    type: 'recSpotM',
  };
};

const recSpotW = () => {
  return {
    type: 'recSpotW',
  };
};

const recSwitchD = () => {
  return {
    type: 'recSwitchD',
  };
};

const recSwitchN = () => {
  return {
    type: 'recSwitchN',
  };
};

const strip = () => {
  return {
    type: 'strip',
  };
};

const surfSpotA = () => {
  return {
    type: 'surfSpotA',
  };
};

const surfSpotM = () => {
  return {
    type: 'surfSpotM',
  };
};

const tableLamp = () => {
  return {
    type: 'tableLamp',
  };
};

const wallA = () => {
  return {
    type: 'wallA',
  };
};

const wallM = () => {
  return {
    type: 'wallM',
  };
};

const heatActor12Motorized = () => {
  return {
    type: 'heatActor12Motorized',
  };
};

const heatActor24_06 = () => {
  return {
    type: 'heatActor24_06',
  };
};

const heatActor24_10 = () => {
  return {
    type: 'heatActor24_10',
  };
};

const heatActor230_06 = () => {
  return {
    type: 'heatActor230_06',
  };
};

const heatActor230_10 = () => {
  return {
    type: 'heatActor230_10',
  };
};

const radiator = () => {
  return {
    type: 'radiator',
  };
};

const thermostatWired24 = () => {
  return {
    type: 'thermostatWired24',
  };
};

const thermostatWired230 = () => {
  return {
    type: 'thermostatWired230',
  };
};

const thermostatWireless = () => {
  return {
    type: 'thermostatWireless',
  };
};

const cameraI = () => {
  return {
    type: 'cameraI',
  };
};

const cameraO = () => {
  return {
    type: 'cameraO',
  };
};

const motionI = () => {
  return {
    type: 'motionI',
  };
};

const motionO = () => {
  return {
    type: 'motionO',
  };
};

const doorbell = () => {
  return {
    type: 'doorbell',
  };
};

const lock = () => {
  return {
    type: 'lock',
  };
};

const sirenI = () => {
  return {
    type: 'sirenI',
  };
};

const sirenO = () => {
  return {
    type: 'sirenO',
  };
};

const smoke = () => {
  return {
    type: 'smoke',
  };
};

const windowSensor = () => {
  return {
    type: 'windowSensor',
  };
};

const gardenTemp = () => {
  return {
    type: 'gardenTemp',
  };
};

const heatingTemp = () => {
  return {
    type: 'heatingTemp',
  };
};

const innerLightsTemp = () => {
  return {
    type: 'innerLightsTemp',
  };
};

const lightbulbsTemp = () => {
  return {
    type: 'lightbulbsTemp',
  };
};

const securityTemp = () => {
  return {
    type: 'securityTemp',
  };
};

const resetAll = () => {
  return {
    type: 'resetAll',
  };
};

const resetSome = (input) => {
  return {
    type: 'resetSome',
    payload: input,
  };
};

const forceTrue = (input) => {
  return {
    type: 'forceTrue',
    payload: input,
  };
};

const selectionActionsContainer = {
  garden,
  heating,
  innerLights,
  light,
  lightbulbs,
  security,
  e14W,
  e14A,
  e14M,
  e27W,
  e27A,
  e27M,
  gu10W,
  gu10A,
  gu10M,
  gardenSpot,
  gardenStrip,
  pathLightM,
  pathLightW,
  wallGardenM,
  wallGardenW,
  ceilingM,
  ceilingA,
  plugD,
  plugN,
  recSpotA,
  recSpotM,
  recSpotW,
  recSwitchD,
  recSwitchN,
  strip,
  surfSpotA,
  surfSpotM,
  tableLamp,
  wallA,
  wallM,
  heatActor12Motorized,
  heatActor24_06,
  heatActor24_10,
  heatActor230_06,
  heatActor230_10,
  radiator,
  thermostatWired24,
  thermostatWired230,
  thermostatWireless,
  cameraI,
  cameraO,
  motionI,
  motionO,
  doorbell,
  lock,
  sirenI,
  sirenO,
  smoke,
  windowSensor,
  gardenTemp,
  heatingTemp,
  innerLightsTemp,
  lightbulbsTemp,
  securityTemp,
  resetAll,
  resetSome,
  forceTrue,
};

export default selectionActionsContainer;
