import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000/result',
});

function Confirm() {
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  // categories
  const [light, setLight] = useState(
    sessionStorage.getItem('light') === 'true'
  );
  const [heating, setHeating] = useState(
    sessionStorage.getItem('heating') === 'true'
  );
  const [security, setSecurity] = useState(
    sessionStorage.getItem('security') === 'true'
  );

  // lights
  const [lightbulbs, setLightbulbs] = useState(
    sessionStorage.getItem('lightbulbs') === 'true'
  );
  const [innerLights, setInnerLights] = useState(
    sessionStorage.getItem('innerLights') === 'true'
  );
  const [garden, setGarden] = useState(
    sessionStorage.getItem('garden') === 'true'
  );

  // temps
  const [innerLightsTemp, setInnerLightsTemp] = useState(
    sessionStorage.getItem('innerLightsTemp') === 'true'
  );
  const [lightbulbsTemp, setLightbulbsTemp] = useState(
    sessionStorage.getItem('lightbulbsTemp') === 'true'
  );
  const [gardenTemp, setGardenTemp] = useState(
    sessionStorage.getItem('gardenTemp') === 'true'
  );
  const [heatingTemp, setHeatingTemp] = useState(
    sessionStorage.getItem('heatingTemp') === 'true'
  );
  const [securityTemp, setSecurityTemp] = useState(
    sessionStorage.getItem('securityTemp') === 'true'
  );

  // lightbulbs
  const [e27W, setE27W] = useState(sessionStorage.getItem('e27W') === 'true');
  const [e27A, setE27A] = useState(sessionStorage.getItem('e27A') === 'true');
  const [e27M, setE27M] = useState(sessionStorage.getItem('e27M') === 'true');
  const [e14W, setE14W] = useState(sessionStorage.getItem('e14W') === 'true');
  const [e14A, setE14A] = useState(sessionStorage.getItem('e14A') === 'true');
  const [e14M, setE14M] = useState(sessionStorage.getItem('e14M') === 'true');
  const [gu10W, setGu10W] = useState(
    sessionStorage.getItem('gu10W') === 'true'
  );
  const [gu10A, setGu10A] = useState(
    sessionStorage.getItem('gu10A') === 'true'
  );
  const [gu10M, setGu10M] = useState(
    sessionStorage.getItem('gu10M') === 'true'
  );

  // innerlights
  const [tableLamp, setTableLamp] = useState(
    sessionStorage.getItem('tableLamp') === 'true'
  );
  const [strip, setStrip] = useState(
    sessionStorage.getItem('strip') === 'true'
  );
  const [plugN, setPlugN] = useState(
    sessionStorage.getItem('plugN') === 'true'
  );
  const [plugD, setPlugD] = useState(
    sessionStorage.getItem('plugD') === 'true'
  );
  const [recSpotW, setRecSpotW] = useState(
    sessionStorage.getItem('recSpotW') === 'true'
  );
  const [recSpotA, setRecSpotA] = useState(
    sessionStorage.getItem('recSpotA') === 'true'
  );
  const [recSpotM, setRecSpotM] = useState(
    sessionStorage.getItem('recSpotM') === 'true'
  );
  const [surfSpotA, setSurfSpotA] = useState(
    sessionStorage.getItem('surfSpotA') === 'true'
  );
  const [surfSpotM, setSurfSpotM] = useState(
    sessionStorage.getItem('surfSpotM') === 'true'
  );
  const [ceilingA, setCeilingA] = useState(
    sessionStorage.getItem('ceilingA') === 'true'
  );
  const [ceilingM, setCeilingM] = useState(
    sessionStorage.getItem('ceilingM') === 'true'
  );
  const [recSwitchN, setRecSwitchN] = useState(
    sessionStorage.getItem('recSwitchN') === 'true'
  );
  const [recSwitchD, setRecSwitchD] = useState(
    sessionStorage.getItem('recSwitchD') === 'true'
  );
  const [wallA, setWallA] = useState(
    sessionStorage.getItem('wallA') === 'true'
  );
  const [wallM, setWallM] = useState(
    sessionStorage.getItem('wallM') === 'true'
  );

  // gardenlights
  const [pathLightW, setPathLightW] = useState(
    sessionStorage.getItem('pathLightW') === 'true'
  );
  const [pathLightM, setPathLightM] = useState(
    sessionStorage.getItem('pathLightM') === 'true'
  );
  const [gardenSpot, setGardenSpot] = useState(
    sessionStorage.getItem('gardenSpot') === 'true'
  );
  const [wallGardenW, setWallGardenW] = useState(
    sessionStorage.getItem('wallGardenW') === 'true'
  );
  const [wallGardenM, setWallGardenM] = useState(
    sessionStorage.getItem('wallGardenM') === 'true'
  );
  const [gardenStrip, setGardenStrip] = useState(
    sessionStorage.getItem('gardenStrip') === 'true'
  );

  // heating
  const [radiator, setRadiator] = useState(
    sessionStorage.getItem('radiator') === 'true'
  );
  const [thermostatWired230, setThermostatWired230] = useState(
    sessionStorage.getItem('thermostatWired230') === 'true'
  );
  const [thermostatWired24, setThermostatWired24] = useState(
    sessionStorage.getItem('thermostatWired24') === 'true'
  );
  const [thermostatWireless, setThermostatWireless] = useState(
    sessionStorage.getItem('thermostatWireless') === 'true'
  );
  const [heatActor12Motorized, setHeatActor12Motorized] = useState(
    sessionStorage.getItem('heatActor12Motorized') === 'true'
  );
  const [heatActor24_06, setHeatActor24_06] = useState(
    sessionStorage.getItem('heatActor24_06') === 'true'
  );
  const [heatActor24_10, setHeatActor24_10] = useState(
    sessionStorage.getItem('heatActor24_10') === 'true'
  );
  const [heatActor230_06, setHeatActor230_06] = useState(
    sessionStorage.getItem('heatActor230_06') === 'true'
  );
  const [heatActor230_10, setHeatActor230_10] = useState(
    sessionStorage.getItem('heatActor230_10') === 'true'
  );

  // security
  const [motionI, setMotionI] = useState(
    sessionStorage.getItem('motionI') === 'true'
  );
  const [motionO, setMotionO] = useState(
    sessionStorage.getItem('motionO') === 'true'
  );
  const [windowSensor, setWindowSensor] = useState(
    sessionStorage.getItem('windowSensor') === 'true'
  );
  const [sirenI, setSirenI] = useState(
    sessionStorage.getItem('sirenI') === 'true'
  );
  const [sirenO, setSirenO] = useState(
    sessionStorage.getItem('sirenO') === 'true'
  );
  const [smoke, setSmoke] = useState(
    sessionStorage.getItem('smoke') === 'true'
  );
  const [lock, setLock] = useState(sessionStorage.getItem('lock') === 'true');
  const [doorbell, setDoorbell] = useState(
    sessionStorage.getItem('doorbell') === 'true'
  );
  const [cameraI, setCameraI] = useState(
    sessionStorage.getItem('cameraI') === 'true'
  );
  const [cameraO, setCameraO] = useState(
    sessionStorage.getItem('cameraO') === 'true'
  );

  const backendRequest = () => {
    setLoading(true);
    let categories = {
      light: light,
      heating: heating,
      security: security,
    };

    let products = [
      e27W && 'e27W',
      e27A && 'e27A',
      e27M && 'e27M',
      e14W && 'e14W',
      e14A && 'e14A',
      e14M && 'e14M',
      gu10W && 'gu10W',
      gu10A && 'gu10A',
      gu10M && 'gu10M',
      tableLamp && 'tableLamp',
      strip && 'strip',
      plugN && 'plugN',
      plugD && 'plugD',
      recSpotW && 'recSpotW',
      recSpotM && 'recSpotM',
      recSpotA && 'recSpotA',
      surfSpotA && 'surfSpotA',
      surfSpotM && 'surfSpotM',
      ceilingA && 'ceilingA',
      ceilingM && 'ceilingM',
      recSwitchN && 'recSwitchN',
      recSwitchD && 'recSwitchD',
      wallA && 'wallA',
      wallM && 'wallM',
      pathLightW && 'pathLightW',
      pathLightM && 'pathLightM',
      gardenSpot && 'gardenSpot',
      wallGardenW && 'wallGardenW',
      wallGardenM && 'wallGardenM',
      gardenStrip && 'gardenStrip',
      radiator && 'radiator',
      thermostatWired230 && 'thermostatWired230',
      thermostatWired24 && 'thermostatWired24',
      thermostatWireless && 'thermostatWireless',
      heatActor12Motorized && 'heatActor12Motorized',
      heatActor24_06 && 'heatActor24_06',
      heatActor24_10 && 'heatActor24_10',
      heatActor230_06 && 'heatActor230_06',
      heatActor230_10 && 'heatActor230_10',
      motionI && 'motionI',
      motionO && 'motionO',
      windowSensor && 'windowSensor',
      sirenI && 'sirenI',
      sirenO && 'sirenO',
      smoke && 'smoke',
      lock && 'lock',
      doorbell && 'doorbell',
      cameraI && 'cameraI',
      cameraO && 'cameraO',
      motionO && 'motionOZ',
      thermostatWireless && 'thermostatWirelessExt',
    ];

    let productsAdjusted = products.filter((x) => {
      return x !== false;
    });

    let transferData = { categories, productsAdjusted };

    api
      .post('/', transferData)
      .then((res) => {
        sessionStorage.setItem('overview', JSON.stringify(res.data));
        history.push('/overview');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="windowContainer">
          <div className="spaceLeft"></div>
          <div className="center">
            <h1 className="stripe mgt1 textCenter">Bestätige Deine Auswahl</h1>
            {(lightbulbsTemp || gardenTemp || innerLightsTemp) && (
              <div>
                <div>
                  <h2>Beleuchtung:</h2>
                </div>
                {lightbulbsTemp && (
                  <div>
                    <div>
                      <h3 className="line">Glühbirnen: </h3>
                    </div>
                    <div className="productContainer">
                      {e27W && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Glühbirne E27, dimmbar</div>
                        </div>
                      )}

                      {e27A && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Glühbirne E27, dimmbares Weißlicht</div>
                        </div>
                      )}

                      <div>
                        {e27M && (
                          <div className="productBox">
                            <img src={placeholder} />
                            <div>Glühbirne E27, Weiß- und Farblicht</div>
                          </div>
                        )}
                      </div>
                      {e14W && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Glühbirne E14, dimmbar</div>
                        </div>
                      )}
                      {e14A && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Glühbirne E14, dimmbar</div>
                        </div>
                      )}
                      {e14M && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Glühbirne E14, dimmbar</div>
                        </div>
                      )}
                      {gu10W && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>GU10 Spot, dimmbar</div>
                        </div>
                      )}
                      {gu10A && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>GU10 Spot, dimmbar</div>
                        </div>
                      )}
                      {gu10M && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>GU10 Spot, dimmbar</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {innerLightsTemp && (
                  <div>
                    <div>
                      <h3 className="line">Innenbeleuchtung:</h3>
                    </div>
                    <div className="productContainer">
                      {strip && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Leuchtstreifen</div>
                        </div>
                      )}
                      {tableLamp && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Tischlampe</div>
                        </div>
                      )}
                      {plugN && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Zwischenstecker</div>
                        </div>
                      )}
                      {plugD && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Zwischenstecker mit Dimmfunktion</div>
                        </div>
                      )}
                      {recSpotW && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Einbauspot, dimmbar</div>
                        </div>
                      )}
                      {recSpotA && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Einbauspot, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {recSpotM && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Einbauspot, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {surfSpotA && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Spotlampe, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {surfSpotM && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Spotlampe, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {ceilingA && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Deckenleuchte, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {ceilingM && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Deckenleuchte, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {recSwitchN && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Unterputzaktor</div>
                        </div>
                      )}
                      {recSwitchD && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Unterputzaktor mit Dimmfunktion</div>
                        </div>
                      )}
                      {wallA && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Wandleuchte, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {wallM && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Wandleuchte, Weiß- und Farblicht</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {gardenTemp && (
                  <div>
                    <div>
                      <h3 className="line">Gartenbeleuchtung:</h3>
                    </div>
                    <div className="productContainer">
                      {pathLightW && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Wegeleuchte, dimmbar</div>
                        </div>
                      )}
                      {pathLightM && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Wegeleuchte, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {gardenSpot && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Gartenspot</div>
                        </div>
                      )}
                      {gardenStrip && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Leuchtsteifen für den Garten</div>
                        </div>
                      )}
                      {wallGardenW && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Wandleuchte, dimmbar</div>
                        </div>
                      )}
                      {wallGardenM && (
                        <div className="productBox">
                          <img src={placeholder} />
                          <div>Wandleuchte, Weiß- und Farblicht</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {heatingTemp && (
              <div>
                <div>
                  <h2 className="line">Heizung: </h2>
                </div>
                <div className="productContainer">
                  {radiator && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Heizkörperthermostat</div>
                    </div>
                  )}
                  {thermostatWired230 && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Wandthermostat, 230V</div>
                    </div>
                  )}
                  {thermostatWired24 && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Wandthermostat, 24V</div>
                    </div>
                  )}
                  {thermostatWireless && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Wandthermostat, Funk</div>
                    </div>
                  )}
                  {heatActor230_06 && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Fußbodenheizungsaktor, 230V | 6 Stellantriebe</div>
                    </div>
                  )}
                  {heatActor230_10 && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Fußbodenheizungsaktor, 230V | 10 Stellantriebe</div>
                    </div>
                  )}
                  {heatActor24_06 && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Fußbodenheizungsaktor, 24V | 6 Stellantriebe</div>
                    </div>
                  )}
                  {heatActor24_10 && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Fußbodenheizungsaktor, 24V | 10 Stellantriebe</div>
                    </div>
                  )}
                  {heatActor12Motorized && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>
                        Fußbodenheizungsaktor, motorisiert | 12 Stellantriebe
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {securityTemp && (
              <div>
                <div>
                  <h2 className="line">Sicherheit: </h2>
                </div>
                <div className="productContainer">
                  {motionI && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Bewegungsmelder, innen</div>
                    </div>
                  )}
                  {windowSensor && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Tür- und Fensterkontakt</div>
                    </div>
                  )}
                  {sirenI && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Alarmsirene, innen</div>
                    </div>
                  )}
                  {smoke && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Rauchwarnmelder</div>
                    </div>
                  )}
                  {cameraI && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Sicherheitskamera, innen</div>
                    </div>
                  )}
                  {lock && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Türschloss</div>
                    </div>
                  )}
                  {motionO && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Bewegungsmelder, außen</div>
                    </div>
                  )}
                  {sirenO && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Alarmsirene, außen</div>
                    </div>
                  )}
                  {cameraO && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Sicherheitskamera, außen</div>
                    </div>
                  )}
                  {doorbell && (
                    <div className="productBox">
                      <img src={placeholder} />
                      <div>Video-Türklingel</div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="confirmBtnPos">
              <button className="btn" onClick={backendRequest}>
                Confirm
              </button>
            </div>
          </div>
          <div className="spaceRight"></div>
        </div>
      )}
    </div>
  );
}

export default Confirm;
