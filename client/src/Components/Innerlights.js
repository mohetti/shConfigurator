import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

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

  return (
    <div className="windowContainer">
      <div className="spaceLeft"></div>
      <div className="center">
        <header>
          <h1 className="stripe mgt1">weitere Innenbeleuchtung:</h1>
        </header>
        <div className="configContainer">
          <div className="innerlightsContainer mgInnerlights">
            <div
              onClick={() => handleClick('strip')}
              className={`typeBox strip ${strip ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Leuchtstreifen</div>
            </div>
            <div
              onClick={() => handleClick('tableLamp')}
              className={`typeBox tableLamp ${tableLamp ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Tischlampe</div>
            </div>
            <div
              onClick={() => openBox('recSpot')}
              className={`typeBox recSpot ${
                recSpotW || recSpotA || recSpotM ? 'selected' : ''
              }`}
            >
              <img src={placeholder} />
              <div>Einbauspot</div>
            </div>
            <div
              onClick={() => openBox('wall')}
              className={`typeBox wall ${wallA || wallM ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Wandleuchte</div>
            </div>
            <div
              onClick={() => openBox('plug')}
              className={`typeBox plug ${plugN || plugD ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Zwischenstecker</div>
            </div>
            <div
              onClick={() => openBox('surfSpot')}
              className={`typeBox surfSpot ${
                surfSpotA || surfSpotM ? 'selected' : ''
              }`}
            >
              <img src={placeholder} />
              <div>Aufbauspot</div>
            </div>
            <div
              onClick={() => openBox('recSwitch')}
              className={`typeBox recSwitch ${
                recSwitchN || recSwitchD ? 'selected' : ''
              }`}
            >
              <img src={placeholder} />
              <div>Unterputzaktor</div>
            </div>
            <div
              onClick={() => openBox('ceiling')}
              className={`typeBox ceiling ${
                ceilingA || ceilingM ? 'selected' : ''
              }`}
            >
              <img src={placeholder} />
              <div>Deckenlampe</div>
            </div>
            {boxRecSpot && (
              <div className="boxRecSpot">
                <div
                  onClick={() => handleClick('recSpotW')}
                  className={recSpotW ? 'selected' : ''}
                >
                  Dimmbar
                </div>
                <div
                  onClick={() => handleClick('recSpotA')}
                  className={recSpotA ? 'selected' : ''}
                >
                  dimmbares Weißlicht
                </div>
                <div
                  onClick={() => handleClick('recSpotM')}
                  className={recSpotM ? 'selected' : ''}
                >
                  Weiß- und Farblicht
                </div>
              </div>
            )}
            {boxWall && (
              <div className="boxWall">
                <div
                  onClick={() => handleClick('wallA')}
                  className={wallA ? 'selected' : ''}
                >
                  dimmbares Weißlicht
                </div>
                <div
                  onClick={() => handleClick('wallM')}
                  className={wallM ? 'selected' : ''}
                >
                  Weiß- und Farblicht
                </div>
              </div>
            )}
            {boxPlug && (
              <div className="boxPlug">
                <div
                  onClick={() => handleClick('plugN')}
                  className={plugN ? 'selected' : ''}
                >
                  Einfach
                </div>
                <div
                  onClick={() => handleClick('plugD')}
                  className={plugD ? 'selected' : ''}
                >
                  mit Dimmfunktion
                </div>
              </div>
            )}
            {boxSurfSpot && (
              <div className="boxSurfSpot">
                <div
                  onClick={() => handleClick('surfSpotA')}
                  className={surfSpotA ? 'selected' : ''}
                >
                  dimmbares Weißlicht
                </div>
                <div
                  onClick={() => handleClick('surfSpotM')}
                  className={surfSpotM ? 'selected' : ''}
                >
                  Weiß- und Farblicht
                </div>
              </div>
            )}
            {boxRecSwitch && (
              <div className="boxRecSwitch">
                <div
                  onClick={() => handleClick('recSwitchN')}
                  className={recSwitchN ? 'selected' : ''}
                >
                  Einfach
                </div>
                <div
                  onClick={() => handleClick('recSwitchD')}
                  className={recSwitchD ? 'selected' : ''}
                >
                  mit Dimmfunktion
                </div>
              </div>
            )}
            {boxCeiling && (
              <div className="boxCeiling">
                <div
                  onClick={() => handleClick('ceilingA')}
                  className={ceilingA ? 'selected' : ''}
                >
                  dimmbares Weißlicht
                </div>
                <div
                  onClick={() => handleClick('ceilingM')}
                  className={ceilingM ? 'selected' : ''}
                >
                  Weiß- und Farblicht
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

export default Innerlights;
