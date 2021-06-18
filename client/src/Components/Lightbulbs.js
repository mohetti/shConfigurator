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
import MediaQuery from 'react-responsive';

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

  const selectWhiteBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('e27')}
          className={`contentBox cursor ${e27W ? 'selected' : ''}`}
        >
          {e27W ? <img src={e27ImgW} /> : <img src={e27Img} />}
          <div className={`${e27W ? 'highlightedText' : ''}`}>E27</div>
        </div>
        <div
          onClick={() => handleClick('e14')}
          className={`contentBox cursor ${e14W ? 'selected' : ''}`}
        >
          {e14W ? <img src={e14ImgW} /> : <img src={e14Img} />}
          <div className={`${e14W ? 'highlightedText' : ''}`}>E14</div>
        </div>
        <div
          onClick={() => handleClick('gu10')}
          className={`contentBox cursor ${gu10W ? 'selected' : ''}`}
        >
          {gu10W ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
          <div className={`${gu10W ? 'highlightedText' : ''}`}>GU10</div>
        </div>
      </div>
    );
  };

  const selectAmbianceBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('e27')}
          className={`contentBox cursor ${e27A ? 'selected' : ''}`}
        >
          {e27A ? <img src={e27ImgW} /> : <img src={e27Img} />}
          <div className={`${e27A ? 'highlightedText' : ''}`}>E27</div>
        </div>
        <div
          onClick={() => handleClick('e14')}
          className={`contentBox cursor ${e14A ? 'selected' : ''}`}
        >
          {e14A ? <img src={e14ImgW} /> : <img src={e14Img} />}
          <div className={`${e14A ? 'highlightedText' : ''}`}>E14</div>
        </div>
        <div
          onClick={() => handleClick('gu10')}
          className={`contentBox cursor ${gu10A ? 'selected' : ''}`}
        >
          {gu10A ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
          <div className={`${gu10A ? 'highlightedText' : ''}`}>GU10</div>
        </div>
      </div>
    );
  };

  const selectMulticolorBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('e27')}
          className={`contentBox cursor ${e27M ? 'selected' : ''}`}
        >
          {e27M ? <img src={e27ImgW} /> : <img src={e27Img} />}
          <div className={`${e27M ? 'highlightedText' : ''}`}>E27</div>
        </div>
        <div
          onClick={() => handleClick('e14')}
          className={`contentBox cursor ${e14M ? 'selected' : ''}`}
        >
          {e14M ? <img src={e14ImgW} /> : <img src={e14Img} />}
          <div className={`${e14M ? 'highlightedText' : ''}`}>E14</div>
        </div>
        <div
          onClick={() => handleClick('gu10')}
          className={`contentBox cursor ${gu10M ? 'selected' : ''}`}
        >
          {gu10M ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
          <div className={`${gu10M ? 'highlightedText' : ''}`}>GU10</div>
        </div>
      </div>
    );
  };

  const selectWhiteSmallWidth = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('e27')}
          className={`addSelectRadius ${e27W ? 'selected' : ''}`}
        >
          E27 Fassung
        </div>
        <div
          onClick={() => handleClick('e14')}
          className={`addSelectRadius ${e14W ? 'selected' : ''}`}
        >
          E14 Fassung
        </div>
        <div
          onClick={() => handleClick('gu10')}
          className={`addSelectRadius ${gu10W ? 'selected' : ''}`}
        >
          GU10 Spot
        </div>
      </div>
    );
  };

  const selectAmbianceSmallWidth = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('e27')}
          className={`addSelectRadius ${e27A ? 'selected' : ''}`}
        >
          E27 Fassung
        </div>
        <div
          onClick={() => handleClick('e14')}
          className={`addSelectRadius ${e14A ? 'selected' : ''}`}
        >
          E14 Fassung
        </div>
        <div
          onClick={() => handleClick('gu10')}
          className={`addSelectRadius ${gu10A ? 'selected' : ''}`}
        >
          GU10 Spot
        </div>
      </div>
    );
  };

  const selectMulticolorSmallWidth = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('e27')}
          className={`addSelectRadius ${e27M ? 'selected' : ''}`}
        >
          E27 Fassung
        </div>
        <div
          onClick={() => handleClick('e14')}
          className={`addSelectRadius ${e14M ? 'selected' : ''}`}
        >
          E14 Fassung
        </div>
        <div
          onClick={() => handleClick('gu10')}
          className={`addSelectRadius ${gu10M ? 'selected' : ''}`}
        >
          GU10 Spot
        </div>
      </div>
    );
  };

  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe">Spots & Glühbirnen:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => openSelector('white')}
            className={`contentBox cursor ${borderW && 'borderHghl'} ${
              e27W || e14W || gu10W ? 'selected' : ''
            }`}
          >
            {e27W || e14W || gu10W ? (
              <img src={lightWhiteImgW} />
            ) : (
              <img src={lightWhiteImg} />
            )}
            <div>Dimmbares Licht</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {selectorBoxWhite && selectWhiteSmallWidth()}
            {selectorBoxWhite && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {selectorBoxWhite && selectWhiteSmallWidth()}
              {selectorBoxWhite && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => openSelector('ambiance')}
            className={`contentBox cursor ${borderA && 'borderHghl'} ${
              e27A || e14A || gu10A ? 'selected' : ''
            }`}
          >
            {e27A || e14A || gu10A ? (
              <img src={lightAmbianceImgW} />
            ) : (
              <img src={lightAmbianceImg} />
            )}
            <div>Dimmbares Weißlicht</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {selectorBoxAmbiance && selectAmbianceSmallWidth()}
            {selectorBoxAmbiance && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {selectorBoxAmbiance && selectAmbianceSmallWidth()}
              {selectorBoxAmbiance && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => openSelector('multicolor')}
            className={`contentBox cursor ${borderM && 'borderHghl'} ${
              e27M || e14M || gu10M ? 'selected' : ''
            }`}
          >
            {e27M || e14M || gu10M ? (
              <img src={lightColorImgW} />
            ) : (
              <img src={lightColorImg} />
            )}
            <div>Weiß- und Farblicht</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {selectorBoxMulticolor && selectMulticolorSmallWidth()}
            {selectorBoxMulticolor && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {selectorBoxMulticolor && selectMulticolorSmallWidth()}
              {selectorBoxMulticolor && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>

          <MediaQuery minWidth={501}>
            <MediaQuery maxWidth={767}>
              <div className="forceFlexWrap"></div>
              {selectorBoxAmbiance && selectAmbianceSmallWidth()}
              {selectorBoxWhite && selectWhiteSmallWidth()}
              {selectorBoxMulticolor && selectMulticolorSmallWidth()}
              {selectorBoxAmbiance && <div className="forceFlexWrap"></div>}
              {selectorBoxWhite && <div className="forceFlexWrap"></div>}
              {selectorBoxMulticolor && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={769}>
            <MediaQuery maxWidth={1023}>
              <div className="forceFlexWrap"></div>
              {selectorBoxAmbiance && selectAmbianceSmallWidth()}
              {selectorBoxWhite && selectWhiteSmallWidth()}
              {selectorBoxMulticolor && selectMulticolorSmallWidth()}
            </MediaQuery>
          </MediaQuery>

          <MediaQuery minWidth={1024}>
            <div className="forceFlexWrap"></div>
            {selectorBoxWhite && selectWhiteBigWidth()}
            {selectorBoxAmbiance && selectAmbianceBigWidth()}
            {selectorBoxMulticolor && selectMulticolorBigWidth()}
          </MediaQuery>
        </div>
        <div className="btnMultiple">
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
