import stripImg from '../images/lights/strip.png';
import tableLampImg from '../images/lights/tableLamp.png';
import recSpotImg from '../images/lights/recSpot.png';
import wallLightImg from '../images/lights/wallLight.png';
import plugImg from '../images/lights/plug.png';
import surfSpotImg from '../images/lights/surfSpot.png';
import recSwitchImg from '../images/lights/recSwitch.png';
import ceilingLightImg from '../images/lights/ceilingLight.png';

import stripImgW from '../images/lights/stripW.png';
import tableLampImgW from '../images/lights/tableLampW.png';
import recSpotImgW from '../images/lights/recSpotW.png';
import wallLightImgW from '../images/lights/wallLightW.png';
import plugImgW from '../images/lights/plugW.png';
import surfSpotImgW from '../images/lights/surfSpotW.png';
import recSwitchImgW from '../images/lights/recSwitchW.png';
import ceilingLightImgW from '../images/lights/ceilingLightW.png';

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Innerlights() {
  let history = useHistory();
  // selSD stands for selectionStateDisplay
  const selSD = useSelector((state) => state.selectionState);
  const selectionStateChange = useDispatch();

  const [boxRecSpot, setBoxRecSpot] = useState(false);
  const [boxWall, setBoxWall] = useState(false);
  const [boxPlug, setBoxPlug] = useState(false);
  const [boxSurfSpot, setBoxSurfSpot] = useState(false);
  const [boxRecSwitch, setBoxRecSwitch] = useState(false);
  const [boxCeiling, setBoxCeiling] = useState(false);

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    return setModal(false);
  };

  const openModal = () => {
    return setModal(true);
  };

  const back = () => {
    if (selSD.lightbulbs) return history.push('/gluehbirnen');
    return history.push('/beleuchtung');
  };

  const next = () => {
    selSD.tableLamp ||
    selSD.strip ||
    selSD.plugN ||
    selSD.plugD ||
    selSD.recSpotW ||
    selSD.recSpotA ||
    selSD.recSpotM ||
    selSD.surfSpotA ||
    selSD.surfSpotM ||
    selSD.ceilingA ||
    selSD.ceilingM ||
    selSD.wallA ||
    selSD.wallM ||
    selSD.recSwitchN ||
    selSD.recSwitchD
      ? selectionStateChange(
          selectionActionsContainer.forceTrue('innerLightsTemp')
        )
      : selectionStateChange(
          selectionActionsContainer.resetSome('innerLightsTemp')
        );

    if (selSD.garden) return history.push('/gartenbeleuchtung');
    if (selSD.heating) return history.push('/heizung');
    if (selSD.security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const reset = () => {
    setBoxRecSpot(false);
    setBoxWall(false);
    setBoxPlug(false);
    setBoxSurfSpot(false);
    setBoxRecSwitch(false);
    setBoxCeiling(false);
  };

  const handleClick = (input) => {
    return selectionStateChange(selectionActionsContainer[input]());
  };

  const openBox = (location) => {
    if (location === 'recSpot') {
      setBoxRecSpot(!boxRecSpot);
      setBoxWall(false);
      setBoxPlug(false);
      setBoxSurfSpot(false);
      setBoxRecSwitch(false);
      setBoxCeiling(false);

      return;
    }
    if (location === 'wall') {
      setBoxRecSpot(false);
      setBoxWall(!boxWall);
      setBoxPlug(false);
      setBoxSurfSpot(false);
      setBoxRecSwitch(false);
      setBoxCeiling(false);

      return;
    }
    if (location === 'plug') {
      setBoxRecSpot(false);
      setBoxWall(false);
      setBoxPlug(!boxPlug);
      setBoxSurfSpot(false);
      setBoxRecSwitch(false);
      setBoxCeiling(false);

      return;
    }

    if (location === 'surfSpot') {
      setBoxRecSpot(false);
      setBoxWall(false);
      setBoxPlug(false);
      setBoxSurfSpot(!boxSurfSpot);
      setBoxRecSwitch(false);
      setBoxCeiling(false);

      return;
    }

    if (location === 'recSwitch') {
      setBoxRecSpot(false);
      setBoxWall(false);
      setBoxPlug(false);
      setBoxSurfSpot(false);
      setBoxRecSwitch(!boxRecSwitch);
      setBoxCeiling(false);
      return;
    }

    if (location === 'ceiling') {
      setBoxRecSpot(false);
      setBoxWall(false);
      setBoxPlug(false);
      setBoxSurfSpot(false);
      setBoxRecSwitch(false);
      setBoxCeiling(!boxCeiling);
      return;
    }
  };

  const selectRecSpot = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('recSpotW')}
          className={`addSelectRadius ${selSD.recSpotW && 'selected'}`}
        >
          Dimmbar
        </div>
        <div
          onClick={() => handleClick('recSpotA')}
          className={`addSelectRadius ${selSD.recSpotA && 'selected'}`}
        >
          dimmbares Weißlicht
        </div>
        <div
          onClick={() => handleClick('recSpotM')}
          className={`addSelectRadius ${selSD.recSpotM && 'selected'}`}
        >
          Weiß- und Farblicht
        </div>
      </div>
    );
  };

  const selectWall = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('wallA')}
          className={`addSelectRadius ${selSD.wallA && 'selected'}`}
        >
          dimmbares Weißlicht
        </div>
        <div
          onClick={() => handleClick('wallM')}
          className={`addSelectRadius ${selSD.wallM && 'selected'}`}
        >
          Weiß- und Farblicht
        </div>
      </div>
    );
  };

  const selectPlug = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('plugN')}
          className={`addSelectRadius ${selSD.plugN && 'selected'}`}
        >
          Einfach
        </div>
        <div
          onClick={() => handleClick('plugD')}
          className={`addSelectRadius ${selSD.plugD && 'selected'}`}
        >
          mit Dimmfunktion
        </div>
      </div>
    );
  };

  const selectSurfSpot = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('surfSpotA')}
          className={`addSelectRadius ${selSD.surfSpotA && 'selected'}`}
        >
          dimmbares Weißlicht
        </div>
        <div
          onClick={() => handleClick('surfSpotM')}
          className={`addSelectRadius ${selSD.surfSpotM && 'selected'}`}
        >
          Weiß- und Farblicht
        </div>
      </div>
    );
  };

  const selectRecSwitch = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('recSwitchN')}
          className={`addSelectRadius ${selSD.recSwitchN && 'selected'}`}
        >
          Einfach
        </div>
        <div
          onClick={() => handleClick('recSwitchD')}
          className={`addSelectRadius ${selSD.recSwitchD && 'selected'}`}
        >
          mit Dimmfunktion
        </div>
      </div>
    );
  };

  const selectCeiling = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('ceilingA')}
          className={`addSelectRadius ${selSD.ceilingA && 'selected'}`}
        >
          dimmbares Weißlicht
        </div>
        <div
          onClick={() => handleClick('ceilingM')}
          className={`addSelectRadius ${selSD.ceilingM && 'selected'}`}
        >
          Weiß- und Farblicht
        </div>
      </div>
    );
  };
  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe">weitere Innenbeleuchtung:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => handleClick('strip')}
            className={`contentBox cursor ${selSD.strip && 'selected'}`}
          >
            {selSD.strip ? <img src={stripImgW} /> : <img src={stripImg} />}
            <div>Leuchtstreifen</div>
          </div>
          <div
            onClick={() => handleClick('tableLamp')}
            className={`contentBox cursor ${selSD.tableLamp && 'selected'}`}
          >
            {selSD.tableLamp ? (
              <img src={tableLampImgW} />
            ) : (
              <img src={tableLampImg} />
            )}
            <div>Tischlampen</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
          </MediaQuery>
          <div
            onClick={() => openBox('recSpot')}
            className={`contentBox cursor ${boxRecSpot && 'borderHghl'} ${
              selSD.recSpotW || selSD.recSpotA || selSD.recSpotM
                ? 'selected'
                : ''
            }`}
          >
            {selSD.recSpotW || selSD.recSpotA || selSD.recSpotM ? (
              <img src={recSpotImgW} />
            ) : (
              <img src={recSpotImg} />
            )}
            <div>Einbauspots</div>
          </div>
          <div
            onClick={() => openBox('wall')}
            className={`contentBox cursor ${boxWall && 'borderHghl'} ${
              selSD.wallA || selSD.wallM ? 'selected' : ''
            }`}
          >
            {selSD.wallA || selSD.wallM ? (
              <img src={wallLightImgW} />
            ) : (
              <img src={wallLightImg} />
            )}
            <div>Wandleuchten</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxRecSpot && selectRecSpot()}
            {boxWall && selectWall()}
            <div className="forceFlexWrap"></div>
          </MediaQuery>
          <MediaQuery minWidth={501}>
            <div className="forceFlexWrap"></div>
            {boxRecSpot && selectRecSpot()}
            {boxWall && selectWall()}
            {boxRecSpot && <div className="forceFlexWrap"></div>}
            {boxWall && <div className="forceFlexWrap"></div>}
          </MediaQuery>

          <div
            onClick={() => openBox('plug')}
            className={`contentBox cursor ${boxPlug && 'borderHghl'} ${
              selSD.plugN || selSD.plugD ? 'selected' : ''
            }`}
          >
            {selSD.plugN || selSD.plugD ? (
              <img src={plugImgW} />
            ) : (
              <img src={plugImg} />
            )}
            <div>Zwischenstecker</div>
          </div>
          <div
            onClick={() => openBox('surfSpot')}
            className={`contentBox cursor ${boxSurfSpot && 'borderHghl'} ${
              selSD.surfSpotA || selSD.surfSpotM ? 'selected' : ''
            }`}
          >
            {selSD.surfSpotA || selSD.surfSpotM ? (
              <img src={surfSpotImgW} />
            ) : (
              <img src={surfSpotImg} />
            )}
            <div>Aufbauspots</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxPlug && selectPlug()}
            {boxSurfSpot && selectSurfSpot()}
            {boxPlug && <div className="forceFlexWrap"></div>}
            {boxSurfSpot && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxPlug && selectPlug()}
              {boxSurfSpot && selectSurfSpot()}
              {boxPlug && <div className="forceFlexWrap"></div>}
              {boxSurfSpot && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => openBox('recSwitch')}
            className={`contentBox cursor ${boxRecSwitch && 'borderHghl'} ${
              selSD.recSwitchN || selSD.recSwitchD ? 'selected' : ''
            }`}
          >
            {selSD.recSwitchN || selSD.recSwitchD ? (
              <img src={recSwitchImgW} />
            ) : (
              <img src={recSwitchImg} />
            )}
            <div>Unterputzaktoren</div>
          </div>
          <div
            onClick={() => openBox('ceiling')}
            className={`contentBox cursor ${boxCeiling && 'borderHghl'} ${
              selSD.ceilingA || selSD.ceilingM ? 'selected' : ''
            }`}
          >
            {selSD.ceilingA || selSD.ceilingM ? (
              <img src={ceilingLightImgW} />
            ) : (
              <img src={ceilingLightImg} />
            )}
            <div>Deckenlampen</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxRecSwitch && selectRecSwitch()}
            {boxCeiling && selectCeiling()}
            {boxRecSwitch && <div className="forceFlexWrap"></div>}
            {boxCeiling && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={501}>
            <MediaQuery maxWidth={767}>
              <div className="forceFlexWrap"></div>
              {boxPlug && selectPlug()}
              {boxSurfSpot && selectSurfSpot()}
              {boxRecSwitch && selectRecSwitch()}
              {boxCeiling && selectCeiling()}
              {boxPlug && <div className="forceFlexWrap"></div>}
              {boxSurfSpot && <div className="forceFlexWrap"></div>}
              {boxSurfSpot && <div className="forceFlexWrap"></div>}
              {boxRecSwitch && <div className="forceFlexWrap"></div>}
              {boxCeiling && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxRecSwitch && selectRecSwitch()}
              {boxCeiling && selectCeiling()}
              {boxRecSwitch && <div className="forceFlexWrap"></div>}
              {boxCeiling && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={769}>
            <div className="forceFlexWrap"></div>
            {boxPlug && selectPlug()}
            {boxSurfSpot && selectSurfSpot()}
            {boxRecSwitch && selectRecSwitch()}
            {boxCeiling && selectCeiling()}
            {boxPlug && <div className="forceFlexWrap"></div>}
            {boxSurfSpot && <div className="forceFlexWrap"></div>}
            {boxSurfSpot && <div className="forceFlexWrap"></div>}
            {boxRecSwitch && <div className="forceFlexWrap"></div>}
            {boxCeiling && <div className="forceFlexWrap"></div>}
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
                    <strong>Leuchtstreifen:</strong>
                  </div>
                  <li className="fontSizeModal">
                    Sorgen für eine stilvolle Hintergrundbeleuchtung mit 16 Mio.
                    unterschiedlichen Farboptionen.
                  </li>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Zwischenstecker:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Ideal, um nicht-smarte Steh- oder Tischlampen in das Smart
                      Home einzubinden.
                    </li>
                  </div>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Unterputzaktoren:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Ideal, um nicht-smarte Deckenleuchten in das Smart Home
                      einzubinden.
                    </li>
                    <li className="fontSizeModal">
                      Unterputzaktoren werden direkt im Lichtschalter mit der
                      Elektrik verkabelt.
                    </li>
                  </div>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Einbauspots:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Ideal, um nicht-smarte Einbau- btw. Unterputz-Spots
                      auszutauschen, falls diese keine GU10 Fassung besitzen.
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

export default Innerlights;
