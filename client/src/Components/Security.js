import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/*
      **********      NEXT STEPS      **********
      => Implementierung von den Zusatzinfos

*/

function Security() {
  const [motion, setMotion] = useState(false);
  const [windowSensor, setWindowSensor] = useState(false);
  const [siren, setSiren] = useState(false);
  const [smoke, setSmoke] = useState(false);
  const [lock, setLock] = useState(false);
  const [doorbell, setDoorbell] = useState(false);
  const [camera, setCamera] = useState(false);

  const [innerLights, setInnerLights] = useState(false);
  const [garden, setGarden] = useState(false);
  const [light, setLight] = useState(false);
  const [heating, setHeating] = useState(false);
  const [lightbulbs, setLightbulbs] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let motionSession = sessionStorage.getItem('motion') === 'true';
    let windowSensorSession = sessionStorage.getItem('windowSensor') === 'true';
    let sirenSession = sessionStorage.getItem('siren') === 'true';
    let smokeSession = sessionStorage.getItem('smoke') === 'true';
    let lockSession = sessionStorage.getItem('lock') === 'true';
    let doorbellSession = sessionStorage.getItem('doorbell') === 'true';
    let cameraSession = sessionStorage.getItem('camera') === 'true';

    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let lightSession = sessionStorage.getItem('light') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let lightbulbsSession = sessionStorage.getItem('lightbulbs') === 'true';

    setMotion(motionSession);
    setWindowSensor(windowSensorSession);
    setSiren(sirenSession);
    setSmoke(smokeSession);
    setLock(lockSession);
    setDoorbell(doorbellSession);
    setCamera(cameraSession);

    setInnerLights(innerLightsSession);
    setGarden(gardenSession);
    setLight(lightSession);
    setHeating(heatingSession);
    setLightbulbs(lightbulbsSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('motion', motion);
    sessionStorage.setItem('windowSensor', windowSensor);
    sessionStorage.setItem('siren', siren);
    sessionStorage.setItem('smoke', smoke);
    sessionStorage.setItem('lock', lock);
    sessionStorage.setItem('doorbell', doorbell);
    sessionStorage.setItem('camera', camera);

    if (heating) return history.push('/heizung');
    if (garden) return history.push('/gartenbeleuchtung');
    if (innerLights) return history.push('/innenbeleuchtung');
    if (lightbulbs) return history.push('/gluehbirnen');
    if (light) return history.push('/beleuchtung');
    return history.push('/kategorien');
  };

  const next = () => {
    sessionStorage.setItem('motion', motion);
    sessionStorage.setItem('windowSensor', windowSensor);
    sessionStorage.setItem('siren', siren);
    sessionStorage.setItem('smoke', smoke);
    sessionStorage.setItem('lock', lock);
    sessionStorage.setItem('doorbell', doorbell);
    sessionStorage.setItem('camera', camera);

    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input) => {
    if (input === 'motion') return setMotion(!motion);
    if (input === 'windowSensor') return setWindowSensor(!windowSensor);
    if (input === 'siren') return setSiren(!siren);
    if (input === 'smoke') return setSmoke(!smoke);
    if (input === 'lock') return setLock(!lock);
    if (input === 'doorbell') return setDoorbell(!doorbell);
    if (input === 'camera') return setCamera(!camera);
  };

  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Sicherheitselemente:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="securityContainer mgSecurity">
          <div
            onClick={() => handleClick('motion')}
            className={`typeBox motion ${motion ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Bewegungsmelder</div>
          </div>
          <div
            onClick={() => handleClick('windowSensor')}
            className={`typeBox windowSensor ${windowSensor ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Tür-/Fensterkontakt</div>
          </div>
          <div
            onClick={() => handleClick('siren')}
            className={`typeBox siren ${siren ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Sirene</div>
          </div>
          <div
            onClick={() => handleClick('smoke')}
            className={`typeBox smoke ${smoke ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Rauchwarnmelder</div>
          </div>
          <div
            onClick={() => handleClick('lock')}
            className={`typeBox lock ${lock ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Türschloss</div>
          </div>
          <div
            onClick={() => handleClick('doorbell')}
            className={`typeBox doorbell ${doorbell ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Video-Türklingel</div>
          </div>
          <div
            onClick={() => handleClick('camera')}
            className={`typeBox camera ${camera ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Sicherheitskamera</div>
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

export default Security;
