import lightImg from '../images/categories/light.png';
import heatingImg from '../images/categories/heating.png';
import securityImg from '../images/categories/security.png';

import lightImgW from '../images/categories/lightW.png';
import heatingImgW from '../images/categories/heatingW.png';
import securityImgW from '../images/categories/securityW.png';

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Categories() {
  const [light, setLight] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let lightSession = sessionStorage.getItem('light') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';
    setLight(lightSession);
    setHeating(heatingSession);
    setSecurity(securitySession);
  }, []);

  const back = () => {
    sessionStorage.setItem('light', light);
    sessionStorage.setItem('heating', heating);
    sessionStorage.setItem('security', security);

    return history.push('/start');
  };
  const reset = () => {
    if (!light) {
      let lightsList = [
        'e27W',
        'e27A',
        'e27M',
        'e14W',
        'e14A',
        'e14M',
        'gu10W',
        'gu10A',
        'gu10M',
        'strip',
        'plugN',
        'plugD',
        'innerLights',
        'garden',
        'tableLamp',
        'wallA',
        'wallM',
        'recSwitchN',
        'recSwitchD',
        'recSpotW',
        'recSpotA',
        'recSpotM',
        'surfSpotA',
        'surfSpotM',
        'ceilingA',
        'ceilingM',
        'pathLightW',
        'pathLightM',
        'gardenSpot',
        'wallGardenW',
        'wallGardenM',
        'gardenStrip',
      ];
      lightsList.map((x) => sessionStorage.setItem(x, false));
    }
    if (!heating) {
      let heatingList = [
        'radiator',
        'thermostatWired230',
        'thermostatWired24',
        'thermostatWireless',
        'heatActor12Motorized',
        'heatActor24_06',
        'heatActor24_10',
        'heatActor230_06',
        'heatActor230_10',
      ];
      heatingList.map((x) => sessionStorage.setItem(x, false));
    }
    if (!security) {
      let securityList = [
        'motionI',
        'motionO',
        'windowSensor',
        'sirenI',
        'sirenO',
        'smoke',
        'lock',
        'doorbell',
        'cameraI',
        'cameraO',
      ];
      securityList.map((x) => sessionStorage.setItem(x, false));
    }
  };

  const next = () => {
    sessionStorage.setItem('light', light);
    sessionStorage.setItem('heating', heating);
    sessionStorage.setItem('security', security);

    reset();

    if (light) return history.push('/beleuchtung');
    if (heating) return history.push('/heizung');
    if (security) return history.push('/sicherheit');
    else return alert('Bitte mindestens eine Kategorie auswählen.');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input) => {
    if (input === 'lights') return setLight(!light);
    if (input === 'heating') return setHeating(!heating);
    if (input === 'security') return setSecurity(!security);
  };
  return (
    <div className="background">
      <div className="content1">
        <header>
          <h1 className="stripe mgt1 textCenter">Kategorien:</h1>
        </header>
        <div className="configContainer">
          <div className="confirmContainer mgCtg">
            <div
              onClick={() => handleClick('lights')}
              className={`typeBox ${light ? 'selected' : ''}`}
            >
              {light ? <img src={lightImgW} /> : <img src={lightImg} />}
              <div className={`${light ? 'higlightedText' : ''}`}>
                Beleuchtung
              </div>
            </div>
            <div
              onClick={() => handleClick('heating')}
              className={`typeBox ${heating ? 'selected' : ''}`}
            >
              {heating ? <img src={heatingImgW} /> : <img src={heatingImg} />}
              <div className={`${heating ? 'higlightedText' : ''}`}>
                Heizung
              </div>
            </div>
            <div
              onClick={() => handleClick('security')}
              className={`typeBox ${security ? 'selected' : ''}`}
            >
              {security ? (
                <img src={securityImgW} />
              ) : (
                <img src={securityImg} />
              )}
              <div className={`${security ? 'higlightedText' : ''}`}>
                Sicherheit
              </div>
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
    </div>
  );
}

export default Categories;
