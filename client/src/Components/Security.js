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
import MediaQuery from 'react-responsive';

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

  const selectMotion = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('motionI', false)}
          className={`addSelectRadius ${motionI && 'selected'}`}
        >
          Bewegungsmelder innen
        </div>
        <div
          onClick={() => handleClick('motionO', false)}
          className={`addSelectRadius ${motionO && 'selected'}`}
        >
          Bewegungsmelder außen
        </div>
      </div>
    );
  };

  const selectSiren = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('sirenI', false)}
          className={`addSelectRadius ${sirenI && 'selected'}`}
        >
          Innensirene
        </div>
        <div
          onClick={() => handleClick('sirenO', false)}
          className={`addSelectRadius ${sirenO && 'selected'}`}
        >
          Außensirene
        </div>
      </div>
    );
  };

  const selectCamera = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('cameraI', false)}
          className={`addSelectRadius ${cameraI && 'selected'}`}
        >
          Innenkamera
        </div>
        <div
          onClick={() => handleClick('cameraO', false)}
          className={`addSelectRadius ${cameraO && 'selected'}`}
        >
          Außenkamera
        </div>
      </div>
    );
  };

  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe">Sicherheitstechnik:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => openBox('motion')}
            className={`contentBox cursor ${boxMotion && 'borderHghl'} ${
              motionI || motionO ? 'selected' : ''
            }`}
          >
            {motionI || motionO ? (
              <img src={motionSensorImgW} />
            ) : (
              <img src={motionSensorImg} />
            )}
            <div>Bewegungsmelder</div>
          </div>
          <div
            onClick={() => handleClick('windowSensor', true)}
            className={`contentBox cursor ${windowSensor && 'selected'}`}
          >
            {windowSensor ? (
              <img src={windowSensorImgW} />
            ) : (
              <img src={windowSensorImg} />
            )}
            <div>Tür-/Fensterkontakt</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxMotion && selectMotion()}
            {boxMotion && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              {boxMotion && selectMotion()}
              {boxMotion && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => openBox('siren')}
            className={`contentBox cursor ${boxSiren && 'borderHghl'} ${
              sirenI || sirenO ? 'selected' : ''
            }`}
          >
            {sirenI || sirenO ? (
              <img src={sirenImgW} />
            ) : (
              <img src={sirenImg} />
            )}
            <div>Sirene</div>
          </div>
          <div
            onClick={() => handleClick('smoke', true)}
            className={`contentBox cursor ${smoke && 'selected'}`}
          >
            {smoke ? (
              <img src={smokeDetectorImgW} />
            ) : (
              <img src={smokeDetectorImg} />
            )}
            <div>Rauchwarnmelder</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxSiren && selectSiren()}
            {boxSiren && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={501}>
            <MediaQuery maxWidth={767}>
              <div className="forceFlexWrap"></div>
              {boxMotion && selectMotion()}
              {boxSiren && selectSiren()}
              {boxMotion && <div className="forceFlexWrap"></div>}
              {boxSiren && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxSiren && selectSiren()}
              {boxSiren && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={769}>
            <div className="forceFlexWrap"></div>
            {boxMotion && selectMotion()}
            {boxSiren && selectSiren()}
            {boxMotion && <div className="forceFlexWrap"></div>}
            {boxSiren && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <div
            onClick={() => handleClick('lock', true)}
            className={`contentBox cursor ${lock && 'selected'}`}
          >
            {lock ? <img src={doorLockImgW} /> : <img src={doorLockImg} />}
            <div>Türschloss</div>
          </div>
          <div
            onClick={() => handleClick('doorbell', true)}
            className={`contentBox cursor ${doorbell && 'selected'}`}
          >
            {doorbell ? (
              <img src={videoDoorbellImgW} />
            ) : (
              <img src={videoDoorbellImg} />
            )}
            <div>Video-Türklingel</div>
          </div>
          <div
            onClick={() => openBox('camera')}
            className={`contentBox cursor ${boxCamera && 'borderHghl'} ${
              cameraI || cameraO ? 'selected' : ''
            }`}
          >
            {cameraI || cameraO ? (
              <img src={cameraImgW} />
            ) : (
              <img src={cameraImg} />
            )}
            <div>Sicherheitskamera</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxCamera && selectCamera()}
            {boxCamera && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={501}>
            <div className="forceFlexWrap"></div>
            {boxCamera && selectCamera()}
            {boxCamera && <div className="forceFlexWrap"></div>}
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

export default Security;
