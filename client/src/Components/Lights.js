import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Lights() {
  const [lightbulbs, setLightbulbs] = useState(false);
  const [innerLights, setInnerLights] = useState(false);
  const [garden, setGarden] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let lightbulbsSession = sessionStorage.getItem('lightbulbs') === 'true';
    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';

    setLightbulbs(lightbulbsSession);
    setInnerLights(innerLightsSession);
    setGarden(gardenSession);
    setHeating(heatingSession);
    setSecurity(securitySession);
  }, []);

  const back = () => {
    sessionStorage.setItem('lightbulbs', lightbulbs);
    sessionStorage.setItem('innerLights', innerLights);
    sessionStorage.setItem('garden', garden);

    return history.push('/kategorien');
  };

  const reset = () => {
    if (!garden) {
      let gardenList = [
        'pathLightW',
        'pathLightM',
        'gardenSpot',
        'wallGardenW',
        'wallGardenM',
        'gardenStrip',
      ];
      gardenList.map((x) => sessionStorage.setItem(x, false));
    }
    if (!innerLights) {
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
      ];
      innerLightsList.map((x) => sessionStorage.setItem(x, false));
    }

    if (!lightbulbs) {
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
      ];
      lightbulbList.map((x) => sessionStorage.setItem(x, false));
    }
  };

  const next = () => {
    sessionStorage.setItem('lightbulbs', lightbulbs);
    sessionStorage.setItem('innerLights', innerLights);
    sessionStorage.setItem('garden', garden);

    reset();
    if (lightbulbs) return history.push('/gluehbirnen');
    if (innerLights) return history.push('/innenbeleuchtung');
    if (garden) return history.push('/gartenbeleuchtung');
    if (heating) return history.push('/heizung');
    if (security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input) => {
    if (input === 'lightbulbs') return setLightbulbs(!lightbulbs);
    if (input === 'innerLights') return setInnerLights(!innerLights);
    if (input === 'garden') return setGarden(!garden);
  };

  return (
    <div className="windowContainer">
      <div className="spaceLeft"></div>
      <div className="center">
        <header>
          <h1 className="stripe mgt1">Beleuchtungsoptionen:</h1>
        </header>
        <div className="configContainer">
          <div className="lightContainer mgLights">
            <div
              onClick={() => handleClick('lightbulbs')}
              className={`typeBox lightbulbs ${lightbulbs ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Glühbirnen und Spots</div>
            </div>
            <div
              onClick={() => handleClick('innerLights')}
              className={`typeBox innerLights ${innerLights ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>weitere Innenbeleuchtung</div>
            </div>
            <div
              onClick={() => handleClick('garden')}
              className={`typeBox garden ${garden ? 'selected' : ''}`}
            >
              <img src={placeholder} />
              <div>Gartenbeleuchtung</div>
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
      <div className="spaceRight  "></div>
    </div>
  );
}

export default Lights;
