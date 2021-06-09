import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Heating() {
  const [radiator, setRadiator] = useState(false);
  const [thermostatWired230, setThermostatWired230] = useState(false);
  const [thermostatWired24, setThermostatWired24] = useState(false);
  const [thermostatWireless, setThermostatWireless] = useState(false);

  const [heatActor12Motorized, setHeatActor12Motorized] = useState(false);
  const [heatActor24_06, setHeatActor24_06] = useState(false);
  const [heatActor24_10, setHeatActor24_10] = useState(false);
  const [heatActor230_06, setHeatActor230_06] = useState(false);
  const [heatActor230_10, setHeatActor230_10] = useState(false);

  const [boxThermostat, setBoxThermostat] = useState(false);
  const [boxHeatActors, setBoxHeatActors] = useState(false);

  const [innerLights, setInnerLights] = useState(false);
  const [garden, setGarden] = useState(false);
  const [light, setLight] = useState(false);
  const [security, setSecurity] = useState(false);
  const [lightbulbs, setLightbulbs] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let radiatorSession = sessionStorage.getItem('radiator') === 'true';
    let thermostatWired230Session =
      sessionStorage.getItem('thermostatWired230') === 'true';
    let thermostatWired24Session =
      sessionStorage.getItem('thermostatWired24') === 'true';
    let thermostatWirelessSession =
      sessionStorage.getItem('thermostatWireless') === 'true';
    let heatActor12MotorizedSession =
      sessionStorage.getItem('heatActor12Motorized') === 'true';
    let heatActor24_06Session =
      sessionStorage.getItem('heatActor24_06') === 'true';
    let heatActor24_10Session =
      sessionStorage.getItem('heatActor24_10') === 'true';
    let heatActor230_06Session =
      sessionStorage.getItem('heatActor230_06') === 'true';
    let heatActor230_10Session =
      sessionStorage.getItem('heatActor230_10') === 'true';

    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let lightSession = sessionStorage.getItem('light') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';
    let lightbulbsSession = sessionStorage.getItem('lightbulbs') === 'true';

    setRadiator(radiatorSession);
    setThermostatWired230(thermostatWired230Session);
    setThermostatWired24(thermostatWired24Session);
    setThermostatWireless(thermostatWirelessSession);
    setHeatActor12Motorized(heatActor12MotorizedSession);
    setHeatActor24_06(heatActor24_06Session);
    setHeatActor24_10(heatActor24_10Session);
    setHeatActor230_06(heatActor230_06Session);
    setHeatActor230_10(heatActor230_10Session);

    setInnerLights(innerLightsSession);
    setGarden(gardenSession);
    setLight(lightSession);
    setSecurity(securitySession);
    setLightbulbs(lightbulbsSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('radiator', radiator);
    sessionStorage.setItem('thermostatWired230', thermostatWired230);
    sessionStorage.setItem('thermostatWired24', thermostatWired24);
    sessionStorage.setItem('thermostatWireless', thermostatWireless);
    sessionStorage.setItem('heatActor12Motorized', heatActor12Motorized);
    sessionStorage.setItem('heatActor24_06', heatActor24_06);
    sessionStorage.setItem('heatActor24_10', heatActor24_10);
    sessionStorage.setItem('heatActor230_06', heatActor230_06);
    sessionStorage.setItem('heatActor230_10', heatActor230_10);

    if (garden) return history.push('/gartenbeleuchtung');
    if (innerLights) return history.push('/innenbeleuchtung');
    if (lightbulbs) return history.push('/gluehbirnen');
    if (light) return history.push('/beleuchtung');
    return history.push('/kategorien');
  };

  const next = () => {
    sessionStorage.setItem('radiator', radiator);
    sessionStorage.setItem('thermostatWired230', thermostatWired230);
    sessionStorage.setItem('thermostatWired24', thermostatWired24);
    sessionStorage.setItem('thermostatWireless', thermostatWireless);
    sessionStorage.setItem('heatActor12Motorized', heatActor12Motorized);
    sessionStorage.setItem('heatActor24_06', heatActor24_06);
    sessionStorage.setItem('heatActor24_10', heatActor24_10);
    sessionStorage.setItem('heatActor230_06', heatActor230_06);
    sessionStorage.setItem('heatActor230_10', heatActor230_10);

    if (security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input, type) => {
    if (input === 'radiator') {
      setBoxHeatActors(false);
      setBoxThermostat(false);
      return setRadiator(!radiator);
    }
    if (type === 'thermostat') {
      setHeatActor230_06(false);
      setHeatActor230_10(false);
      setHeatActor24_06(false);
      setHeatActor24_10(false);
      setHeatActor12Motorized(false);
    }
    if (type === 'actor') {
      setThermostatWired230(false);
      setThermostatWired24(false);
      setThermostatWireless(false);
    }
    if (input === 'thermostatWired230') {
      setThermostatWired24(false);
      setThermostatWireless(false);
      return setThermostatWired230(!thermostatWired230);
    }
    if (input === 'thermostatWired24') {
      setThermostatWired230(false);
      setThermostatWireless(false);
      return setThermostatWired24(!thermostatWired24);
    }
    if (input === 'thermostatWireless') {
      setThermostatWired24(false);
      setThermostatWired230(false);
      return setThermostatWireless(!thermostatWireless);
    }
    if (input === 'heatActor12Motorized') {
      setHeatActor230_06(false);
      setHeatActor230_10(false);
      setHeatActor24_06(false);
      setHeatActor24_10(false);
      return setHeatActor12Motorized(!heatActor12Motorized);
    }
    if (input === 'heatActor24_06') {
      setHeatActor230_06(false);
      setHeatActor230_10(false);
      setHeatActor12Motorized(false);
      setHeatActor24_10(false);
      return setHeatActor24_06(!heatActor24_06);
    }
    if (input === 'heatActor24_10') {
      setHeatActor230_06(false);
      setHeatActor230_10(false);
      setHeatActor12Motorized(false);
      setHeatActor24_06(false);
      return setHeatActor24_10(!heatActor24_10);
    }
    if (input === 'heatActor230_06') {
      setHeatActor24_10(false);
      setHeatActor230_10(false);
      setHeatActor12Motorized(false);
      setHeatActor24_06(false);
      return setHeatActor230_06(!heatActor230_06);
    }
    if (input === 'heatActor230_10') {
      setHeatActor24_10(false);
      setHeatActor230_06(false);
      setHeatActor12Motorized(false);
      setHeatActor24_06(false);
      return setHeatActor230_10(!heatActor230_10);
    }
  };

  const openBox = (type) => {
    if (type === 'thermostat') {
      setBoxThermostat(!boxThermostat);
      setBoxHeatActors(false);
      return;
    }
    if (type === 'heatActors') {
      setBoxHeatActors(!boxHeatActors);
      setBoxThermostat(false);
      return;
    }
  };

  return (
    <div className="windowContainer">
      <div className="spaceLeft"></div>
      <div className="center">
        <header>
          <h1 className="stripe mgt1">Heizungssteuerung:</h1>
        </header>
        <div className="configContainer">
          <div className="heatingContainer mgHeating">
            <div
              onClick={() => handleClick('radiator', 'none')}
              className={`typeBox radiator ${radiator ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Heizkörperthermostat</div>
            </div>
            <div
              onClick={() => openBox('thermostat')}
              className={`typeBox thermostat ${
                thermostatWired230 || thermostatWired24 || thermostatWireless
                  ? 'selected'
                  : ''
              }`}
            >
              <img src={placeholder} />
              <div>Wandthermostat</div>
            </div>
            <div
              onClick={() => openBox('heatActors')}
              className={`typeBox heatActors ${
                heatActor12Motorized ||
                heatActor24_06 ||
                heatActor24_10 ||
                heatActor230_06 ||
                heatActor230_10
                  ? 'selected'
                  : ''
              }`}
            >
              <img src={placeholder} />
              <div>Fußbodenheizungsaktor</div>
            </div>
            {boxThermostat && (
              <div className="boxThermostat">
                <div
                  onClick={() =>
                    handleClick('thermostatWired230', 'thermostat')
                  }
                  className={`typeBox thermostatWired230 ${
                    thermostatWired230 ? 'selected' : ''
                  }`}
                >
                  <img src={placeholder} />
                  <div>Thermostat 230V (verkabelt)</div>
                </div>
                <div
                  onClick={() => handleClick('thermostatWired24', 'thermostat')}
                  className={`typeBox thermostatWired24 ${
                    thermostatWired24 ? 'selected' : ''
                  }`}
                >
                  <img src={placeholder} />
                  <div>Thermostat 24V (verkabelt)</div>
                </div>
                <div
                  onClick={() =>
                    handleClick('thermostatWireless', 'thermostat')
                  }
                  className={`typeBox thermostatWireless ${
                    thermostatWireless ? 'selected' : ''
                  }`}
                >
                  <img src={placeholder} />
                  <div>Thermostat (kabellos)</div>
                </div>
              </div>
            )}
            {boxHeatActors && (
              <div className="boxHeatActors">
                <div
                  onClick={() => handleClick('heatActor24_06', 'actor')}
                  className={`typeBox heatActor24_06 ${
                    heatActor24_06 ? 'selected' : ''
                  }`}
                >
                  <img src={placeholder} />
                  <div>6 Stellantriebe, 24V</div>
                </div>
                <div
                  onClick={() => handleClick('heatActor24_10', 'actor')}
                  className={`typeBox heatActor24_10 ${
                    heatActor24_10 ? 'selected' : ''
                  }`}
                >
                  <img src={placeholder} />
                  <div>10 Stellantriebe, 24V</div>
                </div>
                <div
                  onClick={() => handleClick('heatActor230_06', 'actor')}
                  className={`typeBox heatActor230_06 ${
                    heatActor230_06 ? 'selected' : ''
                  }`}
                >
                  <img src={placeholder} />
                  <div>6 Stellantriebe, 230V</div>
                </div>
                <div
                  onClick={() => handleClick('heatActor230_10', 'actor')}
                  className={`typeBox heatActor230_10 ${
                    heatActor230_10 ? 'selected' : ''
                  }`}
                >
                  <img src={placeholder} />
                  <div>10 Stellantriebe, 230V</div>
                </div>
                <div
                  onClick={() => handleClick('heatActor12Motorized', 'actor')}
                  className={`typeBox heatActor12Motorized ${
                    heatActor12Motorized ? 'selected' : ''
                  }`}
                >
                  <img src={placeholder} />
                  <div>12 Stellantriebe, motorisiert</div>
                </div>
              </div>
            )}
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
      <div className="spaceRight  "></div>
    </div>
  );
}

export default Heating;
