import e27Img from '../images/lights/e27.png';
import e14Img from '../images//lights/e14.png';
import gu10Img from '../images/lights/gu10.png';

import e27ImgW from '../images/lights/e27W.png';
import e14ImgW from '../images/lights/e14W.png';
import gu10ImgW from '../images/lights/gu10W.png';

import lightWhiteImg from '../images/lights/lightWhite.png';
import lightAmbianceImg from '../images/lights/lightAmbiance.png';
import lightColorImg from '../images/lights/lightColor.png';

import lightWhiteImgW from '../images/lights/lightWhiteW.png';
import lightAmbianceImgW from '../images//lights/lightAmbianceW.png';
import lightColorImgW from '../images/lights/lightColorW.png';

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

  const [borderW, setBorderW] = useState(false);
  const [borderA, setBorderA] = useState(false);
  const [borderM, setBorderM] = useState(false);

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

    e27W || e27A || e27M || e14W || e14A || e14M || gu10W || gu10A || gu10M
      ? sessionStorage.setItem('lightbulbsTemp', true)
      : sessionStorage.setItem('lightbulbsTemp', false);

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
      setBorderW(!borderW);
      setBorderA(false);
      setBorderM(false);
      return;
    }
    if (color === 'ambiance') {
      setSelectorBoxWhite(false);
      setSelectorBoxAmbiance(!selectorBoxAmbiance);
      setSelectorBoxMulticolor(false);
      setBorderW(false);
      setBorderA(!borderA);
      setBorderM(false);
      return;
    }
    if (color === 'multicolor') {
      setSelectorBoxWhite(false);
      setSelectorBoxAmbiance(false);
      setSelectorBoxMulticolor(!selectorBoxMulticolor);
      setBorderW(false);
      setBorderA(false);
      setBorderM(!borderM);
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
    <div className="background">
      <div className="center content1">
        <header>
          <h1 className="stripe mgt1 textCenter">Spots & Glühbirnen:</h1>
        </header>
        <div className="configContainer">
          <div className="confirmContainer mgLightbulbs">
            <div
              onClick={() => openSelector('white')}
              className={`typeBox white ${borderW && 'borderHghl'} ${
                e27W || e14W || gu10W ? 'selected' : ''
              }`}
            >
              {e27W || e14W || gu10W ? (
                <img src={lightWhiteImgW} />
              ) : (
                <img src={lightWhiteImg} />
              )}
              <div
                className={`${e27W || e14W || gu10W ? 'higlightedText' : ''}`}
              >
                Dimmbares Licht
              </div>
            </div>
            <div
              onClick={() => openSelector('ambiance')}
              className={`typeBox ambiance ${borderA && 'borderHghl'} ${
                e27A || e14A || gu10A ? 'selected' : ''
              }`}
            >
              {e27A || e14A || gu10A ? (
                <img src={lightAmbianceImgW} />
              ) : (
                <img src={lightAmbianceImg} />
              )}
              <div
                className={`${e27A || e14A || gu10A ? 'higlightedText' : ''}`}
              >
                Dimmbares Weißlicht
              </div>
            </div>
            <div
              onClick={() => openSelector('multicolor')}
              className={`typeBox multicolor ${borderM && 'borderHghl'} ${
                e27M || e14M || gu10M ? 'selected' : ''
              }`}
            >
              {e27M || e14M || gu10M ? (
                <img src={lightColorImgW} />
              ) : (
                <img src={lightColorImg} />
              )}
              <div
                className={`${e27M || e14M || gu10M ? 'higlightedText' : ''}`}
              >
                Weiß- und Farblicht
              </div>
            </div>
            {selectorBoxWhite && (
              <div className="bulbs">
                <div
                  onClick={() => handleClick('e27')}
                  className={`typeBox e27 ${e27W ? 'selected' : ''}`}
                >
                  {e27W ? <img src={e27ImgW} /> : <img src={e27Img} />}
                  <div className={`${e27W ? 'highlightedText' : ''}`}>E27</div>
                </div>
                <div
                  onClick={() => handleClick('e14')}
                  className={`typeBox e14 ${e14W ? 'selected' : ''}`}
                >
                  {e14W ? <img src={e14ImgW} /> : <img src={e14Img} />}
                  <div className={`${e14W ? 'highlightedText' : ''}`}>E14</div>
                </div>
                <div
                  onClick={() => handleClick('gu10')}
                  className={`typeBox gu10 ${gu10W ? 'selected' : ''}`}
                >
                  {gu10W ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
                  <div className={`${gu10W ? 'highlightedText' : ''}`}>
                    GU10
                  </div>
                </div>
              </div>
            )}
            {selectorBoxAmbiance && (
              <div className="bulbs">
                <div
                  onClick={() => handleClick('e27')}
                  className={`typeBox e27 ${e27A ? 'selected' : ''}`}
                >
                  {e27A ? <img src={e27ImgW} /> : <img src={e27Img} />}
                  <div className={`${e27A ? 'highlightedText' : ''}`}>E27</div>
                </div>
                <div
                  onClick={() => handleClick('e14')}
                  className={`typeBox e14 ${e14A ? 'selected' : ''}`}
                >
                  {e14A ? <img src={e14ImgW} /> : <img src={e14Img} />}
                  <div className={`${e14A ? 'highlightedText' : ''}`}>E14</div>
                </div>
                <div
                  onClick={() => handleClick('gu10')}
                  className={`typeBox gu10 ${gu10A ? 'selected' : ''}`}
                >
                  {gu10A ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
                  <div className={`${gu10A ? 'highlightedText' : ''}`}>
                    GU10
                  </div>
                </div>
              </div>
            )}
            {selectorBoxMulticolor && (
              <div className="bulbs">
                <div
                  onClick={() => handleClick('e27')}
                  className={`typeBox e27 ${e27M ? 'selected' : ''}`}
                >
                  {e27M ? <img src={e27ImgW} /> : <img src={e27Img} />}
                  <div className={`${e27M ? 'highlightedText' : ''}`}>E27</div>
                </div>
                <div
                  onClick={() => handleClick('e14')}
                  className={`typeBox e14 ${e14M ? 'selected' : ''}`}
                >
                  {e14M ? <img src={e14ImgW} /> : <img src={e14Img} />}
                  <div className={`${e14M ? 'highlightedText' : ''}`}>E14</div>
                </div>
                <div
                  onClick={() => handleClick('gu10')}
                  className={`typeBox gu10 ${gu10M ? 'selected' : ''}`}
                >
                  {gu10M ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
                  <div className={`${gu10M ? 'highlightedText' : ''}`}>
                    GU10
                  </div>
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
    </div>
  );
}

export default Lightbulbs;
