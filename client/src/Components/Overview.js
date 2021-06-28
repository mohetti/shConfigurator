import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

import { useSelector, useDispatch } from 'react-redux';
import detailedSystem from '../actions/detailedSystem';
import helpers from '../actions/helpers';

function Overview() {
  let history = useHistory();
  const showModal = useSelector((state) => state.helpers);
  const results = useSelector((state) => state.backendResponse);
  const setReduxState = useDispatch();

  useEffect(() => {
    if (history.location.state === undefined) {
      return history.push('/start');
    }
  }, []);

  const closeModal = () => {
    return setReduxState(helpers());
  };

  const details = (system) => {
    setReduxState(detailedSystem(system));
    sessionStorage.setItem('system', system);
    return history.push('/details', { from: 'valid' });
  };

  const populateSubsystems = (system) => {
    let subSystemsArr = [];
    system.compSystems.map((x) => {
      subSystemsArr.push({ name: x, comp: true });
    });
    system.partialCompSystems.map((x) => {
      subSystemsArr.push({ name: x, comp: false });
    });
    system.notCompSystems.map((x) => {
      subSystemsArr.push({ name: x, comp: null });
    });
    if (
      system.notCompSystems.length < 1 &&
      system.compSystems.length < 1 &&
      system.partialCompSystems.length < 1
    ) {
      subSystemsArr.push({ comp: 'main' });
    }
    return subSystemsArr.map((x) => {
      return (
        <div key={uniqid()}>
          <div>{x.name}</div>
          {x.comp === true && <div className="dot comp"></div>}
          {x.comp === false && <div className="dot partialComp"></div>}
          {x.comp === null && <div className="dot notComp"></div>}
          {x.comp === 'main' && <div className="dot dotMain"></div>}
        </div>
      );
    });
  };

  const populateResults = () => {
    return results.map((x) => {
      return (
        <div className="overviewBox" key={uniqid()}>
          <h2 className="stripe border1">{x.mainSystem}</h2>
          <h3 className="inConnection border1">in Verbindung mit:</h3>
          <div className="connectedSystemsContainer">
            {populateSubsystems(x)}
          </div>
          <div className="bottomOfContainer">
            <div>
              <div className="baseContainer">
                <h3>Basisstationen: </h3>
                <div className="numberOfBases">
                  {x.mainBase !== 'null'
                    ? x.substations.length + 1
                    : x.substations.length}
                </div>
              </div>
              <div className="btnSingle">
                <button className="btn" onClick={() => details(x)}>
                  zur Auflistung{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="background">
      <div className="whiteBackground">
        <div className="contentContainer mgZero">{populateResults()}</div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="mgl2">
              <h2>Übersicht</h2>
            </div>
            <div className="mgl2 modalBorder pdt2">
              <div className="checkmarkModalDiv">
                <ul className="checkmarkModal mgl pdr2">
                  <div className="fontSizeModal1">
                    <strong>Aufbau:</strong>
                  </div>
                  <li className="fontSizeModal">
                    Auf dieser Seite werden Dir Smart Home Lösungen basierend
                    auf Deinen Auswahlkriterien aufgelistet.
                  </li>
                  <li className="fontSizeModal">
                    Ganz oben steht das Hauptsystem, welches möglichst viele
                    Deiner gewünschten Smart Home Geräte abdeckt.
                  </li>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>"in Verbindung mit":</strong>
                    </div>
                    <li className="fontSizeModal">
                      Darunter findest Du alle Subsysteme, die Du zusätzlich
                      benötigst, um gemeinsam mit dem Hauptsystem Deine gesamte
                      Auswahl abzudecken.
                    </li>
                    <li className="fontSizeModal">
                      Die Subsysteme werden mit einem Ampelsystem visualisiert.
                    </li>
                    <li>
                      Subsysteme können mehr als einmal aufgelistet sein. In
                      diesen Fällen sind manche Geräte des Subsystems mit dem
                      Hauptsystem kompatibel und andere nicht. In den Details
                      wird das dann genauer aufgelistet.
                    </li>
                  </div>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Basisstationen:</strong>
                    </div>
                    <li className="fontSizeModal">
                      Die Zahl beschreib die Anzahl an Basisstationen, die Du
                      für diese bestimmte Auswahl benötigst.
                    </li>
                    <li className="fontSizeModal">
                      Die Anzahl hängt von der Menge an Subsystemen ab.
                    </li>
                  </div>
                  <div className="pdt2">
                    <div className="fontSizeModal1">
                      <strong>Das Ampelsystem:</strong>
                    </div>
                    <li className="fontSizeModal test">
                      Grün steht für <strong>kompatibel</strong>. Nach der
                      Installation über die App des Subsystems, lassen sich
                      Geräte dieses Herstellers in der App des Hauptsystems
                      steuern, konfigurieren und in Automationen einbinden.
                    </li>
                    <li className="fontSizeModal">
                      Gelb steht für <strong>teilweise kompatibel</strong>. Nach
                      der Installation über die App des Subsystems, lassen sich
                      ein Großteil der Geräte-Funktionen dieses Herstellers in
                      der App des Hauptsystems steuern, aber nicht alle.
                    </li>
                    <li className="fontSizeModal">
                      Rot steht für <strong>nicht kompatibel</strong>. Die
                      Steuerung und Konfiguration dieser Geräte funktioniert nur
                      in der App des Subsystems. Möglicherweise lassen sich
                      Schnnittstellen zum Hauptsystem über
                      Drittanbieter-Software wie IFTTT oder Conrad-Connect
                      realisieren.
                    </li>
                    <li className="fontSizeModal">
                      Blau steht für <strong>Hauptsystem</strong>. Diese Geräte
                      gehören zur Produktlinie des Hauptsystems.
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

export default Overview;
