import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Innerlights() {
  const [tableLamp, setTableLamp] = useState(false);
  const [recSpot, setRecSpot] = useState(false);
  const [surfSpot, setSurfSpot] = useState(false);
  const [ceiling, setCeiling] = useState(false);
  const [garden, setGarden] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let tableSession = sessionStorage.getItem('tableLamp') === 'true';
    let recSpotSession = sessionStorage.getItem('recSpot') === 'true';
    let surfSpotSession = sessionStorage.getItem('surfSpot') === 'true';
    let ceilingSession = sessionStorage.getItem('ceiling') === 'true';
    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';

    setTableLamp(tableSession);
    setRecSpot(recSpotSession);
    setSurfSpot(surfSpotSession);
    setCeiling(ceilingSession);
    setGarden(gardenSession);
    setHeating(heatingSession);
    setSecurity(securitySession);
  }, []);

  const back = () => {
    sessionStorage.setItem('tableLamp', tableLamp);
    sessionStorage.setItem('recSpot', recSpot);
    sessionStorage.setItem('surfSpot', surfSpot);
    sessionStorage.setItem('ceiling', ceiling);

    return history.push('/beleuchtung');
  };

  const next = () => {
    sessionStorage.setItem('tableLamp', tableLamp);
    sessionStorage.setItem('recSpot', recSpot);
    sessionStorage.setItem('surfSpot', surfSpot);
    sessionStorage.setItem('ceiling', ceiling);

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
    if (input === 'recSpot') return setRecSpot(!recSpot);
    if (input === 'surfSpot') return setSurfSpot(!surfSpot);
    if (input === 'ceiling') return setCeiling(!ceiling);
  };

  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Innenbeleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="innerlightsContainer mgInnerlights">
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
            onClick={() => handleClick('surfSpot')}
            className={`typeBox surfSpot ${surfSpot ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Aufbauspot</div>
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
