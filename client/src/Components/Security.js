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

import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Security() {
  let history = useHistory();
  // selSD stands for selectionStateDisplay
  const selSD = useSelector((state) => state.selectionState);
  const selectionStateChange = useDispatch();

  const [boxMotion, setBoxMotion] = useState(false);
  const [boxSiren, setBoxSiren] = useState(false);
  const [boxCamera, setBoxCamera] = useState(false);

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    return setModal(false);
  };

  const openModal = () => {
    return setModal(true);
  };

  const back = () => {
    if (selSD.heating) return history.push('/heizung');
    if (selSD.garden) return history.push('/gartenbeleuchtung');
    if (selSD.innerLights) return history.push('/innenbeleuchtung');
    if (selSD.lightbulbs) return history.push('/gluehbirnen');
    if (selSD.light) return history.push('/beleuchtung');
    return history.push('/kategorien');
  };

  const next = () => {
    selSD.motionI ||
    selSD.motionO ||
    selSD.windowSensor ||
    selSD.sirenI ||
    selSD.sirenO ||
    selSD.smoke ||
    selSD.lock ||
    selSD.doorbell ||
    selSD.cameraI ||
    selSD.cameraO
      ? selectionStateChange(
          selectionActionsContainer.forceTrue('securityTemp')
        )
      : selectionStateChange(
          selectionActionsContainer.resetSome('securityTemp')
        );
    return history.push('/confirm');
  };

  const handleClick = (input, closeBoxes) => {
    if (closeBoxes) {
      setBoxSiren(false);
      setBoxMotion(false);
      setBoxCamera(false);
    }
    return selectionStateChange(selectionActionsContainer[input]());
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
          className={`addSelectRadius ${selSD.motionI && 'selected'}`}
        >
          Bewegungsmelder innen
        </div>
        <div
          onClick={() => handleClick('motionO', false)}
          className={`addSelectRadius ${selSD.motionO && 'selected'}`}
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
          className={`addSelectRadius ${selSD.sirenI && 'selected'}`}
        >
          Innensirene
        </div>
        <div
          onClick={() => handleClick('sirenO', false)}
          className={`addSelectRadius ${selSD.sirenO && 'selected'}`}
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
          className={`addSelectRadius ${selSD.cameraI && 'selected'}`}
        >
          Innenkamera
        </div>
        <div
          onClick={() => handleClick('cameraO', false)}
          className={`addSelectRadius ${selSD.cameraO && 'selected'}`}
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
              selSD.motionI || selSD.motionO ? 'selected' : ''
            }`}
          >
            {selSD.motionI || selSD.motionO ? (
              <img src={motionSensorImgW} />
            ) : (
              <img src={motionSensorImg} />
            )}
            <div>Bewegungsmelder</div>
          </div>
          <div
            onClick={() => handleClick('windowSensor', true)}
            className={`contentBox cursor ${selSD.windowSensor && 'selected'}`}
          >
            {selSD.windowSensor ? (
              <img src={windowSensorImgW} />
            ) : (
              <img src={windowSensorImg} />
            )}
            <div>Tür-/Fensterkontakte</div>
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
              selSD.sirenI || selSD.sirenO ? 'selected' : ''
            }`}
          >
            {selSD.sirenI || selSD.sirenO ? (
              <img src={sirenImgW} />
            ) : (
              <img src={sirenImg} />
            )}
            <div>Sirenen</div>
          </div>
          <div
            onClick={() => handleClick('smoke', true)}
            className={`contentBox cursor ${selSD.smoke && 'selected'}`}
          >
            {selSD.smoke ? (
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
            className={`contentBox cursor ${selSD.lock && 'selected'}`}
          >
            {selSD.lock ? (
              <img src={doorLockImgW} />
            ) : (
              <img src={doorLockImg} />
            )}
            <div>Türschlösser</div>
          </div>
          <div
            onClick={() => handleClick('doorbell', true)}
            className={`contentBox cursor ${selSD.doorbell && 'selected'}`}
          >
            {selSD.doorbell ? (
              <img src={videoDoorbellImgW} />
            ) : (
              <img src={videoDoorbellImg} />
            )}
            <div>Video-Türklingeln</div>
          </div>
          <div
            onClick={() => openBox('camera')}
            className={`contentBox cursor ${boxCamera && 'borderHghl'} ${
              selSD.cameraI || selSD.cameraO ? 'selected' : ''
            }`}
          >
            {selSD.cameraI || selSD.cameraO ? (
              <img src={cameraImgW} />
            ) : (
              <img src={cameraImg} />
            )}
            <div>Sicherheitskameras</div>
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
          <button onClick={openModal} className="btn">
            Mehr Infos
          </button>
          <button onClick={next} className="btn">
            Weiter
          </button>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="mgl2">
              <h2>Kategorien</h2>
            </div>
            <div className="mgl2 modalBorder pdt2">
              <div className="checkmarkModalDiv">
                <ul className="checkmarkModal mgl pdr2">
                  <div className="fontSizeModal1">
                    <strong>Grundausstattung:</strong>
                  </div>
                  <li className="fontSizeModal">
                    Zur Grundausstattung in Sachen Sicherheit benötigst Du eine
                    Innensirene, ein bis drei Bewegungsmelder und ausreichend
                    viele Tür-/Fensterkontakte.
                  </li>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Funktionsweise:</strong>
                    </div>
                    <li className="fontSizeModal">
                      In der App stellst Du die Alarmanlage scharf bzw.
                      unscharf. Wenn ein Sensor auslöst (beispielsweise der
                      Bewegungsmelder), erhältst Du eine Benachrichtigung per
                      App und die Sirene startet zeitgleich.
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="modalBorder btnSingle mgt3 pdt2">
              <button onClick={closeModal} className="btn">
                Verstanden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Security;
