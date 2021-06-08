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
          {x.comp && <div>green</div>}
          {x.comp === false && <div>yellow</div>}
          {x.comp === null && <div>red</div>}
        </div>
      );
    });
  };

  const populateResults = () => {
    return results.map((x) => {
      return (
        <div>
          <div>{x.mainSystem}</div>
          <div>
            <div>in Verbindung mit:</div>
            <div>{populateSubsystems(x)}</div>
          </div>
          <div>
            <div>Basisstationen:</div>
            <div>
              {x.mainBase !== null ? x.substations.length + 1 : x.substations}
            </div>
          </div>
          <div>
            <button onClick={() => details(x.mainSystem)}>
              zur Auflistung:{' '}
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>{loading ? <div>Loading</div> : <div>{populateResults()}</div>}</div>
  );
}

export default Overview;
