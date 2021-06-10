import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Security() {
  const [motionI, setMotionI] = useState(false);
  const [motionO, setMotionO] = useState(false);
  const [windowSensor, setWindowSensor] = useState(false);
  const [sirenI, setSirenI] = useState(false);
  const [sirenO, setSirenO] = useState(false);
  const [smoke, setSmoke] = useState(false);
  const [lock, setLock] = useState(false);
  const [doorbell, setDoorbell] = useState(false);
  const [cameraI, setCameraI] = useState(false);
  const [cameraO, setCameraO] = useState(false);

  const [boxMotion, setBoxMotion] = useState(false);
  const [boxSiren, setBoxSiren] = useState(false);
  const [boxCamera, setBoxCamera] = useState(false);

  const [innerLights, setInnerLights] = useState(false);
  const [garden, setGarden] = useState(false);
  const [light, setLight] = useState(false);
  const [heating, setHeating] = useState(false);
  const [lightbulbs, setLightbulbs] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let motionSessionI = sessionStorage.getItem('motionI') === 'true';
    let motionSessionO = sessionStorage.getItem('motionO') === 'true';
    let windowSensorSession = sessionStorage.getItem('windowSensor') === 'true';
    let sirenSessionI = sessionStorage.getItem('sirenI') === 'true';
    let sirenSessionO = sessionStorage.getItem('sirenO') === 'true';
    let smokeSession = sessionStorage.getItem('smoke') === 'true';
    let lockSession = sessionStorage.getItem('lock') === 'true';
    let doorbellSession = sessionStorage.getItem('doorbell') === 'true';
    let cameraSessionI = sessionStorage.getItem('cameraI') === 'true';
    let cameraSessionO = sessionStorage.getItem('cameraO') === 'true';

    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let lightSession = sessionStorage.getItem('light') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let lightbulbsSession = sessionStorage.getItem('lightbulbs') === 'true';

    setMotionI(motionSessionI);
    setMotionO(motionSessionO);
    setWindowSensor(windowSensorSession);
    setSirenI(sirenSessionI);
    setSirenO(sirenSessionO);
    setSmoke(smokeSession);
    setLock(lockSession);
    setDoorbell(doorbellSession);
    setCameraI(cameraSessionI);
    setCameraO(cameraSessionO);

    setInnerLights(innerLightsSession);
    setGarden(gardenSession);
    setLight(lightSession);
    setHeating(heatingSession);
    setLightbulbs(lightbulbsSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('motionI', motionI);
    sessionStorage.setItem('motionO', motionO);
    sessionStorage.setItem('windowSensor', windowSensor);
    sessionStorage.setItem('sirenI', sirenI);
    sessionStorage.setItem('sirenO', sirenO);
    sessionStorage.setItem('smoke', smoke);
    sessionStorage.setItem('lock', lock);
    sessionStorage.setItem('doorbell', doorbell);
    sessionStorage.setItem('cameraI', cameraI);
    sessionStorage.setItem('cameraO', cameraO);

    if (heating) return history.push('/heizung');
    if (garden) return history.push('/gartenbeleuchtung');
    if (innerLights) return history.push('/innenbeleuchtung');
    if (lightbulbs) return history.push('/gluehbirnen');
    if (light) return history.push('/beleuchtung');
    return history.push('/kategorien');
  };

  const next = () => {
    sessionStorage.setItem('motionI', motionI);
    sessionStorage.setItem('motionO', motionO);
    sessionStorage.setItem('windowSensor', windowSensor);
    sessionStorage.setItem('sirenI', sirenI);
    sessionStorage.setItem('sirenO', sirenO);
    sessionStorage.setItem('smoke', smoke);
    sessionStorage.setItem('lock', lock);
    sessionStorage.setItem('doorbell', doorbell);
    sessionStorage.setItem('cameraI', cameraI);
    sessionStorage.setItem('cameraO', cameraO);

    motionI ||
    motionO ||
    windowSensor ||
    sirenI ||
    sirenO ||
    smoke ||
    lock ||
    doorbell ||
    cameraI ||
    cameraO
      ? sessionStorage.setItem('securityTemp', true)
      : sessionStorage.setItem('securityTemp', false);

    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input, closeBoxes) => {
    if (closeBoxes) {
      setBoxSiren(false);
      setBoxMotion(false);
      setBoxCamera(false);
    }
    if (input === 'motionI') return setMotionI(!motionI);
    if (input === 'motionO') return setMotionO(!motionO);
    if (input === 'windowSensor') return setWindowSensor(!windowSensor);
    if (input === 'sirenI') return setSirenI(!sirenI);
    if (input === 'sirenO') return setSirenO(!sirenO);
    if (input === 'smoke') return setSmoke(!smoke);
    if (input === 'lock') return setLock(!lock);
    if (input === 'doorbell') return setDoorbell(!doorbell);
    if (input === 'cameraI') return setCameraI(!cameraI);
    if (input === 'cameraO') return setCameraO(!cameraO);
  };

  const openBox = (location) => {
    if (location === 'motion') {
      setBoxMotion(!boxMotion);
      setBoxSiren(false);
      setBoxCamera(false);
      return;
    }
    if (location === 'siren') {
      setBoxMotion(false);
      setBoxSiren(!boxSiren);
      setBoxCamera(false);
      return;
    }
    if (location === 'camera') {
      setBoxMotion(false);
      setBoxSiren(false);
      setBoxCamera(!boxCamera);
      return;
    }
  };

  return (
    <div className="windowContainer">
      <div className="spaceLeft"></div>
      <div className="center textCenter">
        <header>
          <h1 className="stripe mgt1">Sicherheitstechnik:</h1>
        </header>
        <div className="configContainer">
          <div className="securityContainer mgSecurity">
            <div
              onClick={() => openBox('motion')}
              className={`typeBox motion ${
                motionI || motionO ? 'selected' : ''
              }`}
            >
              <img src={placeholder} />
              <div>Bewegungsmelder</div>
            </div>
            <div
              onClick={() => handleClick('windowSensor', true)}
              className={`typeBox windowSensor ${
                windowSensor ? 'selected' : ''
              }`}
            >
              <img src={placeholder} />
              <div>Tür-/Fensterkontakt</div>
            </div>
            <div
              onClick={() => openBox('siren')}
              className={`typeBox siren ${sirenI || sirenO ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Sirene</div>
            </div>
            <div
              onClick={() => handleClick('smoke', true)}
              className={`typeBox smoke ${smoke ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Rauchwarnmelder</div>
            </div>
            <div
              onClick={() => handleClick('lock', true)}
              className={`typeBox lock ${lock ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Türschloss</div>
            </div>
            <div
              onClick={() => handleClick('doorbell', true)}
              className={`typeBox doorbell ${doorbell ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Video-Türklingel</div>
            </div>
            <div
              onClick={() => openBox('camera')}
              className={`typeBox camera ${
                cameraI || cameraO ? 'selected' : ''
              }`}
            >
              <img src={placeholder} />
              <div>Sicherheitskamera</div>
            </div>
            {boxMotion && (
              <div className="boxMotion">
                <div
                  onClick={() => handleClick('motionI', false)}
                  className={motionI ? 'selected' : ''}
                >
                  innen
                </div>
                <div
                  onClick={() => handleClick('motionO', false)}
                  className={motionO ? 'selected' : ''}
                >
                  außen
                </div>
              </div>
            )}
            {boxSiren && (
              <div className="boxSiren">
                <div
                  onClick={() => handleClick('sirenI', false)}
                  className={sirenI ? 'selected' : ''}
                >
                  innen
                </div>
                <div
                  onClick={() => handleClick('sirenO', false)}
                  className={sirenO ? 'selected' : ''}
                >
                  außen
                </div>
              </div>
            )}
            {boxCamera && (
              <div className="boxCamera">
                <div
                  onClick={() => handleClick('cameraI', false)}
                  className={cameraI ? 'selected' : ''}
                >
                  Innenkamera
                </div>
                <div
                  onClick={() => handleClick('cameraO', false)}
                  className={cameraO ? 'selected' : ''}
                >
                  Außenkamera
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

export default Security;
