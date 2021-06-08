import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function Details() {
  const [system, setSystem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightbulbs, setLightbulbs] = useState([]);
  const [gardenLights, setGardenLights] = useState([]);
  const [innerLights, setInnerLights] = useState([]);
  const [heating, setHeating] = useState([]);
  const [security, setSecurity] = useState([]);

  let lightbulbList = [
    'e27W',
    'e27A',
    'e27M',
    'e14W',
    'e14A',
    'e14M',
    'gu10W',
    'gu10A',
    'gu10M',
  ];

  let innerlightList = [
    'strip',
    'plugN',
    'plugD',
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
  ];

  let gardenlightList = [
    'pathLightW',
    'pathLightM',
    'gardenSpot',
    'wallGardenW',
    'wallGardenM',
    'gardenStrip',
  ];

  let heatingList = [
    'radiator',
    'thermostatWired230',
    'thermostatWired24',
    'thermostatWireless',
    'thermostatWirelessExt',
    'heatActor12Motorized',
    'heatActor24_06',
    'heatActor24_10',
    'heatActor230_06',
    'heatActor230_10',
  ];

  let securityList = [
    'motionI',
    'motionO',
    'motionOZ',
    'windowSensor',
    'sirenI',
    'sirenO',
    'smoke',
    'lock',
    'doorbell',
    'cameraI',
    'cameraO',
  ];

  let history = useHistory();

  useEffect(() => {
    let querySessionStorage = sessionStorage.getItem('overview');
    let querySystem = sessionStorage.getItem('system');
    let focusedSystem = JSON.parse(querySessionStorage).filter(
      (x) => x.mainSystem === querySystem
    );

    focusedSystem[0].products.map((x) => {
      if (lightbulbList.indexOf(x.type) !== -1) {
        return setLightbulbs((oldArr) => [...oldArr, x]);
      }
      if (innerlightList.indexOf(x.type) !== -1) {
        return setInnerLights((oldArr) => [...oldArr, x]);
      }
      if (gardenlightList.indexOf(x.type) !== -1) {
        return setGardenLights((oldArr) => [...oldArr, x]);
      }
      if (heatingList.indexOf(x.type) !== -1) {
        return setHeating((oldArr) => [...oldArr, x]);
      }
      if (securityList.indexOf(x.type) !== -1) {
        return setSecurity((oldArr) => [...oldArr, x]);
      }
    });

    setSystem(focusedSystem[0].mainSystem);
    setLoading(false);
  }, []);

  const populateProducts = (category) => {
    return category.map((x) => {
      return (
        <div key={uniqid()}>
          <div>{x.name}</div>
          {x.comp === true && <div>green</div>}
          {x.comp === false && <div>yellow</div>}
          {x.comp === null && <div>red</div>}
          {x.comp === 'main' && <div>blue</div>}
        </div>
      );
    });
  };

  const populateResult = () => {
    return (
      <div>
        <div>{system}</div>
        <div>
          {lightbulbs.length > 0 && (
            <div>
              <div>Glühbirnen and Spots: </div>
              <div>{populateProducts(lightbulbs)}</div>
            </div>
          )}
        </div>
        <div>
          {innerLights.length > 0 && (
            <div>
              <div>Innenbeleuchtung: </div>
              <div>{populateProducts(innerLights)}</div>
            </div>
          )}
        </div>
        <div>
          {gardenLights.length > 0 && (
            <div>
              <div>Gartenbeleuchtung: </div>
              <div>{populateProducts(gardenLights)}</div>
            </div>
          )}
        </div>
        <div>
          {heating.length > 0 && (
            <div>
              <div>Heizungssteuerung: </div>
              <div>{populateProducts(heating)}</div>
            </div>
          )}
        </div>
        <div>
          {security.length > 0 && (
            <div>
              <div>Sicherheitstechnik: </div>
              <div>{populateProducts(security)}</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>{loading ? <div>Loading...</div> : <div>{populateResult()}</div>}</div>
  );
}

export default Details;
