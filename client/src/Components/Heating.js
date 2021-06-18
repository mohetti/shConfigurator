import radiatorImg from '../images/heating/radiator.png';
import thermostatImg from '../images/heating/thermostat.png';
import underfloorHeatingImg from '../images/heating/underfloorHeating.png';

import radiatorImgW from '../images/heating/radiatorW.png';
import thermostatImgW from '../images/heating/thermostatW.png';
import underfloorHeatingImgW from '../images/heating/underfloorHeatingW.png';

import thermostatWiredImg from '../images/heating/thermostatWired.png';
import thermostatWirelessImg from '../images/heating/thermostatWireless.png';

import thermostatWiredImgW from '../images/heating/thermostatWiredW.png';
import thermostatWirelessImgW from '../images/heating/thermostatWirelessW.png';

import heatingActorImg from '../images/heating/heatingActor.png';
import heatingActorImgW from '../images/heating/heatingActorW.png';

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

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

    radiator ||
    thermostatWired230 ||
    thermostatWired24 ||
    thermostatWireless ||
    heatActor12Motorized ||
    heatActor24_06 ||
    heatActor24_10 ||
    heatActor230_06 ||
    heatActor230_10
      ? sessionStorage.setItem('heatingTemp', true)
      : sessionStorage.setItem('heatingTemp', false);

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

  const selectThermostatBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('thermostatWired230', 'thermostat')}
          className={`contentBox cursor ${thermostatWired230 && 'selected'}`}
        >
          {thermostatWired230 ? (
            <img src={thermostatWiredImgW} />
          ) : (
            <img src={thermostatWiredImg} />
          )}
          <div>Thermostat 230V (verkabelt)</div>
        </div>
        <div
          onClick={() => handleClick('thermostatWired24', 'thermostat')}
          className={`contentBox cursor ${thermostatWired24 && 'selected'}`}
        >
          {thermostatWired24 ? (
            <img src={thermostatWiredImgW} />
          ) : (
            <img src={thermostatWiredImg} />
          )}
          <div>Thermostat 24V (verkabelt)</div>
        </div>
        <div
          onClick={() => handleClick('thermostatWireless', 'thermostat')}
          className={`contentBox cursor ${thermostatWireless && 'selected'}`}
        >
          {thermostatWireless ? (
            <img src={thermostatWirelessImgW} />
          ) : (
            <img src={thermostatWirelessImg} />
          )}
          <div>Thermostat (kabellos)</div>
        </div>
      </div>
    );
  };

  const selectHeatActorBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('heatActor24_06', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            heatActor24_06 && 'selected'
          }`}
        >
          {heatActor24_06 ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>6 Stellantriebe, 24V</div>
        </div>
        <div
          onClick={() => handleClick('heatActor24_10', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            heatActor24_10 && 'selected'
          }`}
        >
          {heatActor24_10 ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>10 Stellantriebe, 24V</div>
        </div>
        <div
          onClick={() => handleClick('heatActor230_06', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            heatActor230_06 && 'selected'
          }`}
        >
          {heatActor230_06 ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>6 Stellantriebe, 230V</div>
        </div>
        <div
          onClick={() => handleClick('heatActor230_10', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            heatActor230_10 && 'selected'
          }`}
        >
          {heatActor230_10 ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>10 Stellantriebe, 230V</div>
        </div>
        <div
          onClick={() => handleClick('heatActor12Motorized', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            heatActor12Motorized && 'selected'
          }`}
        >
          {heatActor12Motorized ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>12 Stellantriebe, motorisiert</div>
        </div>
      </div>
    );
  };

  const selectThermostatSmallWidth = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('thermostatWired230', 'thermostat')}
          className={`addSelectRadius ${thermostatWired230 && 'selected'}`}
        >
          230V, verkabelt
        </div>
        <div
          onClick={() => handleClick('thermostatWired24', 'thermostat')}
          className={`addSelectRadius ${thermostatWired24 && 'selected'}`}
        >
          24V, verkabelt
        </div>
        <div
          onClick={() => handleClick('thermostatWireless', 'thermostat')}
          className={`addSelectRadius ${thermostatWireless && 'selected'}`}
        >
          Thermostat kabellos
        </div>
      </div>
    );
  };

  const selectHeatActorSmallWidth = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('heatActor24_06', 'actor')}
          className={`addSelectRadius ${heatActor24_06 && 'selected'}`}
        >
          6 Stellantriebe, 24V
        </div>
        <div
          onClick={() => handleClick('heatActor24_10', 'actor')}
          className={`addSelectRadius ${heatActor24_10 && 'selected'}`}
        >
          10 Stellantriebe, 24V
        </div>
        <div
          onClick={() => handleClick('heatActor230_06', 'actor')}
          className={`addSelectRadius ${heatActor230_06 && 'selected'}`}
        >
          6 Stellantriebe, 230V
        </div>
        <div
          onClick={() => handleClick('heatActor230_10', 'actor')}
          className={`addSelectRadius ${heatActor230_06 && 'selected'}`}
        >
          10 Stellantriebe, 230V
        </div>
        <div
          onClick={() => handleClick('heatActor12Motorized', 'actor')}
          className={`addSelectRadius ${heatActor12Motorized && 'selected'}`}
        >
          12 Stellantriebe, motorisiert
        </div>
      </div>
    );
  };

  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe">Heizungssteuerung:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => handleClick('radiator', 'none')}
            className={`contentBox cursor ${radiator && 'selected'}`}
          >
            {radiator ? <img src={radiatorImg} /> : <img src={radiatorImg} />}
            <div>Heizkörperthermostat</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => openBox('thermostat')}
            className={`contentBox cursor ${boxThermostat && 'borderHghl'} ${
              thermostatWired230 || thermostatWired24 || thermostatWireless
                ? 'selected'
                : ''
            }`}
          >
            {thermostatWired230 || thermostatWired24 || thermostatWireless ? (
              <img src={thermostatImgW} />
            ) : (
              <img src={thermostatImg} />
            )}
            <div>Wandthermostat</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxThermostat && selectThermostatSmallWidth()}
            {boxThermostat && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxThermostat && selectThermostatSmallWidth()}
              {boxThermostat && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => openBox('heatActors')}
            className={`contentBox cursor ${boxHeatActors && 'borderHghl'} ${
              heatActor12Motorized ||
              heatActor24_06 ||
              heatActor24_10 ||
              heatActor230_06 ||
              heatActor230_10
                ? 'selected'
                : ''
            }`}
          >
            {heatActor12Motorized ||
            heatActor24_06 ||
            heatActor24_10 ||
            heatActor230_06 ||
            heatActor230_10 ? (
              <img src={underfloorHeatingImgW} />
            ) : (
              <img src={underfloorHeatingImg} />
            )}
            <div>Fußbodenheizungsaktor</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxHeatActors && selectHeatActorSmallWidth()}
            {boxHeatActors && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxHeatActors && selectHeatActorSmallWidth()}
              {boxHeatActors && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={501}>
            <MediaQuery maxWidth={767}>
              <div className="forceFlexWrap"></div>
              {boxHeatActors && selectHeatActorSmallWidth()}
              {boxThermostat && selectThermostatSmallWidth()}
              {boxHeatActors && <div className="forceFlexWrap"></div>}
              {boxThermostat && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={769}>
            <MediaQuery maxWidth={1023}>
              <div className="forceFlexWrap"></div>
              {boxHeatActors && selectHeatActorSmallWidth()}
              {boxThermostat && selectThermostatSmallWidth()}
              {boxHeatActors && <div className="forceFlexWrap"></div>}
              {boxThermostat && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={1024}>
            <div className="forceFlexWrap"></div>
            {boxThermostat && selectThermostatBigWidth()}
            {boxHeatActors && selectHeatActorBigWidth()}
          </MediaQuery>
        </div>
        <div className="btnMultiple">
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
