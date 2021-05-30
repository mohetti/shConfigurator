import placeholder from '../images/placeholder.png';
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
        'e27',
        'e14',
        'gu10',
        'strip',
        'plug',
        'innerLights',
        'garden',
        'tableLampe',
        'recSpot',
        'surfSpot',
        'ceiling',
        'pathLight',
        'gardenSpot',
        'wallGarden',
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
        'heatActors',
      ];
      heatingList.map((x) => sessionStorage.setItem(x, false));
    }
    if (!security) {
      let securityList = [
        'motion',
        'windowSensor',
        'siren',
        'smoke',
        'lock',
        'doorbell',
        'camera',
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
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle Deine Kategorien:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="typeContainer mgCtg">
          <div
            onClick={() => handleClick('lights')}
            className={`typeBox ${light ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Beleuchtung</div>
          </div>
          <div
            onClick={() => handleClick('heating')}
            className={`typeBox ${heating ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Heizung</div>
          </div>
          <div
            onClick={() => handleClick('security')}
            className={`typeBox ${security ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Sicherheit</div>
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

export default Categories;
