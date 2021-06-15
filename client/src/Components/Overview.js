import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function Overview() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  let history = useHistory();

  useEffect(() => {
    let querySessionStorage = sessionStorage.getItem('overview');
    setResults(JSON.parse(querySessionStorage));
    setLoading(false);
  }, []);

  const details = (system) => {
    sessionStorage.setItem('system', system);
    return history.push('/details');
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
                <button className="btn" onClick={() => details(x.mainSystem)}>
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
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="whiteBackground">
          <div className="contentContainer mgZero">{populateResults()}</div>
        </div>
      )}
    </div>
  );
}

export default Overview;
