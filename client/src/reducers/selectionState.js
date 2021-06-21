import selectionActionsContainer from '../actions';

const initialState = {
  garden: false,
  heating: false,
  innerLights: false,
  light: false,
  lightbulbs: false,
  security: false,
  e14W: false,
  e14A: false,
  e14M: false,
  e27W: false,
  e27A: false,
  e27M: false,
  gu10W: false,
  gu10A: false,
  gu10M: false,
  gardenSpot: false,
  gardenStrip: false,
  pathLightM: false,
  pathLightW: false,
  wallGardenM: false,
  wallGardenW: false,
  ceilingM: false,
  ceilingA: false,
  plugD: false,
  plugM: false,
  recSpotA: false,
  recSpotM: false,
  recSpotW: false,
  recSwitchD: false,
  recSwitchN: false,
  strip: false,
  surfSpotA: false,
  surfSpotM: false,
  tableLamp: false,
  wallA: false,
  wallM: false,
  heatActor12Motorized: false,
  heatActor24_06: false,
  heatActor24_10: false,
  heatActor230_06: false,
  heatActor230_10: false,
  radiator: false,
  thermostatWired24: false,
  thermostatWired230: false,
  thermostatWireless: false,
  cameraI: false,
  cameraO: false,
  motionI: false,
  motionO: false,
  doorbell: false,
  lock: false,
  sirenI: false,
  sirenO: false,
  smoke: false,
  gardenTemp: false,
  heatingTemp: false,
  innerLightsTemp: false,
  lightbulbsTemp: false,
  securityTemp: false,
};

const selectionStateReducer = (state = initialState, action) => {
  if (action.type === 'resetAll') {
    return (state = initialState);
  }
  if (action.type === 'resetSome') {
    return {
      ...state,
      [action.payload]: false,
    };
  }
  return {
    ...state,
    [action.type]: !state[action.type],
  };
};

export default selectionStateReducer;
