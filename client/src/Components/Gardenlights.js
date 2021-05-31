import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Gardenlights() {
  const [pathLight, setPathLight] = useState(false);
  const [gardenSpot, setGardenSpot] = useState(false);
  const [wallGarden, setWallGarden] = useState(false);
  const [gardenStrip, setGardenStrip] = useState(false);
  const [innerLights, setInnerLights] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);
  const [lightbulbs, setLightbulbs] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let pathLightSession = sessionStorage.getItem('pathLight') === 'true';
    let gardenSpotSession = sessionStorage.getItem('gardenSpot') === 'true';
    let wallGardenSession = sessionStorage.getItem('wallGarden') === 'true';
    let gardenStripSession = sessionStorage.getItem('gardenStrip') === 'true';
    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';
    let lightbulbsSession = sessionStorage.getItem('lightbulbs') === 'true';

    setPathLight(pathLightSession);
    setGardenSpot(gardenSpotSession);
    setWallGarden(wallGardenSession);
    setGardenStrip(gardenStripSession);
    setInnerLights(innerLightsSession);
    setHeating(heatingSession);
    setSecurity(securitySession);
    setLightbulbs(lightbulbsSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('pathLight', pathLight);
    sessionStorage.setItem('gardenSpot', gardenSpot);
    sessionStorage.setItem('wallGarden', wallGarden);
    sessionStorage.setItem('gardenStrip', gardenStrip);

    if (innerLights) return history.push('/innenbeleuchtung');
    if (lightbulbs) return history.push('/gluehbirnen');
    return history.push('/beleuchtung');
  };

  const next = () => {
    sessionStorage.setItem('pathLight', pathLight);
    sessionStorage.setItem('gardenSpot', gardenSpot);
    sessionStorage.setItem('wallGarden', wallGarden);
    sessionStorage.setItem('gardenStrip', gardenStrip);

    if (heating) return history.push('/heizung');
    if (security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input) => {
    if (input === 'pathLight') return setPathLight(!pathLight);
    if (input === 'gardenSpot') return setGardenSpot(!gardenSpot);
    if (input === 'wallGarden') return setWallGarden(!wallGarden);
    if (input === 'gardenStrip') return setGardenStrip(!gardenStrip);
  };

  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Gartenbeleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="gardenlightsContainer mgGardenlights">
          <div
            onClick={() => handleClick('pathLight')}
            className={`typeBox pathLight ${pathLight ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Wegeleuchten</div>
          </div>
          <div
            onClick={() => handleClick('gardenSpot')}
            className={`typeBox gardenSpot ${gardenSpot ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Gartenspots</div>
          </div>
          <div
            onClick={() => handleClick('wallGarden')}
            className={`typeBox wallGarden ${wallGarden ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Wandbeleuchtung</div>
          </div>
          <div
            onClick={() => handleClick('gardenStrip')}
            className={`typeBox gardenStrip ${gardenStrip ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Leuchtstreifen</div>
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

export default Gardenlights;
