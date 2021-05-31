import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/*
  Tischlampe : none,
  Leuchtstreifen: none,
  Einbauspot: W,A,M,
  Zwischenstecker: N,D,
  Aufbauspot: A,M,
  Deckenlampe: A,M,
  Wandlampe: A,M
  Unterputzschalter: N,D
*/

function Innerlights() {
  const [tableLamp, setTableLamp] = useState(false);
  const [strip, setStrip] = useState(false);
  const [plug, setPlug] = useState(false);
  const [recSpot, setRecSpot] = useState(false);
  const [surfSpot, setSurfSpot] = useState(false);
  const [ceiling, setCeiling] = useState(false);
  const [recSwitch, setRecSwitch] = useState(false);
  const [wall, setWall] = useState(false);
  const [garden, setGarden] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);
  const [lightbulbs, setLightbulbs] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let tableSession = sessionStorage.getItem('tableLamp') === 'true';
    let stripSession = sessionStorage.getItem('strip') === 'true';
    let plugSession = sessionStorage.getItem('plug') === 'true';
    let recSpotSession = sessionStorage.getItem('recSpot') === 'true';
    let surfSpotSession = sessionStorage.getItem('surfSpot') === 'true';
    let ceilingSession = sessionStorage.getItem('ceiling') === 'true';
    let wallSession = sessionStorage.getItem('wall') === 'true';
    let recSwitchSession = sessionStorage.getItem('recSwitch') === 'true';

    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';
    let lightbulbsSession = sessionStorage.getItem('lightbulbs') === 'true';

    setTableLamp(tableSession);
    setStrip(stripSession);
    setPlug(plugSession);
    setRecSpot(recSpotSession);
    setSurfSpot(surfSpotSession);
    setCeiling(ceilingSession);
    setWall(wallSession);
    setRecSwitch(recSwitchSession);

    setGarden(gardenSession);
    setHeating(heatingSession);
    setSecurity(securitySession);
    setLightbulbs(lightbulbsSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('tableLamp', tableLamp);
    sessionStorage.setItem('strip', strip);
    sessionStorage.setItem('plug', plug);
    sessionStorage.setItem('recSpot', recSpot);
    sessionStorage.setItem('surfSpot', surfSpot);
    sessionStorage.setItem('ceiling', ceiling);
    sessionStorage.setItem('wall', wall);
    sessionStorage.setItem('recSwitch', recSwitch);

    if (lightbulbs) return history.push('/gluehbirnen');
    return history.push('/beleuchtung');
  };

  const next = () => {
    sessionStorage.setItem('tableLamp', tableLamp);
    sessionStorage.setItem('strip', strip);
    sessionStorage.setItem('plug', plug);
    sessionStorage.setItem('recSpot', recSpot);
    sessionStorage.setItem('surfSpot', surfSpot);
    sessionStorage.setItem('ceiling', ceiling);
    sessionStorage.setItem('wall', wall);
    sessionStorage.setItem('recSwitch', recSwitch);

    if (garden) return history.push('/gartenbeleuchtung');
    if (heating) return history.push('/heizung');
    if (security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input) => {
    if (input === 'tableLamp') return setTableLamp(!tableLamp);
    if (input === 'strip') return setStrip(!strip);
    if (input === 'plug') return setPlug(!plug);
    if (input === 'recSpot') return setRecSpot(!recSpot);
    if (input === 'surfSpot') return setSurfSpot(!surfSpot);
    if (input === 'ceiling') return setCeiling(!ceiling);
    if (input === 'wall') return setWall(!wall);
    if (input === 'recSwitch') return setRecSwitch(!recSwitch);
  };

  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Innenbeleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
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
            onClick={() => handleClick('recSpot')}
            className={`typeBox recSpot ${recSpot ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Einbauspot</div>
          </div>
          <div
            onClick={() => handleClick('wall')}
            className={`typeBox wall ${wall ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Wandleuchte</div>
          </div>
          <div
            onClick={() => handleClick('plug')}
            className={`typeBox plug ${plug ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Zwischenstecker</div>
          </div>
          <div
            onClick={() => handleClick('surfSpot')}
            className={`typeBox surfSpot ${surfSpot ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Aufbauspot</div>
          </div>
          <div
            onClick={() => handleClick('recSwitch')}
            className={`typeBox recSwitch ${recSwitch ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Unterputzaktor</div>
          </div>
          <div
            onClick={() => handleClick('ceiling')}
            className={`typeBox ceiling ${ceiling ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Deckenlampe</div>
          </div>
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
  );
}

export default Innerlights;
