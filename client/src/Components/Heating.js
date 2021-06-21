import radiatorImg from '../images/heating/radiator.png';
import thermostatImg from '../images/heating/thermostat.png';
import underfloorHeatingImg from '../images/heating/underfloorHeating.png';

import radiatorImgW from '../images/heating/radiatorW.png';
import thermostatImgW from '../images/heating/thermostatW.png';
import underfloorHeatingImgW from '../images/heating/underfloorHeatingW.png';

import thermostatWiredImg from '../images/heating/thermostatWired.png';
import thermostatWirelessImg from '../images/heating/thermostatWireless.png';

import thermostatWiredImgW from '../images/heating/thermostatWiredW.png';
import thermostatWirelessImgW from '../images/heating/thermostatWirelessW.png';

import heatingActorImg from '../images/heating/heatingActor.png';
import heatingActorImgW from '../images/heating/heatingActorW.png';

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Heating() {
  let history = useHistory();
  // selSD stands for selectionStateDisplay
  const selSD = useSelector((state) => state.selectionState);
  const selectionStateChange = useDispatch();

  const [boxThermostat, setBoxThermostat] = useState(false);
  const [boxHeatActors, setBoxHeatActors] = useState(false);

  let heatActorArray = [
    'heatActor12Motorized',
    'heatActor230_06',
    'heatActor230_10',
    'heatActor24_06',
    'heatActor24_10',
  ];
  let thermostatArray = [
    'thermostatWired230',
    'thermostatWired24',
    'thermostatWireless',
  ];

  const back = () => {
    if (selSD.garden) return history.push('/gartenbeleuchtung');
    if (selSD.innerLights) return history.push('/innenbeleuchtung');
    if (selSD.lightbulbs) return history.push('/gluehbirnen');
    if (selSD.light) return history.push('/beleuchtung');
    return history.push('/kategorien');
  };

  const next = () => {
    selSD.radiator ||
    selSD.thermostatWired230 ||
    selSD.thermostatWired24 ||
    selSD.thermostatWireless ||
    selSD.heatActor12Motorized ||
    selSD.heatActor24_06 ||
    selSD.heatActor24_10 ||
    selSD.heatActor230_06 ||
    selSD.heatActor230_10
      ? selectionStateChange(selectionActionsContainer.forceTrue('heatingTemp'))
      : selectionStateChange(
          selectionActionsContainer.resetSome('heatingTemp')
        );

    if (selSD.security) return history.push('/sicherheit');
    return history.push('/confirm');
  };

  const infos = () => {
    console.log('Placeholder');
  };

  const handleClick = (input, type) => {
    if (input === 'radiator') {
      setBoxHeatActors(false);
      setBoxThermostat(false);
    }
    type === 'thermostat' &&
      heatActorArray.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );

    type === 'actor' &&
      thermostatArray.map((x) =>
        selectionStateChange(selectionActionsContainer.resetSome(x))
      );

    type === 'thermostat' &&
      thermostatArray.map((x) => {
        if (x !== input) {
          return selectionStateChange(selectionActionsContainer.resetSome(x));
        }
      });

    type === 'actor' &&
      heatActorArray.map((x) => {
        if (x !== input) {
          return selectionStateChange(selectionActionsContainer.resetSome(x));
        }
      });

    return selectionStateChange(selectionActionsContainer[input]());
  };

  const openBox = (type) => {
    if (type === 'thermostat') {
      setBoxThermostat(!boxThermostat);
      setBoxHeatActors(false);
      return;
    }
    if (type === 'heatActors') {
      setBoxHeatActors(!boxHeatActors);
      setBoxThermostat(false);
      return;
    }
  };

  const selectThermostatBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('thermostatWired230', 'thermostat')}
          className={`contentBox cursor ${
            selSD.thermostatWired230 && 'selected'
          }`}
        >
          {selSD.thermostatWired230 ? (
            <img src={thermostatWiredImgW} />
          ) : (
            <img src={thermostatWiredImg} />
          )}
          <div>Thermostat 230V (verkabelt)</div>
        </div>
        <div
          onClick={() => handleClick('thermostatWired24', 'thermostat')}
          className={`contentBox cursor ${
            selSD.thermostatWired24 && 'selected'
          }`}
        >
          {selSD.thermostatWired24 ? (
            <img src={thermostatWiredImgW} />
          ) : (
            <img src={thermostatWiredImg} />
          )}
          <div>Thermostat 24V (verkabelt)</div>
        </div>
        <div
          onClick={() => handleClick('thermostatWireless', 'thermostat')}
          className={`contentBox cursor ${
            selSD.thermostatWireless && 'selected'
          }`}
        >
          {selSD.thermostatWireless ? (
            <img src={thermostatWirelessImgW} />
          ) : (
            <img src={thermostatWirelessImg} />
          )}
          <div>Thermostat (kabellos)</div>
        </div>
      </div>
    );
  };

  const selectHeatActorBigWidth = () => {
    return (
      <div className="contentContainer mgZero">
        <div
          onClick={() => handleClick('heatActor24_06', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            selSD.heatActor24_06 && 'selected'
          }`}
        >
          {selSD.heatActor24_06 ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>6 Stellantriebe, 24V</div>
        </div>
        <div
          onClick={() => handleClick('heatActor24_10', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            selSD.heatActor24_10 && 'selected'
          }`}
        >
          {selSD.heatActor24_10 ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>10 Stellantriebe, 24V</div>
        </div>
        <div
          onClick={() => handleClick('heatActor230_06', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            selSD.heatActor230_06 && 'selected'
          }`}
        >
          {selSD.heatActor230_06 ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>6 Stellantriebe, 230V</div>
        </div>
        <div
          onClick={() => handleClick('heatActor230_10', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            selSD.heatActor230_10 && 'selected'
          }`}
        >
          {selSD.heatActor230_10 ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>10 Stellantriebe, 230V</div>
        </div>
        <div
          onClick={() => handleClick('heatActor12Motorized', 'actor')}
          className={`boxSizeAdj contentBox cursor ${
            selSD.heatActor12Motorized && 'selected'
          }`}
        >
          {selSD.heatActor12Motorized ? (
            <img src={heatingActorImgW} />
          ) : (
            <img src={heatingActorImg} />
          )}
          <div>12 Stellantriebe, motorisiert</div>
        </div>
      </div>
    );
  };

  const selectThermostatSmallWidth = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('thermostatWired230', 'thermostat')}
          className={`addSelectRadius ${
            selSD.thermostatWired230 && 'selected'
          }`}
        >
          230V, verkabelt
        </div>
        <div
          onClick={() => handleClick('thermostatWired24', 'thermostat')}
          className={`addSelectRadius ${selSD.thermostatWired24 && 'selected'}`}
        >
          24V, verkabelt
        </div>
        <div
          onClick={() => handleClick('thermostatWireless', 'thermostat')}
          className={`addSelectRadius ${
            selSD.thermostatWireless && 'selected'
          }`}
        >
          Thermostat kabellos
        </div>
      </div>
    );
  };

  const selectHeatActorSmallWidth = () => {
    return (
      <div className={`addSelectContainer`}>
        <div
          onClick={() => handleClick('heatActor24_06', 'actor')}
          className={`addSelectRadius ${selSD.heatActor24_06 && 'selected'}`}
        >
          6 Stellantriebe, 24V
        </div>
        <div
          onClick={() => handleClick('heatActor24_10', 'actor')}
          className={`addSelectRadius ${selSD.heatActor24_10 && 'selected'}`}
        >
          10 Stellantriebe, 24V
        </div>
        <div
          onClick={() => handleClick('heatActor230_06', 'actor')}
          className={`addSelectRadius ${selSD.heatActor230_06 && 'selected'}`}
        >
          6 Stellantriebe, 230V
        </div>
        <div
          onClick={() => handleClick('heatActor230_10', 'actor')}
          className={`addSelectRadius ${selSD.heatActor230_10 && 'selected'}`}
        >
          10 Stellantriebe, 230V
        </div>
        <div
          onClick={() => handleClick('heatActor12Motorized', 'actor')}
          className={`addSelectRadius ${
            selSD.heatActor12Motorized && 'selected'
          }`}
        >
          12 Stellantriebe, motorisiert
        </div>
      </div>
    );
  };

  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe">Heizungssteuerung:</h1>
        </header>
        <div className="contentContainer">
          <div
            onClick={() => handleClick('radiator', 'none')}
            className={`contentBox cursor ${selSD.radiator && 'selected'}`}
          >
            {selSD.radiator ? (
              <img src={radiatorImg} />
            ) : (
              <img src={radiatorImg} />
            )}
            <div>Heizkörperthermostat</div>
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
            onClick={() => openBox('thermostat')}
            className={`contentBox cursor ${boxThermostat && 'borderHghl'} ${
              selSD.thermostatWired230 ||
              selSD.thermostatWired24 ||
              selSD.thermostatWireless
                ? 'selected'
                : ''
            }`}
          >
            {selSD.thermostatWired230 ||
            selSD.thermostatWired24 ||
            selSD.thermostatWireless ? (
              <img src={thermostatImgW} />
            ) : (
              <img src={thermostatImg} />
            )}
            <div>Wandthermostat</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxThermostat && selectThermostatSmallWidth()}
            {boxThermostat && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxThermostat && selectThermostatSmallWidth()}
              {boxThermostat && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <div
            onClick={() => openBox('heatActors')}
            className={`contentBox cursor ${boxHeatActors && 'borderHghl'} ${
              selSD.heatActor12Motorized ||
              selSD.heatActor24_06 ||
              selSD.heatActor24_10 ||
              selSD.heatActor230_06 ||
              selSD.heatActor230_10
                ? 'selected'
                : ''
            }`}
          >
            {selSD.heatActor12Motorized ||
            selSD.heatActor24_06 ||
            selSD.heatActor24_10 ||
            selSD.heatActor230_06 ||
            selSD.heatActor230_10 ? (
              <img src={underfloorHeatingImgW} />
            ) : (
              <img src={underfloorHeatingImg} />
            )}
            <div>Fußbodenheizungsaktor</div>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="forceFlexWrap"></div>
            {boxHeatActors && selectHeatActorSmallWidth()}
            {boxHeatActors && <div className="forceFlexWrap"></div>}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <MediaQuery maxWidth={768}>
              <div className="forceFlexWrap"></div>
              {boxHeatActors && selectHeatActorSmallWidth()}
              {boxHeatActors && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={501}>
            <MediaQuery maxWidth={767}>
              <div className="forceFlexWrap"></div>
              {boxHeatActors && selectHeatActorSmallWidth()}
              {boxThermostat && selectThermostatSmallWidth()}
              {boxHeatActors && <div className="forceFlexWrap"></div>}
              {boxThermostat && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={769}>
            <MediaQuery maxWidth={1023}>
              <div className="forceFlexWrap"></div>
              {boxHeatActors && selectHeatActorSmallWidth()}
              {boxThermostat && selectThermostatSmallWidth()}
              {boxHeatActors && <div className="forceFlexWrap"></div>}
              {boxThermostat && <div className="forceFlexWrap"></div>}
            </MediaQuery>
          </MediaQuery>
          <MediaQuery minWidth={1024}>
            <div className="forceFlexWrap"></div>
            {boxThermostat && selectThermostatBigWidth()}
            {boxHeatActors && selectHeatActorBigWidth()}
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

export default Heating;
