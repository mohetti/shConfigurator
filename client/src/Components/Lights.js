import placeholder from '../images/placeholder.png';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Lights() {
  const [e27, setE27] = useState(false);
  const [e14, setE14] = useState(false);
  const [gu10, setGu10] = useState(false);
  const [strip, setStrip] = useState(false);
  const [plug, setPlug] = useState(false);
  const [innerLights, setInnerLights] = useState(false);
  const [garden, setGarden] = useState(false);

  let history = useHistory();

  useEffect(() => {
    let e27Session = sessionStorage.getItem('e27') === 'true';
    let e14Session = sessionStorage.getItem('e14') === 'true';
    let gu10Session = sessionStorage.getItem('gu10') === 'true';
    let stripSession = sessionStorage.getItem('strip') === 'true';
    let plugSession = sessionStorage.getItem('plug') === 'true';
    let innerLightsSession = sessionStorage.getItem('innerLights') === 'true';
    let gardenSession = sessionStorage.getItem('garden') === 'true';

    setE27(e27Session);
    setE14(e14Session);
    setGu10(gu10Session);
    setStrip(stripSession);
    setPlug(plugSession);
    setInnerLights(innerLightsSession);
    setGarden(gardenSession);
  }, []);

  const back = () => {
    sessionStorage.setItem('e27', e27);
    sessionStorage.setItem('e14', e14);
    sessionStorage.setItem('gu10', gu10);
    sessionStorage.setItem('strip', strip);
    sessionStorage.setItem('plug', plug);
    sessionStorage.setItem('innerLights', innerLights);
    sessionStorage.setItem('garden', garden);

    return history.push('/kategorien');
  };

  const next = () => {
    sessionStorage.setItem('e27', e27);
    sessionStorage.setItem('e14', e14);
    sessionStorage.setItem('gu10', gu10);
    sessionStorage.setItem('strip', strip);
    sessionStorage.setItem('plug', plug);
    sessionStorage.setItem('innerLights', innerLights);
    sessionStorage.setItem('garden', garden);

    if (innerLights) return history.push('/innenbeleuchtung');
    if (garden) return history.push('/gartenbeleuchtung');
    return history.push('/heizung');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input) => {
    if (input === 'e27') return setE27(!e27);
    if (input === 'e14') return setE14(!e14);
    if (input === 'gu10') return setGu10(!gu10);
    if (input === 'strip') return setStrip(!strip);
    if (input === 'plug') return setPlug(!plug);
    if (input === 'innerLights') return setInnerLights(!innerLights);
    if (input === 'garden') return setGarden(!garden);
  };

  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle die passende Beleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="lightContainer mgLights">
          <div
            onClick={() => handleClick('e27')}
            className={`typeBox e27 ${e27 ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>E27 Glühbirnen</div>
          </div>
          <div
            onClick={() => handleClick('e14')}
            className={`typeBox e14 ${e14 ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>E14 Glühbirnen</div>
          </div>
          <div
            onClick={() => handleClick('gu10')}
            className={`typeBox gu10 ${gu10 ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>GU10 Spots</div>
          </div>
          <div
            onClick={() => handleClick('strip')}
            className={`typeBox strip ${strip ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Leuchtstreifen</div>
          </div>
          <div
            onClick={() => handleClick('plug')}
            className={`typeBox plug ${plug ? 'selected' : ''}`}
          >
            <img src={placeholder} />
            <div>Zwischenstecker</div>
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
  );
}

export default Lights;
