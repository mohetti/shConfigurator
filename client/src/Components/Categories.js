import lightImg from '../images/categories/light.png';
import heatingImg from '../images/categories/heating.png';
import securityImg from '../images/categories/security.png';

import lightImgW from '../images/categories/lightW.png';
import heatingImgW from '../images/categories/heatingW.png';
import securityImgW from '../images/categories/securityW.png';

import { useHistory, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Categories(props) {
  let history = useHistory();
  // selSD stands for selectionStateDisplay
  const selSD = useSelector((state) => state.selectionState);
  const selectionStateChange = useDispatch();

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    return setModal(false);
  };

  const openModal = () => {
    return setModal(true);
  };

  const back = () => {
    return history.push('/start');
  };
  const reset = () => {
    if (!selSD.light) {
      let lightsList = [
        'e27W',
        'e27A',
        'e27M',
        'e14W',
        'e14A',
        'e14M',
        'gu10W',
        'gu10A',
        'gu10M',
        'strip',
        'plugN',
        'plugD',
        'innerLights',
        'garden',
        'tableLamp',
        'wallA',
        'wallM',
        'recSwitchN',
        'recSwitchD',
        'recSpotW',
        'recSpotA',
        'recSpotM',
        'surfSpotA',
        'surfSpotM',
        'ceilingA',
        'ceilingM',
        'pathLightW',
        'pathLightM',
        'gardenSpot',
        'wallGardenW',
        'wallGardenM',
        'gardenStrip',
        'gardenTemp',
        'innerLightsTemp',
        'lightbulbsTemp',
      ];
      lightsList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
    }
    if (!selSD.heating) {
      let heatingList = [
        'radiator',
        'thermostatWired230',
        'thermostatWired24',
        'thermostatWireless',
        'heatActor12Motorized',
        'heatActor24_06',
        'heatActor24_10',
        'heatActor230_06',
        'heatActor230_10',
        'heatingTemp',
      ];
      heatingList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
    }
    if (!selSD.security) {
      let securityList = [
        'motionI',
        'motionO',
        'windowSensor',
        'sirenI',
        'sirenO',
        'smoke',
        'lock',
        'doorbell',
        'cameraI',
        'cameraO',
        'securityTemp',
      ];
      securityList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
      // securityList.map((x) => sessionStorage.setItem(x, false));
    }
  };

  const next = () => {
    if (selSD.light) {
      reset();
      return history.push('/beleuchtung', { from: 'valid' });
    }
    if (selSD.heating) {
      reset();
      return history.push('/heizung', { from: 'valid' });
    }
    if (selSD.security) {
      reset();
      return history.push('/sicherheit', { from: 'valid' });
    }
    return alert('Bitte mindestens eine Kategorie auswählen.');
  };

  const handleClick = (input) => {
    return selectionStateChange(selectionActionsContainer[input]());
  };
  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe">Kategorien:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => handleClick('light')}
            className={`contentBox cursor ${selSD.light && 'selected'}`}
          >
            {selSD.light ? <img src={lightImgW} /> : <img src={lightImg} />}
            <div>Beleuchtung</div>
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
            onClick={() => handleClick('heating')}
            className={`contentBox cursor ${selSD.heating && 'selected'}`}
          >
            {selSD.heating ? (
              <img src={heatingImgW} />
            ) : (
              <img src={heatingImg} />
            )}
            <div>Heizung</div>
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
            onClick={() => handleClick('security')}
            className={`contentBox cursor ${selSD.security && 'selected'}`}
          >
            {selSD.security ? (
              <img src={securityImgW} />
            ) : (
              <img src={securityImg} />
            )}
            <div>Sicherheit</div>
          </div>
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
                    <strong>Beleuchtung:</strong>
                  </div>
                  <li className="fontSizeModal">
                    Sorgt für schöne Lichtstimmung im Heimkino und am Esstisch.
                  </li>
                  <li className="fontSizeModal">
                    Simuliert durch randomisiertes Ein- und Ausschalten Deine
                    Anwesenheit.
                  </li>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Heizungssteuerung:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Läuft nach Zeitplan, der automatisiert energie- und
                      kosteneffizient heizt.
                    </li>
                    <li className="fontSizeModal">
                      Sowohl Heizkörper als auch Fußbodenheizungen lassen sich
                      smart nachrüsten.
                    </li>
                    <li className="fontSizeModal">
                      Auch für Mietwohnungen geeignet.
                    </li>
                  </div>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Sicherheit:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Alarmiert im Brandfall oder bei Einbrüchen.
                    </li>
                    <li className="fontSizeModal">
                      Auch für Mietwohnungen geeignet.
                    </li>
                    <li className="fontSizeModal">
                      Die Geräte lösen einen Alarm aus und benachrichtigen Dich
                      über die App.
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

export default Categories;
