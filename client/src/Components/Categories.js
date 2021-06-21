import lightImg from '../images/categories/light.png';
import heatingImg from '../images/categories/heating.png';
import securityImg from '../images/categories/security.png';

import lightImgW from '../images/categories/lightW.png';
import heatingImgW from '../images/categories/heatingW.png';
import securityImgW from '../images/categories/securityW.png';

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Categories() {
  const [light, setLight] = useState(false);
  const [heating, setHeating] = useState(false);
  const [security, setSecurity] = useState(false);

  let history = useHistory();

  // selSD stands for selectionStateDisplay
  const selSD = useSelector((state) => state.selectionState);
  const selectionStateChange = useDispatch();

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
    if (!selSD.light) {
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
      lightsList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
    }
    if (!selSD.heating) {
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
      heatingList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
    }
    if (!selSD.security) {
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
      securityList.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );
      // securityList.map((x) => sessionStorage.setItem(x, false));
    }
  };

  const next = () => {
    sessionStorage.setItem('light', light);
    sessionStorage.setItem('heating', heating);
    sessionStorage.setItem('security', security);

    if (selSD.light) {
      reset();
      return history.push('/beleuchtung');
    }
    if (selSD.heating) {
      reset();
      return history.push('/heizung');
    }
    if (selSD.security) {
      reset();
      return history.push('/sicherheit');
    }
    return alert('Bitte mindestens eine Kategorie auswählen.');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input) => {
    return selectionStateChange(selectionActionsContainer[input]());
  };
  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe">Kategorien:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => handleClick('light')}
            className={`contentBox cursor ${selSD.light && 'selected'}`}
          >
            {selSD.light ? <img src={lightImgW} /> : <img src={lightImg} />}
            <div>Beleuchtung</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
            </MediaQuery>
          </MediaQuery>

          <div
            onClick={() => handleClick('heating')}
            className={`contentBox cursor ${selSD.heating && 'selected'}`}
          >
            {selSD.heating ? (
              <img src={heatingImgW} />
            ) : (
              <img src={heatingImg} />
            )}
            <div>Heizung</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => handleClick('security')}
            className={`contentBox cursor ${selSD.security && 'selected'}`}
          >
            {selSD.security ? (
              <img src={securityImgW} />
            ) : (
              <img src={securityImg} />
            )}
            <div>Sicherheit</div>
          </div>
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

export default Categories;
