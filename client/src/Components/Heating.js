import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Heating() {
  const [radiator, setRadiator] = useState(false);
  const [thermostatWired230, setThermostatWired230] = useState(false);
  const [thermostatWired24, setThermostatWired24] = useState(false);
  const [thermostatWireless, setThermostatWireless] = useState(false);
  const [heatActors, setHeatActors] = useState(false);

  const [innerLights, setInnerLights] = useState(false);
  const [garden, setGarden] = useState(false);
  const [light, setLight] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let radiatorSession = sessionStorage.getItem('radiator') === 'true';
    let thermostatWired230Session =
      sessionStorage.getItem('thermostatWired230') === 'true';
    let thermostatWired24Session =
      sessionStorage.getItem('thermostatWired24') === 'true';
    let thermostatWirelessSession =
      sessionStorage.getItem('thermostatWireless') === 'true';
    let heatActorsSession = sessionStorage.getItem('heatActors') === 'true';

    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let lightSession = sessionStorage.getItem('light') === 'true';

    setRadiator(radiatorSession);
    setThermostatWired230(thermostatWired230Session);
    setThermostatWired24(thermostatWired24Session);
    setThermostatWireless(thermostatWirelessSession);
    setHeatActors(heatActorsSession);

    setInnerLights(innerLightsSession);
    setGarden(gardenSession);
    setLight(lightSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('radiator', radiator);
    sessionStorage.setItem('thermostatWired230', thermostatWired230);
    sessionStorage.setItem('thermostatWired24', thermostatWired24);
    sessionStorage.setItem('thermostatWireless', thermostatWireless);
    sessionStorage.setItem('heatActors', heatActors);

    if (garden) return history.push('/gartenbeleuchtung');
    if (innerLights) return history.push('/innenbeleuchtung');
    if (light) return history.push('/beleuchtung');
    return history.push('/kategorien');
  };

  const next = () => {
    sessionStorage.setItem('radiator', radiator);
    sessionStorage.setItem('thermostatWired230', thermostatWired230);
    sessionStorage.setItem('thermostatWired24', thermostatWired24);
    sessionStorage.setItem('thermostatWireless', thermostatWireless);
    sessionStorage.setItem('heatActors', heatActors);

    return history.push('/sicherheit');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input) => {
    if (input === 'radiator') return setRadiator(!radiator);
    if (input === 'thermostatWired230')
      return setThermostatWired230(!thermostatWired230);
    if (input === 'thermostatWired24')
      return setThermostatWired24(!thermostatWired24);
    if (input === 'thermostatWireless')
      return setThermostatWireless(!thermostatWireless);
    if (input === 'heatActors') return setHeatActors(!heatActors);
  };

  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Heizungslösungen:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="heatingContainer mgHeating">
          <div
            onClick={() => handleClick('radiator')}
            className={`typeBox radiator ${radiator ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Heizkörperthermostat</div>
          </div>
          <div
            onClick={() => handleClick('thermostatWired230')}
            className={`typeBox thermostatWired230 ${
              thermostatWired230 ? 'selected' : ''
            }`}
          >
            <img src={placeholder} />
            <div>Thermostat 230V (verkabelt)</div>
          </div>
          <div
            onClick={() => handleClick('thermostatWired24')}
            className={`typeBox thermostatWired24 ${
              thermostatWired24 ? 'selected' : ''
            }`}
          >
            <img src={placeholder} />
            <div>Thermostat 24V (verkabelt)</div>
          </div>
          <div
            onClick={() => handleClick('thermostatWireless')}
            className={`typeBox thermostatWireless ${
              thermostatWireless ? 'selected' : ''
            }`}
          >
            <img src={placeholder} />
            <div>Akzentlicht</div>
          </div>
          <div
            onClick={() => handleClick('heatActors')}
            className={`typeBox heatActors ${heatActors ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Fußbodenheizungsaktor</div>
          </div>
        </div>
        <div className="btnContainer">
          <button onClick={back} className="btn">
            Zurück
          </button>
          <button onClick={infos} className="btn">
            Mehr Infos
          </button>
          <button onClick={next} className="btn">
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Heating;
