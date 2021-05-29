import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Categories() {
  const [light, setLight] = useState(false);
  let history = useHistory();

  useEffect(() => {
    let item = sessionStorage.getItem('light');
    let res = item === 'true';
    setLight(res);
  }, []);

  let back = () => {
    sessionStorage.setItem('light', light);
    return history.push('/start');
  };

  let next = () => {
    sessionStorage.setItem('light', light);
    return history.push('/beleuchtung');
  };

  let infos = () => {
    console.log('Placeholder');
  };

  let lights = () => {
    setLight(!light);
  };
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle Deine Kategorien:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="typeContainer mgCtg">
          <div
            onClick={lights}
            className={`typeBox ${light ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Beleuchtung</div>
          </div>
          <div className="typeBox">
            <img src={placeholder} />
            <div>Heizung</div>
          </div>
          <div className="typeBox">
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
