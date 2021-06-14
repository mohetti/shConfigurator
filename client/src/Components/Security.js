import motionSensorImg from '../images/security/motionSensor.png';
import windowSensorImg from '../images/security/windowSensor.png';
import sirenImg from '../images/security/siren.png';
import smokeDetectorImg from '../images/security/smokeDetector.png';
import doorLockImg from '../images/security/doorLock.png';
import videoDoorbellImg from '../images/security/videoDoorbell.png';
import cameraImg from '../images/security/camera.png';

import motionSensorImgW from '../images/security/motionSensorW.png';
import windowSensorImgW from '../images/security/windowSensorW.png';
import sirenImgW from '../images/security/sirenW.png';
import smokeDetectorImgW from '../images/security/smokeDetectorW.png';
import doorLockImgW from '../images/security/doorLockW.png';
import videoDoorbellImgW from '../images/security/videoDoorbellW.png';
import cameraImgW from '../images/security/cameraW.png';

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
              {motionI || motionO ? (
                <img src={motionSensorImgW} />
              ) : (
                <img src={motionSensorImg} />
              )}
              <div className={`${motionI || motionO ? 'higlightedText' : ''}`}>
                Bewegungsmelder
              </div>
            </div>
            <div
              onClick={() => handleClick('windowSensor', true)}
              className={`typeBox windowSensor ${
                windowSensor ? 'selected' : ''
              }`}
            >
              {windowSensor ? (
                <img src={windowSensorImgW} />
              ) : (
                <img src={windowSensorImg} />
              )}
              <div className={`${windowSensor ? 'higlightedText' : ''}`}>
                Tür-/Fensterkontakt
              </div>
            </div>
            <div
              onClick={() => openBox('siren')}
              className={`typeBox siren ${sirenI || sirenO ? 'selected' : ''}`}
            >
              {sirenI || sirenO ? (
                <img src={sirenImgW} />
              ) : (
                <img src={sirenImg} />
              )}
              <div className={`${sirenI || sirenO ? 'higlightedText' : ''}`}>
                Sirene
              </div>
            </div>
            <div
              onClick={() => handleClick('smoke', true)}
              className={`typeBox smoke ${smoke ? 'selected' : ''}`}
            >
              {smoke ? (
                <img src={smokeDetectorImgW} />
              ) : (
                <img src={smokeDetectorImg} />
              )}
              <div className={`${smoke ? 'higlightedText' : ''}`}>
                Rauchwarnmelder
              </div>
            </div>
            <div
              onClick={() => handleClick('lock', true)}
              className={`typeBox lock ${lock ? 'selected' : ''}`}
            >
              {lock ? <img src={doorLockImgW} /> : <img src={doorLockImg} />}
              <div className={`${lock ? 'higlightedText' : ''}`}>
                Türschloss
              </div>
            </div>
            <div
              onClick={() => handleClick('doorbell', true)}
              className={`typeBox doorbell ${doorbell ? 'selected' : ''}`}
            >
              {doorbell ? (
                <img src={videoDoorbellImgW} />
              ) : (
                <img src={videoDoorbellImg} />
              )}
              <div className={`${doorbell ? 'higlightedText' : ''}`}>
                Video-Türklingel
              </div>
            </div>
            <div
              onClick={() => openBox('camera')}
              className={`typeBox camera ${
                cameraI || cameraO ? 'selected' : ''
              }`}
            >
              {cameraI || cameraO ? (
                <img src={cameraImgW} />
              ) : (
                <img src={cameraImg} />
              )}
              <div className={`${cameraI || cameraO ? 'higlightedText' : ''}`}>
                Sicherheitskamera
              </div>
            </div>
            {boxMotion && (
              <div className="boxMotion">
                <div
                  onClick={() => handleClick('motionI', false)}
                  className={`mgt1 bradius fontSize1 ${
                    motionI ? 'selected higlightedText' : ''
                  }`}
                >
                  innen
                </div>
                <div
                  onClick={() => handleClick('motionO', false)}
                  className={`mgt1 bradius fontSize1 ${
                    motionO ? 'selected higlightedText' : ''
                  }`}
                >
                  außen
                </div>
              </div>
            )}
            {boxSiren && (
              <div className="boxSiren">
                <div
                  onClick={() => handleClick('sirenI', false)}
                  className={`mgt1 bradius fontSize1 ${
                    sirenI ? 'selected higlightedText' : ''
                  }`}
                >
                  innen
                </div>
                <div
                  onClick={() => handleClick('sirenO', false)}
                  className={`mgt1 bradius fontSize1 ${
                    sirenO ? 'selected higlightedText' : ''
                  }`}
                >
                  außen
                </div>
              </div>
            )}
            {boxCamera && (
              <div className="boxCamera">
                <div
                  onClick={() => handleClick('cameraI', false)}
                  className={`mgt1 bradius fontSize1 ${
                    cameraI ? 'selected higlightedText' : ''
                  }`}
                >
                  Innenkamera
                </div>
                <div
                  onClick={() => handleClick('cameraO', false)}
                  className={`mgt1 bradius fontSize1 ${
                    cameraO ? 'selected higlightedText' : ''
                  }`}
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
