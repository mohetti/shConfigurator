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

import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Lightbulbs() {
  let history = useHistory();

  // selSD stands for selectionStateDisplay
  const selSD = useSelector((state) => state.selectionState);
  const selectionStateChange = useDispatch();

  const [selectorBoxWhite, setSelectorBoxWhite] = useState(false);
  const [selectorBoxAmbiance, setSelectorBoxAmbiance] = useState(false);
  const [selectorBoxMulticolor, setSelectorBoxMulticolor] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    return setModal(false);
  };

  const openModal = () => {
    return setModal(true);
  };

  const back = () => {
    return history.push('/beleuchtung');
  };

  const next = () => {
    selSD.e27W ||
    selSD.e27A ||
    selSD.e27M ||
    selSD.e14W ||
    selSD.e14A ||
    selSD.e14M ||
    selSD.gu10W ||
    selSD.gu10A ||
    selSD.gu10M
      ? selectionStateChange(
          selectionActionsContainer.forceTrue('lightbulbsTemp')
        )
      : selectionStateChange(
          selectionActionsContainer.resetSome('lightbulbsTemp')
        );

    if (selSD.innerLights) return history.push('/innenbeleuchtung');
    if (selSD.garden) return history.push('/gartenbeleuchtung');
    if (selSD.heating) return history.push('/heizung');
    if (selSD.security) return history.push('/sicherheit');
    return history.push('/confirm');
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
    return selectionStateChange(selectionActionsContainer[input]());
  };

  const selectWhiteBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('e27W')}
          className={`contentBox cursor ${selSD.e27W && 'selected'}`}
        >
          {selSD.e27W ? <img src={e27ImgW} /> : <img src={e27Img} />}
          <div className={`${selSD.e27W && 'highlightedText'}`}>E27</div>
        </div>
        <div
          onClick={() => handleClick('e14W')}
          className={`contentBox cursor ${selSD.e14W && 'selected'}`}
        >
          {selSD.e14W ? <img src={e14ImgW} /> : <img src={e14Img} />}
          <div className={`${selSD.e14W && 'highlightedText'}`}>E14</div>
        </div>
        <div
          onClick={() => handleClick('gu10W')}
          className={`contentBox cursor ${selSD.gu10W && 'selected'}`}
        >
          {selSD.gu10W ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
          <div className={`${selSD.gu10W && 'highlightedText'}`}>GU10</div>
        </div>
      </div>
    );
  };

  const selectAmbianceBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('e27A')}
          className={`contentBox cursor ${selSD.e27A && 'selected'}`}
        >
          {selSD.e27A ? <img src={e27ImgW} /> : <img src={e27Img} />}
          <div className={`${selSD.e27A && 'highlightedText'}`}>E27</div>
        </div>
        <div
          onClick={() => handleClick('e14A')}
          className={`contentBox cursor ${selSD.e14A && 'selected'}`}
        >
          {selSD.e14A ? <img src={e14ImgW} /> : <img src={e14Img} />}
          <div className={`${selSD.e14A && 'highlightedText'}`}>E14</div>
        </div>
        <div
          onClick={() => handleClick('gu10A')}
          className={`contentBox cursor ${selSD.gu10A && 'selected'}`}
        >
          {selSD.gu10A ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
          <div className={`${selSD.gu10A && 'highlightedText'}`}>GU10</div>
        </div>
      </div>
    );
  };

  const selectMulticolorBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('e27M')}
          className={`contentBox cursor ${selSD.e27M && 'selected'}`}
        >
          {selSD.e27M ? <img src={e27ImgW} /> : <img src={e27Img} />}
          <div className={`${selSD.e27M && 'highlightedText'}`}>E27</div>
        </div>
        <div
          onClick={() => handleClick('e14M')}
          className={`contentBox cursor ${selSD.e14M && 'selected'}`}
        >
          {selSD.e14M ? <img src={e14ImgW} /> : <img src={e14Img} />}
          <div className={`${selSD.e14M && 'highlightedText'}`}>E14</div>
        </div>
        <div
          onClick={() => handleClick('gu10M')}
          className={`contentBox cursor ${selSD.gu10M && 'selected'}`}
        >
          {selSD.gu10M ? <img src={gu10ImgW} /> : <img src={gu10Img} />}
          <div className={`${selSD.gu10M && 'highlightedText'}`}>GU10</div>
        </div>
      </div>
    );
  };

  const selectWhiteSmallWidth = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('e27W')}
          className={`addSelectRadius ${selSD.e27W && 'selected'}`}
        >
          E27 Fassung
        </div>
        <div
          onClick={() => handleClick('e14W')}
          className={`addSelectRadius ${selSD.e14W && 'selected'}`}
        >
          E14 Fassung
        </div>
        <div
          onClick={() => handleClick('gu10W')}
          className={`addSelectRadius ${selSD.gu10W && 'selected'}`}
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
          onClick={() => handleClick('e27A')}
          className={`addSelectRadius ${selSD.e27A && 'selected'}`}
        >
          E27 Fassung
        </div>
        <div
          onClick={() => handleClick('e14A')}
          className={`addSelectRadius ${selSD.e14A && 'selected'}`}
        >
          E14 Fassung
        </div>
        <div
          onClick={() => handleClick('gu10A')}
          className={`addSelectRadius ${selSD.gu10A && 'selected'}`}
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
          onClick={() => handleClick('e27M')}
          className={`addSelectRadius ${selSD.e27M && 'selected'}`}
        >
          E27 Fassung
        </div>
        <div
          onClick={() => handleClick('e14M')}
          className={`addSelectRadius ${selSD.e14M && 'selected'}`}
        >
          E14 Fassung
        </div>
        <div
          onClick={() => handleClick('gu10M')}
          className={`addSelectRadius ${selSD.gu10M && 'selected'}`}
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
            className={`contentBox cursor ${selectorBoxWhite && 'borderHghl'} ${
              selSD.e27W || selSD.e14W || selSD.gu10W ? 'selected' : ''
            }`}
          >
            {selSD.e27W || selSD.e14W || selSD.gu10W ? (
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
            className={`contentBox cursor ${
              selectorBoxAmbiance && 'borderHghl'
            } ${selSD.e27A || selSD.e14A || selSD.gu10A ? 'selected' : ''}`}
          >
            {selSD.e27A || selSD.e14A || selSD.gu10A ? (
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
            className={`contentBox cursor ${
              selectorBoxMulticolor && 'borderHghl'
            } ${selSD.e27M || selSD.e14M || selSD.gu10M ? 'selected' : ''}`}
          >
            {selSD.e27M || selSD.e14M || selSD.gu10M ? (
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
          <button onClick={openModal} className="btn">
            Mehr Infos
          </button>
          <button onClick={next} className="btn">
            Weiter
          </button>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="mgl2">
              <h2>Kategorien</h2>
            </div>
            <div className="mgl2 modalBorder pdt2">
              <div className="checkmarkModalDiv">
                <ul className="checkmarkModal mgl pdr2">
                  <div className="fontSizeModal1">
                    <strong>Dimmbares Licht:</strong>
                  </div>
                  <li className="fontSizeModal">
                    Strahlt warmweißes Licht aus.
                  </li>
                  <li className="fontSizeModal">
                    Die Farbtemperatur beträgt in der Regel 2700 Kelvin.
                  </li>
                  <li className="fontSizeModal">
                    Die Glühbirnen & Spots sind in ihrer Helligkeit dimmbar.
                  </li>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Dimmbares Weißlicht:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Strahlt warmweißes bis tageslichtweißes Licht aus.
                    </li>
                    <li className="fontSizeModal">
                      Die Farbtemperatur deckt in der Regel ein Spektrum von
                      2700 bis 6500 Kelvin ab.
                    </li>
                    <li className="fontSizeModal">
                      Die Glühbirnen & Spots sind in ihrer Helligkeit und in der
                      Intensität des Weißlichts dimmbar.
                    </li>
                  </div>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Weiß- und Farblicht:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Strahlt warmweißes bis tageslichtweißes Licht sowie
                      Farblicht aus.
                    </li>
                    <li className="fontSizeModal">
                      Die Farbtemperatur deckt in der Regel ein Spektrum von
                      2700 bis 6500 Kelvin ab.
                    </li>
                    <li className="fontSizeModal">
                      Zusätzlich zu den Funktionen des dimmbaren Weißlichts,
                      können Farbleuchten in 16 Mio. unterschiedlichen Farben
                      erstrahlen.
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="modalBorder btnSingle mgt3 pdt2">
              <button onClick={closeModal} className="btn">
                Verstanden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lightbulbs;
