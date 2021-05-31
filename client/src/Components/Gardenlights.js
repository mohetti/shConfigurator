import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Gardenlights() {
  const [pathLightW, setPathLightW] = useState(false);
  const [pathLightM, setPathLightM] = useState(false);
  const [gardenSpot, setGardenSpot] = useState(false);
  const [wallGardenW, setWallGardenW] = useState(false);
  const [wallGardenM, setWallGardenM] = useState(false);
  const [gardenStrip, setGardenStrip] = useState(false);
  const [innerLights, setInnerLights] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);
  const [lightbulbs, setLightbulbs] = useState(false);

  const [boxPathLight, setBoxPathLight] = useState(false);
  const [boxWallGarden, setBoxWallGarden] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let pathLightSessionW = sessionStorage.getItem('pathLightW') === 'true';
    let pathLightSessionM = sessionStorage.getItem('pathLightM') === 'true';
    let gardenSpotSession = sessionStorage.getItem('gardenSpot') === 'true';
    let wallGardenSessionW = sessionStorage.getItem('wallGardenW') === 'true';
    let wallGardenSessionM = sessionStorage.getItem('wallGardenM') === 'true';
    let gardenStripSession = sessionStorage.getItem('gardenStrip') === 'true';
    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';
    let lightbulbsSession = sessionStorage.getItem('lightbulbs') === 'true';

    setPathLightW(pathLightSessionW);
    setPathLightM(pathLightSessionM);
    setGardenSpot(gardenSpotSession);
    setWallGardenW(wallGardenSessionW);
    setWallGardenM(wallGardenSessionM);
    setGardenStrip(gardenStripSession);
    setInnerLights(innerLightsSession);
    setHeating(heatingSession);
    setSecurity(securitySession);
    setLightbulbs(lightbulbsSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('pathLightW', pathLightW);
    sessionStorage.setItem('pathLightM', pathLightM);
    sessionStorage.setItem('gardenSpot', gardenSpot);
    sessionStorage.setItem('wallGardenW', wallGardenW);
    sessionStorage.setItem('wallGardenM', wallGardenM);
    sessionStorage.setItem('gardenStrip', gardenStrip);

    if (innerLights) return history.push('/innenbeleuchtung');
    if (lightbulbs) return history.push('/gluehbirnen');
    return history.push('/beleuchtung');
  };

  const next = () => {
    sessionStorage.setItem('pathLightW', pathLightW);
    sessionStorage.setItem('pathLightM', pathLightM);
    sessionStorage.setItem('gardenSpot', gardenSpot);
    sessionStorage.setItem('wallGardenW', wallGardenW);
    sessionStorage.setItem('wallGardenM', wallGardenM);
    sessionStorage.setItem('gardenStrip', gardenStrip);

    if (heating) return history.push('/heizung');
    if (security) return history.push('/sicherheit');
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
    if (input === 'pathLightW') return setPathLightW(!pathLightW);
    if (input === 'pathLightM') return setPathLightM(!pathLightM);
    if (input === 'gardenSpot') return setGardenSpot(!gardenSpot);
    if (input === 'wallGardenW') return setWallGardenW(!wallGardenW);
    if (input === 'wallGardenM') return setWallGardenM(!wallGardenM);
    if (input === 'gardenStrip') return setGardenStrip(!gardenStrip);
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

  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Gartenbeleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="gardenlightsContainer mgGardenlights">
          <div
            onClick={() => openBox('pathLight')}
            className={`typeBox pathLight ${
              pathLightW || pathLightM ? 'selected' : ''
            }`}
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
            onClick={() => openBox('wallGarden')}
            className={`typeBox wallGarden ${
              wallGardenW || wallGardenM ? 'selected' : ''
            }`}
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
          {boxPathLight && (
            <div className="boxPathLight">
              <div
                onClick={() => handleClick('pathLightW')}
                className={pathLightW ? 'selected' : ''}
              >
                Dimmbar
              </div>
              <div
                onClick={() => handleClick('pathLightM')}
                className={pathLightM ? 'selected' : ''}
              >
                Weiß- und Farblicht
              </div>
            </div>
          )}
          {boxWallGarden && (
            <div className="boxWallGarden">
              <div
                onClick={() => handleClick('wallGardenW')}
                className={wallGardenW ? 'selected' : ''}
              >
                Dimmbar
              </div>
              <div
                onClick={() => handleClick('wallGardenM')}
                className={wallGardenM ? 'selected' : ''}
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
  );
}

export default Gardenlights;
