import lightbulbImg from '../images/categories/lightbulbs.png';
import innerLightsImg from '../images/categories/innerLights.png';
import gardenLightImg from '../images/categories/gardenLight.png';

import lightbulbImgW from '../images/categories/lightbulbsW.png';
import innerLightsImgW from '../images/categories/innerLightsW.png';
import gardenLightImgW from '../images/categories/gardenLightW.png';

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Lights() {
  let history = useHistory();
  useEffect(() => {
    if (history.location.state === undefined) {
      return history.push('/start');
    }
  }, []);

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
    return history.push('/kategorien');
  };

  const reset = () => {
    if (!selSD.garden) {
      let gardenList = [
        'pathLightW',
        'pathLightM',
        'gardenSpot',
        'wallGardenW',
        'wallGardenM',
        'gardenStrip',
        'gardenTemp',
      ];
      gardenList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
    }
    if (!selSD.innerLights) {
      let innerLightsList = [
        'tableLamp',
        'recSwitchN',
        'recSwitchD',
        'wallA',
        'wallM',
        'plugN',
        'plugD',
        'strip',
        'recSpotW',
        'recSpotA',
        'recSpotM',
        'surfSpotA',
        'surfSpotM',
        'ceilingA',
        'ceilingM',
        'innerLightsTemp',
      ];
      innerLightsList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
    }

    if (!selSD.lightbulbs) {
      let lightbulbList = [
        'e27W',
        'e27A',
        'e27M',
        'e14W',
        'e14A',
        'e14M',
        'gu10W',
        'gu10A',
        'gu10M',
        'lightbulbsTemp',
      ];
      lightbulbList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
    }
  };

  const next = () => {
    if (selSD.lightbulbs) {
      reset();
      return history.push('/gluehbirnen', { from: 'valid' });
    }
    if (selSD.innerLights) {
      reset();
      return history.push('/innenbeleuchtung', { from: 'valid' });
    }
    if (selSD.garden) {
      reset();
      return history.push('/gartenbeleuchtung', { from: 'valid' });
    }
    if (selSD.heating) {
      reset();
      return history.push('/heizung', { from: 'valid' });
    }
    if (selSD.security) {
      reset();
      return history.push('/sicherheit', { from: 'valid' });
    }
    return history.push('/confirm', { from: 'valid' });
  };

  const handleClick = (input) => {
    return selectionStateChange(selectionActionsContainer[input]());
  };

  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe">Beleuchtungsoptionen:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => handleClick('lightbulbs')}
            className={`contentBox cursor ${selSD.lightbulbs && 'selected'}`}
          >
            {selSD.lightbulbs ? (
              <img src={lightbulbImgW} />
            ) : (
              <img src={lightbulbImg} />
            )}
            <div>Glühbirnen und Spots</div>
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
            onClick={() => handleClick('innerLights')}
            className={`contentBox cursor ${selSD.innerLights && 'selected'}`}
          >
            {selSD.innerLights ? (
              <img src={innerLightsImgW} />
            ) : (
              <img src={innerLightsImg} />
            )}
            <div>Innenbeleuchtung</div>
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
            onClick={() => handleClick('garden')}
            className={`contentBox cursor ${selSD.garden && 'selected'}`}
          >
            {selSD.garden ? (
              <img src={gardenLightImgW} />
            ) : (
              <img src={gardenLightImg} />
            )}
            <div>Gartenbeleuchtung</div>
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
                    <strong>Glühbirnen & Spots:</strong>
                  </div>
                  <li className="fontSizeModal">Kostengünstige Nachrüstung.</li>
                  <li className="fontSizeModal">Einfache Installation.</li>
                  <li className="fontSizeModal">
                    Verschiedene Varianten erhältlich, die entweder nur
                    warmweißes Licht oder auch Farblicht ausstrahlen.
                  </li>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Innenbeleuchtung:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Hier findest Du unter anderem Tischlampen und
                      Deckenleuchten, aber auch smarte Steckdosen und
                      Unterputzschalter.
                    </li>
                  </div>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Gartenbeleuchtung:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Gartenbeleuchtung taucht die Nachtstunden in ein
                      besonderes Licht.
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

export default Lights;
