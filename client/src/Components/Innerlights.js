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

function Innerlights() {
  const [tableLamp, setTableLamp] = useState(false);
  const [strip, setStrip] = useState(false);
  const [plugN, setPlugN] = useState(false);
  const [plugD, setPlugD] = useState(false);
  const [recSpotW, setRecSpotW] = useState(false);
  const [recSpotA, setRecSpotA] = useState(false);
  const [recSpotM, setRecSpotM] = useState(false);
  const [surfSpotA, setSurfSpotA] = useState(false);
  const [surfSpotM, setSurfSpotM] = useState(false);
  const [ceilingA, setCeilingA] = useState(false);
  const [ceilingM, setCeilingM] = useState(false);
  const [recSwitchN, setRecSwitchN] = useState(false);
  const [recSwitchD, setRecSwitchD] = useState(false);
  const [wallA, setWallA] = useState(false);
  const [wallM, setWallM] = useState(false);
  const [garden, setGarden] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);
  const [lightbulbs, setLightbulbs] = useState(false);

  const [boxRecSpot, setBoxRecSpot] = useState(false);
  const [boxWall, setBoxWall] = useState(false);
  const [boxPlug, setBoxPlug] = useState(false);
  const [boxSurfSpot, setBoxSurfSpot] = useState(false);
  const [boxRecSwitch, setBoxRecSwitch] = useState(false);
  const [boxCeiling, setBoxCeiling] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let tableSession = sessionStorage.getItem('tableLamp') === 'true';
    let stripSession = sessionStorage.getItem('strip') === 'true';
    let plugSessionN = sessionStorage.getItem('plugN') === 'true';
    let plugSessionD = sessionStorage.getItem('plugD') === 'true';
    let recSpotWSession = sessionStorage.getItem('recSpotW') === 'true';
    let recSpotASession = sessionStorage.getItem('recSpotA') === 'true';
    let recSpotMSession = sessionStorage.getItem('recSpotM') === 'true';
    let surfSpotSessionA = sessionStorage.getItem('surfSpotA') === 'true';
    let surfSpotSessionM = sessionStorage.getItem('surfSpotM') === 'true';
    let ceilingSessionA = sessionStorage.getItem('ceilingA') === 'true';
    let ceilingSessionM = sessionStorage.getItem('ceilingM') === 'true';
    let wallSessionA = sessionStorage.getItem('wallA') === 'true';
    let wallSessionM = sessionStorage.getItem('wallM') === 'true';
    let recSwitchSessionN = sessionStorage.getItem('recSwitchN') === 'true';
    let recSwitchSessionD = sessionStorage.getItem('recSwitchD') === 'true';

    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';
    let lightbulbsSession = sessionStorage.getItem('lightbulbs') === 'true';

    setTableLamp(tableSession);
    setStrip(stripSession);
    setPlugN(plugSessionN);
    setPlugD(plugSessionD);
    setRecSpotW(recSpotWSession);
    setRecSpotA(recSpotASession);
    setRecSpotM(recSpotMSession);
    setSurfSpotA(surfSpotSessionA);
    setSurfSpotM(surfSpotSessionM);
    setCeilingA(ceilingSessionA);
    setCeilingM(ceilingSessionM);
    setWallA(wallSessionA);
    setWallM(wallSessionM);
    setRecSwitchN(recSwitchSessionN);
    setRecSwitchD(recSwitchSessionD);

    setGarden(gardenSession);
    setHeating(heatingSession);
    setSecurity(securitySession);
    setLightbulbs(lightbulbsSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('tableLamp', tableLamp);
    sessionStorage.setItem('strip', strip);
    sessionStorage.setItem('plugN', plugN);
    sessionStorage.setItem('plugD', plugD);
    sessionStorage.setItem('recSpotW', recSpotW);
    sessionStorage.setItem('recSpotA', recSpotA);
    sessionStorage.setItem('recSpotM', recSpotM);
    sessionStorage.setItem('surfSpotA', surfSpotA);
    sessionStorage.setItem('surfSpotM', surfSpotM);
    sessionStorage.setItem('ceilingA', ceilingA);
    sessionStorage.setItem('ceilingM', ceilingM);
    sessionStorage.setItem('wallA', wallA);
    sessionStorage.setItem('wallM', wallM);
    sessionStorage.setItem('recSwitchN', recSwitchN);
    sessionStorage.setItem('recSwitchD', recSwitchD);

    if (lightbulbs) return history.push('/gluehbirnen');
    return history.push('/beleuchtung');
  };

  const next = () => {
    sessionStorage.setItem('tableLamp', tableLamp);
    sessionStorage.setItem('strip', strip);
    sessionStorage.setItem('plugN', plugN);
    sessionStorage.setItem('plugD', plugD);
    sessionStorage.setItem('recSpotW', recSpotW);
    sessionStorage.setItem('recSpotA', recSpotA);
    sessionStorage.setItem('recSpotM', recSpotM);
    sessionStorage.setItem('surfSpotA', surfSpotA);
    sessionStorage.setItem('surfSpotM', surfSpotM);
    sessionStorage.setItem('ceilingA', ceilingA);
    sessionStorage.setItem('ceilingM', ceilingM);
    sessionStorage.setItem('wallA', wallA);
    sessionStorage.setItem('wallM', wallM);
    sessionStorage.setItem('recSwitchN', recSwitchN);
    sessionStorage.setItem('recSwitchD', recSwitchD);

    tableLamp ||
    strip ||
    plugN ||
    plugD ||
    recSpotW ||
    recSpotA ||
    recSpotM ||
    surfSpotA ||
    surfSpotM ||
    ceilingA ||
    ceilingM ||
    wallA ||
    wallM ||
    recSwitchN ||
    recSwitchD
      ? sessionStorage.setItem('innerLightsTemp', true)
      : sessionStorage.setItem('innerLightsTemp', false);

    if (garden) return history.push('/gartenbeleuchtung');
    if (heating) return history.push('/heizung');
    if (security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
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
    if (input === 'tableLamp' || input === 'strip') reset();
    if (input === 'tableLamp') return setTableLamp(!tableLamp);
    if (input === 'strip') return setStrip(!strip);
    if (input === 'recSpotW') return setRecSpotW(!recSpotW);
    if (input === 'recSpotA') return setRecSpotA(!recSpotA);
    if (input === 'recSpotM') return setRecSpotM(!recSpotM);
    if (input === 'wallA') return setWallA(!wallA);
    if (input === 'wallM') return setWallM(!wallM);

    if (input === 'plugN') return setPlugN(!plugN);
    if (input === 'plugD') return setPlugD(!plugD);
    if (input === 'surfSpotA') return setSurfSpotA(!surfSpotA);
    if (input === 'surfSpotM') return setSurfSpotM(!surfSpotM);
    if (input === 'recSwitchN') return setRecSwitchN(!recSwitchN);
    if (input === 'recSwitchD') return setRecSwitchD(!recSwitchD);
    if (input === 'ceilingA') return setCeilingA(!ceilingA);
    if (input === 'ceilingM') return setCeilingM(!ceilingM);
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
          className={`addSelectRadius ${recSpotW && 'selected'}`}
        >
          Dimmbar
        </div>
        <div
          onClick={() => handleClick('recSpotA')}
          className={`addSelectRadius ${recSpotA && 'selected'}`}
        >
          dimmbares Weißlicht
        </div>
        <div
          onClick={() => handleClick('recSpotM')}
          className={`addSelectRadius ${recSpotM && 'selected'}`}
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
          className={`addSelectRadius ${wallA && 'selected'}`}
        >
          dimmbares Weißlicht
        </div>
        <div
          onClick={() => handleClick('wallM')}
          className={`addSelectRadius ${wallM && 'selected'}`}
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
          className={`addSelectRadius ${plugN && 'selected'}`}
        >
          Einfach
        </div>
        <div
          onClick={() => handleClick('plugD')}
          className={`addSelectRadius ${plugD && 'selected'}`}
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
          className={`addSelectRadius ${surfSpotA && 'selected'}`}
        >
          dimmbares Weißlicht
        </div>
        <div
          onClick={() => handleClick('surfSpotM')}
          className={`addSelectRadius ${surfSpotM && 'selected'}`}
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
          className={`addSelectRadius ${recSwitchN && 'selected'}`}
        >
          Einfach
        </div>
        <div
          onClick={() => handleClick('recSwitchD')}
          className={`addSelectRadius ${recSwitchD && 'selected'}`}
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
          className={`addSelectRadius ${ceilingA && 'selected'}`}
        >
          dimmbares Weißlicht
        </div>
        <div
          onClick={() => handleClick('ceilingM')}
          className={`addSelectRadius ${ceilingM && 'selected'}`}
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
            className={`contentBox cursor ${strip && 'selected'}`}
          >
            {strip ? <img src={stripImgW} /> : <img src={stripImg} />}
            <div>Leuchtstreifen</div>
          </div>
          <div
            onClick={() => handleClick('tableLamp')}
            className={`contentBox cursor ${tableLamp && 'selected'}`}
          >
            {tableLamp ? (
              <img src={tableLampImgW} />
            ) : (
              <img src={tableLampImg} />
            )}
            <div>Tischlampe</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
          </MediaQuery>
          <div
            onClick={() => openBox('recSpot')}
            className={`contentBox cursor ${boxRecSpot && 'borderHghl'} ${
              recSpotW || recSpotA || recSpotM ? 'selected' : ''
            }`}
          >
            {recSpotW || recSpotA || recSpotM ? (
              <img src={recSpotImgW} />
            ) : (
              <img src={recSpotImg} />
            )}
            <div>Einbauspot</div>
          </div>
          <div
            onClick={() => openBox('wall')}
            className={`contentBox cursor ${boxWall && 'borderHghl'} ${
              wallA || wallM ? 'selected' : ''
            }`}
          >
            {wallA || wallM ? (
              <img src={wallLightImgW} />
            ) : (
              <img src={wallLightImg} />
            )}
            <div>Wandleuchte</div>
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
              plugN || plugD ? 'selected' : ''
            }`}
          >
            {plugN || plugD ? <img src={plugImgW} /> : <img src={plugImg} />}
            <div>Zwischenstecker</div>
          </div>
          <div
            onClick={() => openBox('surfSpot')}
            className={`contentBox cursor ${boxSurfSpot && 'borderHghl'} ${
              surfSpotA || surfSpotM ? 'selected' : ''
            }`}
          >
            {surfSpotA || surfSpotM ? (
              <img src={surfSpotImgW} />
            ) : (
              <img src={surfSpotImg} />
            )}
            <div>Aufbauspot</div>
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
              recSwitchN || recSwitchD ? 'selected' : ''
            }`}
          >
            {recSwitchN || recSwitchD ? (
              <img src={recSwitchImgW} />
            ) : (
              <img src={recSwitchImg} />
            )}
            <div>Unterputzaktor</div>
          </div>
          <div
            onClick={() => openBox('ceiling')}
            className={`contentBox cursor ${boxCeiling && 'borderHghl'} ${
              ceilingA || ceilingM ? 'selected' : ''
            }`}
          >
            {ceilingA || ceilingM ? (
              <img src={ceilingLightImgW} />
            ) : (
              <img src={ceilingLightImg} />
            )}
            <div>Deckenlampe</div>
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

export default Innerlights;
