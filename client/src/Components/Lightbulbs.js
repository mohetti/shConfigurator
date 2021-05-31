import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Lightbulbs() {
  const [e27W, setE27W] = useState(false);
  const [e27A, setE27A] = useState(false);
  const [e27M, setE27M] = useState(false);
  const [e14W, setE14W] = useState(false);
  const [e14A, setE14A] = useState(false);
  const [e14M, setE14M] = useState(false);
  const [gu10W, setGu10W] = useState(false);
  const [gu10A, setGu10A] = useState(false);
  const [gu10M, setGu10M] = useState(false);

  const [innerLights, setInnerLights] = useState(false);
  const [garden, setGarden] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);

  const [selectorBoxWhite, setSelectorBoxWhite] = useState(false);
  const [selectorBoxAmbiance, setSelectorBoxAmbiance] = useState(false);
  const [selectorBoxMulticolor, setSelectorBoxMulticolor] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  let history = useHistory();

  useEffect(() => {
    let e27WSession = sessionStorage.getItem('e27W') === 'true';
    let e27ASession = sessionStorage.getItem('e27A') === 'true';
    let e27MSession = sessionStorage.getItem('e27M') === 'true';
    let e14WSession = sessionStorage.getItem('e14W') === 'true';
    let e14ASession = sessionStorage.getItem('e14A') === 'true';
    let e14MSession = sessionStorage.getItem('e14M') === 'true';
    let gu10WSession = sessionStorage.getItem('gu10W') === 'true';
    let gu10ASession = sessionStorage.getItem('gu10A') === 'true';
    let gu10MSession = sessionStorage.getItem('gu10M') === 'true';

    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let gardenSession = sessionStorage.getItem('garden') === 'true';
    let heatingSession = sessionStorage.getItem('heating') === 'true';
    let securitySession = sessionStorage.getItem('security') === 'true';

    setE27W(e27WSession);
    setE27A(e27ASession);
    setE27M(e27MSession);
    setE14W(e14WSession);
    setE14A(e14ASession);
    setE14M(e14MSession);
    setGu10W(gu10WSession);
    setGu10A(gu10ASession);
    setGu10M(gu10MSession);

    setInnerLights(innerLightsSession);
    setGarden(gardenSession);
    setHeating(heatingSession);
    setSecurity(securitySession);
  }, []);

  const back = () => {
    sessionStorage.setItem('e27W', e27W);
    sessionStorage.setItem('e27A', e27A);
    sessionStorage.setItem('e27M', e27M);

    sessionStorage.setItem('e14W', e14W);
    sessionStorage.setItem('e14A', e14A);
    sessionStorage.setItem('e14M', e14M);

    sessionStorage.setItem('gu10W', gu10W);
    sessionStorage.setItem('gu10A', gu10A);
    sessionStorage.setItem('gu10M', gu10M);

    return history.push('/beleuchtung');
  };

  const next = () => {
    sessionStorage.setItem('e27W', e27W);
    sessionStorage.setItem('e27A', e27A);
    sessionStorage.setItem('e27M', e27M);

    sessionStorage.setItem('e14W', e14W);
    sessionStorage.setItem('e14A', e14A);
    sessionStorage.setItem('e14M', e14M);

    sessionStorage.setItem('gu10W', gu10W);
    sessionStorage.setItem('gu10A', gu10A);
    sessionStorage.setItem('gu10M', gu10M);

    if (innerLights) return history.push('/innenbeleuchtung');
    if (garden) return history.push('/gartenbeleuchtung');
    if (heating) return history.push('/heizung');
    if (security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const openSelector = (color) => {
    setSelectedColor(color);
    if (color === 'white') {
      setSelectorBoxWhite(!selectorBoxWhite);
      setSelectorBoxAmbiance(false);
      setSelectorBoxMulticolor(false);
      return;
    }
    if (color === 'ambiance') {
      setSelectorBoxWhite(false);
      setSelectorBoxAmbiance(!selectorBoxAmbiance);
      setSelectorBoxMulticolor(false);
      return;
    }
    if (color === 'multicolor') {
      setSelectorBoxWhite(false);
      setSelectorBoxAmbiance(false);
      setSelectorBoxMulticolor(!selectorBoxMulticolor);
      return;
    }
  };

  const handleClick = (input) => {
    if (input === 'e27') {
      if (selectedColor === 'white') return setE27W(!e27W);
      if (selectedColor === 'ambiance') return setE27A(!e27A);
      if (selectedColor === 'multicolor') return setE27M(!e27M);
    }
    if (input === 'e14') {
      if (selectedColor === 'white') return setE14W(!e14W);
      if (selectedColor === 'ambiance') return setE14A(!e14A);
      if (selectedColor === 'multicolor') return setE14M(!e14M);
    }
    if (input === 'gu10') {
      if (selectedColor === 'white') return setGu10W(!gu10W);
      if (selectedColor === 'ambiance') return setGu10A(!gu10A);
      if (selectedColor === 'multicolor') return setGu10M(!gu10M);
    }
  };

  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle die passende Beleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="lightBulbContainer mgLightbulbs">
          <div
            onClick={() => openSelector('white')}
            className={`typeBox white ${
              e27W || e14W || gu10W ? 'selected' : ''
            }`}
          >
            <img src={placeholder} />
            <div>Dimmbares Licht</div>
          </div>
          <div
            onClick={() => openSelector('ambiance')}
            className={`typeBox ambiance ${
              e27A || e14A || gu10A ? 'selected' : ''
            }`}
          >
            <img src={placeholder} />
            <div>Dimmbares Weißlicht</div>
          </div>
          <div
            onClick={() => openSelector('multicolor')}
            className={`typeBox multicolor ${
              e27M || e14M || gu10M ? 'selected' : ''
            }`}
          >
            <img src={placeholder} />
            <div>Weiß- und Farblicht</div>
          </div>
          {selectorBoxWhite && (
            <div className="bulbs">
              <div
                onClick={() => handleClick('e27')}
                className={`typeBox e27 ${e27W ? 'selected' : ''}`}
              >
                E27
              </div>
              <div
                onClick={() => handleClick('e14')}
                className={`typeBox e14 ${e14W ? 'selected' : ''}`}
              >
                E14
              </div>
              <div
                onClick={() => handleClick('gu10')}
                className={`typeBox gu10 ${gu10W ? 'selected' : ''}`}
              >
                GU10
              </div>
            </div>
          )}
          {selectorBoxAmbiance && (
            <div className="bulbs">
              <div
                onClick={() => handleClick('e27')}
                className={`typeBox e27 ${e27A ? 'selected' : ''}`}
              >
                E27
              </div>
              <div
                onClick={() => handleClick('e14')}
                className={`typeBox e14 ${e14A ? 'selected' : ''}`}
              >
                E14
              </div>
              <div
                onClick={() => handleClick('gu10')}
                className={`typeBox gu10 ${gu10A ? 'selected' : ''}`}
              >
                GU10
              </div>
            </div>
          )}
          {selectorBoxMulticolor && (
            <div className="bulbs">
              <div
                onClick={() => handleClick('e27')}
                className={`typeBox e27 ${e27M ? 'selected' : ''}`}
              >
                E27
              </div>
              <div
                onClick={() => handleClick('e14')}
                className={`typeBox e14 ${e14M ? 'selected' : ''}`}
              >
                E14
              </div>
              <div
                onClick={() => handleClick('gu10')}
                className={`typeBox gu10 ${gu10M ? 'selected' : ''}`}
              >
                GU10
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

export default Lightbulbs;
