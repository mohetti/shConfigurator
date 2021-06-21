import gardenSpotImg from '../images/lights/gardenSpot.png';
import gardenStripImg from '../images/lights/gardenStrip.png';
import pathLightImg from '../images/lights/pathLight.png';
import wallLightGardenImg from '../images/lights/wallGardenLight.png';

import gardenSpotImgW from '../images/lights/gardenSpotW.png';
import gardenStripImgW from '../images/lights/gardenStripW.png';
import pathLightImgW from '../images/lights/pathLightW.png';
import wallLightGardenImgW from '../images/lights/wallGardenLightW.png';

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Gardenlights() {
  let history = useHistory();
  // selSD stands for selectionStateDisplay
  const selSD = useSelector((state) => state.selectionState);
  const selectionStateChange = useDispatch();

  const [boxPathLight, setBoxPathLight] = useState(false);
  const [boxWallGarden, setBoxWallGarden] = useState(false);

  const back = () => {
    if (selSD.innerLights) return history.push('/innenbeleuchtung');
    if (selSD.lightbulbs) return history.push('/gluehbirnen');
    return history.push('/beleuchtung');
  };

  const next = () => {
    selSD.pathLightW ||
    selSD.pathLightM ||
    selSD.gardenSpot ||
    selSD.wallGardenW ||
    selSD.wallGardenM ||
    selSD.gardenStrip
      ? selectionStateChange(selectionActionsContainer.forceTrue('gardenTemp'))
      : selectionStateChange(selectionActionsContainer.resetSome('gardenTemp'));

    if (selSD.heating) return history.push('/heizung');
    if (selSD.security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const reset = () => {
    setBoxPathLight(false);
    setBoxWallGarden(false);
  };

  const handleClick = (input) => {
    if (input === 'gardenSpot' || input === 'gardenStrip') reset();
    return selectionStateChange(selectionActionsContainer[input]());
  };

  const openBox = (location) => {
    if (location === 'pathLight') {
      setBoxPathLight(!boxPathLight);
      setBoxWallGarden(false);
      return;
    }
    if (location === 'wallGarden') {
      setBoxPathLight(false);
      setBoxWallGarden(!boxWallGarden);
      return;
    }
  };

  const selectPathLight = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('pathLightW')}
          className={`addSelectRadius ${selSD.pathLightW && 'selected'}`}
        >
          Dimmbar
        </div>
        <div
          onClick={() => handleClick('pathLightM')}
          className={`addSelectRadius ${selSD.pathLightM && 'selected'}`}
        >
          Weiß- und Farblicht
        </div>
      </div>
    );
  };

  const selectWalLGarden = () => {
    return (
      <div className="addSelectContainer">
        <div
          onClick={() => handleClick('wallGardenW')}
          className={`addSelectRadius ${selSD.wallGardenW && 'selected'}`}
        >
          Dimmbar
        </div>
        <div
          onClick={() => handleClick('wallGardenM')}
          className={`addSelectRadius ${selSD.wallGardenM && 'selected'}`}
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
          <h1 className="stripe">Gartenbeleuchtung:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => openBox('pathLight')}
            className={`contentBox cursor ${boxPathLight && 'borderHghl'} ${
              selSD.pathLightW || selSD.pathLightM ? 'selected' : ''
            }`}
          >
            {selSD.pathLightW || selSD.pathLightM ? (
              <img src={pathLightImgW} />
            ) : (
              <img src={pathLightImg} />
            )}
            <div>Wegeleuchten</div>
          </div>
          <div
            onClick={() => handleClick('gardenSpot')}
            className={`contentBox cursor ${selSD.gardenSpot && 'selected'}`}
          >
            {selSD.gardenSpot ? (
              <img src={gardenSpotImgW} />
            ) : (
              <img src={gardenSpotImg} />
            )}
            <div>Gartenspots</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxPathLight && selectPathLight()}
            {boxPathLight && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxPathLight && selectPathLight()}
              {boxPathLight && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => openBox('wallGarden')}
            className={`contentBox cursor ${boxWallGarden && 'borderHghl'} ${
              selSD.wallGardenW || selSD.wallGardenM ? 'selected' : ''
            } `}
          >
            {selSD.wallGardenW || selSD.wallGardenM ? (
              <img src={wallLightGardenImgW} />
            ) : (
              <img src={wallLightGardenImg} />
            )}
            <div>Wandbeleuchtung</div>
          </div>
          <div
            onClick={() => handleClick('gardenStrip')}
            className={`contentBox cursor ${selSD.gardenStrip && 'selected'}`}
          >
            {selSD.gardenStrip ? (
              <img src={gardenStripImgW} />
            ) : (
              <img src={gardenStripImg} />
            )}
            <div>Leuchtstreifen</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxWallGarden && selectWalLGarden()}
            {boxWallGarden && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={501}>
            <MediaQuery maxWidth={767}>
              <div className="forceFlexWrap"></div>
              {boxPathLight && selectPathLight()}
              {boxWallGarden && selectWalLGarden()}
              {boxPathLight && <div className="forceFlexWrap"></div>}
              {boxWallGarden && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxWallGarden && selectWalLGarden()}
              {boxWallGarden && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={769}>
            <div className="forceFlexWrap"></div>
            {boxPathLight && selectPathLight()}
            {boxWallGarden && selectWalLGarden()}
            {boxPathLight && <div className="forceFlexWrap"></div>}
            {boxWallGarden && <div className="forceFlexWrap"></div>}
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

export default Gardenlights;
