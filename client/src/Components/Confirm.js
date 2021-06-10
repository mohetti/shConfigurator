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
        console.log(res.data);
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
        <div className="confirmCategoryContainer">
          <h1>Bestätige Deine Auswahl</h1>
          {light && (
            <div>
              <div>
                <h2>Beleuchtung:</h2>
              </div>
              {lightbulbs && (
                <div>
                  <div>
                    <h3>Glühbirnen: </h3>
                  </div>
                  <div>
                    <ul>
                      {e27W && <li>Glühbirne E27, dimmbar</li>}
                      {e27A && <li>Glühbirne E27, dimmbares Weißlicht</li>}
                      {e27M && <li>Glühbirne E27, Weiß- und Farblicht</li>}
                      {e14W && <li>Glühbirne E14, dimmbar</li>}
                      {e14A && <li>Glühbirne E14, dimmbar</li>}
                      {e14M && <li>Glühbirne E14, dimmbar</li>}
                      {gu10W && <li>GU10 Spot, dimmbar</li>}
                      {gu10A && <li>GU10 Spot, dimmbar</li>}
                      {gu10M && <li>GU10 Spot, dimmbar</li>}
                    </ul>
                  </div>
                </div>
              )}
              {innerLights && (
                <div>
                  <div>
                    <h3>Innenbeleuchtung:</h3>
                  </div>
                  <div>
                    <ul>
                      {strip && <li>Leuchtstreifen</li>}
                      {tableLamp && <li>Tischlampe</li>}
                      {plugN && <li>Zwischenstecker</li>}
                      {plugD && <li>Zwischenstecker mit Dimmfunktion</li>}
                      {recSpotW && <li>Einbauspot, dimmbar</li>}
                      {recSpotA && <li>Einbauspot, dimmbares Weißlicht</li>}
                      {recSpotM && <li>Einbauspot, Weiß- und Farblicht</li>}
                      {surfSpotA && <li>Spotlampe, dimmbares Weißlicht</li>}
                      {surfSpotM && <li>Spotlampe, Weiß- und Farblicht</li>}
                      {ceilingA && <li>Deckenleuchte, dimmbares Weißlicht</li>}
                      {ceilingM && <li>Deckenleuchte, Weiß- und Farblicht</li>}
                      {recSwitchN && <li>Unterputzaktor</li>}
                      {recSwitchD && <li>Unterputzaktor mit Dimmfunktion</li>}
                      {wallA && <li>Wandleuchte, dimmbares Weißlicht</li>}
                      {wallM && <li>Wandleuchte, Weiß- und Farblicht</li>}
                    </ul>
                  </div>
                </div>
              )}
              {garden && (
                <div>
                  <div>
                    <h3>Gartenbeleuchtung:</h3>
                  </div>
                  <div>
                    <ul>
                      {pathLightW && <li>Wegeleuchte, dimmbar</li>}
                      {pathLightM && <li>Wegeleuchte, Weiß- und Farblicht</li>}
                      {gardenSpot && <li>Gartenspot</li>}
                      {gardenStrip && <li>Leuchtsteifen für den Garten</li>}
                      {wallGardenW && <li>Wandleuchte, dimmbar</li>}
                      {wallGardenM && <li>Wandleuchte, Weiß- und Farblicht</li>}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
          {heating && (
            <div>
              <div>
                <h2>Heizung: </h2>
              </div>
              <div>
                <ul>
                  {radiator && <li>Heizkörperthermostat</li>}
                  {thermostatWired230 && <li>Wandthermostat, 230V</li>}
                  {thermostatWired24 && <li>Wandthermostat, 24V</li>}
                  {thermostatWireless && <li>Wandthermostat, Funk</li>}
                  {heatActor230_06 && (
                    <li>Fußbodenheizungsaktor, 230V | 6 Stellantriebe</li>
                  )}
                  {heatActor230_10 && (
                    <li>Fußbodenheizungsaktor, 230V | 10 Stellantriebe</li>
                  )}
                  {heatActor24_06 && (
                    <li>Fußbodenheizungsaktor, 24V | 6 Stellantriebe</li>
                  )}
                  {heatActor24_10 && (
                    <li>Fußbodenheizungsaktor, 24V | 10 Stellantriebe</li>
                  )}
                  {heatActor12Motorized && (
                    <li>
                      Fußbodenheizungsaktor, motorisiert | 12 Stellantriebe
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
          {security && (
            <div>
              <div>
                <h2>Sicherheit: </h2>
              </div>
              <div>
                <ul>
                  {motionI && <li>Bewegungsmelder, innen</li>}
                  {windowSensor && <li>Tür- und Fensterkontakt</li>}
                  {sirenI && <li>Alarmsirene, innen</li>}
                  {smoke && <li>Rauchwarnmelder</li>}
                  {cameraI && <li>Sicherheitskamera, innen</li>}
                  {lock && <li>Türschloss</li>}
                  {motionO && <li>Bewegungsmelder, außen</li>}
                  {sirenO && <li>Alarmsirene, außen</li>}
                  {cameraO && <li>Sicherheitskamera, außen</li>}
                  {doorbell && <li>Video-Türklingel</li>}
                </ul>
              </div>
            </div>
          )}
          <div>
            <button onClick={backendRequest}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Confirm;
