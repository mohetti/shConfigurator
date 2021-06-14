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

    pathLightW ||
    pathLightM ||
    gardenSpot ||
    wallGardenW ||
    wallGardenM ||
    gardenStrip
      ? sessionStorage.setItem('gardenTemp', true)
      : sessionStorage.setItem('gardenTemp', false);

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
      <div className="spaceLeft"></div>
      <div className="center textCenter">
        <header>
          <h1 className="stripe mgt1">Gartenbeleuchtung:</h1>
        </header>
        <div className="configContainer">
          <div className="gardenlightsContainer mgGardenlights">
            <div
              onClick={() => openBox('pathLight')}
              className={`typeBox pathLight ${
                pathLightW || pathLightM ? 'selected' : ''
              }`}
            >
              {pathLightW || pathLightM ? (
                <img src={pathLightImgW} />
              ) : (
                <img src={pathLightImg} />
              )}
              <div
                className={`${
                  pathLightW || pathLightM ? 'higlightedText' : ''
                }`}
              >
                Wegeleuchten
              </div>
            </div>
            <div
              onClick={() => handleClick('gardenSpot')}
              className={`typeBox gardenSpot ${gardenSpot ? 'selected' : ''}`}
            >
              {gardenSpot ? (
                <img src={gardenSpotImgW} />
              ) : (
                <img src={gardenSpotImg} />
              )}
              <div className={`${gardenSpot ? 'higlightedText' : ''}`}>
                Gartenspots
              </div>
            </div>
            <div
              onClick={() => openBox('wallGarden')}
              className={`typeBox wallGarden ${
                wallGardenW || wallGardenM ? 'selected' : ''
              } `}
            >
              {wallGardenW || wallGardenM ? (
                <img src={wallLightGardenImgW} />
              ) : (
                <img src={wallLightGardenImg} />
              )}
              <div
                className={`${
                  wallGardenW || wallGardenM ? 'higlightedText' : ''
                }`}
              >
                Wandbeleuchtung
              </div>
            </div>
            <div
              onClick={() => handleClick('gardenStrip')}
              className={`typeBox gardenStrip ${gardenStrip ? 'selected' : ''}`}
            >
              {gardenStrip ? (
                <img src={gardenStripImgW} />
              ) : (
                <img src={gardenStripImg} />
              )}
              <div className={`${gardenStrip ? 'higlightedText' : ''}`}>
                Leuchtstreifen
              </div>
            </div>
            {boxPathLight && (
              <div className="boxPathLight">
                <div
                  onClick={() => handleClick('pathLightW')}
                  className={`mgt1 bradius fontSize1 ${
                    pathLightW ? 'selected higlightedText' : ''
                  }`}
                >
                  Dimmbar
                </div>
                <div
                  onClick={() => handleClick('pathLightM')}
                  className={`mgt1 bradius fontSize1 ${
                    pathLightM ? 'selected higlightedText' : ''
                  }`}
                >
                  Weiß- und Farblicht
                </div>
              </div>
            )}

            {boxWallGarden && (
              <div className="boxWallGarden">
                <div
                  onClick={() => handleClick('wallGardenW')}
                  className={`mgt1 bradius fontSize1 ${
                    wallGardenW ? 'selected higlightedText' : ''
                  }`}
                >
                  Dimmbar
                </div>
                <div
                  onClick={() => handleClick('wallGardenM')}
                  className={`mgt1 bradius fontSize1 ${
                    wallGardenM ? 'selected higlightedText' : ''
                  }`}
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

export default Gardenlights;
