import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Overview() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  let history = useHistory();

  useEffect(() => {
    let querySessionStorage = sessionStorage.getItem('overview');
    setResults(JSON.parse(querySessionStorage));
    console.log(JSON.parse(querySessionStorage));
    setLoading(false);
  }, []);

  const details = (system) => {
    console.log(system);
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
    return subSystemsArr.map((x) => {
      return (
        <div>
          <div>{x.name}</div>
          {x.comp && <div className="dotComp"></div>}
          {x.comp === false && <div className="dotPartialComp"></div>}
          {x.comp === null && <div className="dotNotComp"></div>}
        </div>
      );
    });
  };

  const populateResults = () => {
    return results.map((x) => {
      return (
        <div className="overviewBox">
          <h2 className="stripe border">{x.mainSystem}</h2>
          <h3 className="inConnection border">in Verbindung mit:</h3>
          <div className="connectedSystemsContainer">
            {populateSubsystems(x)}
          </div>
          <div className="bottomOfContainer">
            <div className="base">
              <h3>Basisstationen: </h3>
              <div className="circle">
                {x.mainBase !== null ? x.substations.length + 1 : x.substations}
              </div>
            </div>
            <div>
              <button className="btn" onClick={() => details(x.mainSystem)}>
                zur Auflistung{' '}
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="overviewContainer">{populateResults()}</div>
      )}
    </div>
  );
}

export default Overview;
