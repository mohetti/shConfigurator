import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

import { useSelector } from 'react-redux';

function Details() {
  const system = useSelector((state) => state.detailedSystem);
  const [loading, setLoading] = useState(true);
  const [lightbulbs, setLightbulbs] = useState([]);
  const [gardenLights, setGardenLights] = useState([]);
  const [innerLights, setInnerLights] = useState([]);
  const [heating, setHeating] = useState([]);
  const [security, setSecurity] = useState([]);
  let history = useHistory();

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

  useEffect(() => {
    system.products.map((x) => {
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
    setLoading(false);
  }, []);

  const populateProducts = (category) => {
    return category.map((x) => {
      return (
        <div
          key={uniqid()}
          className={`mgl1 contentBox ${
            x.comp === 'main'
              ? 'blueFiller'
              : x.comp === null
              ? 'redFiller'
              : x.comp === false
              ? 'yellowFiller'
              : 'greenFiller'
          }`}
        >
          <div>{x.name}</div>
        </div>
      );
    });
  };

  const populateResult = () => {
    return (
      <div className="background">
        <div className="whiteBackground">
          <h1 className="stripe">{system.mainSystem}</h1>
          <div className="textLeft">
            {lightbulbs.length > 0 && (
              <div>
                <h3 className="line">Glühbirnen & Spots</h3>
                <div className="flexStartLeft contentContainer mgt1 mgb2">
                  {populateProducts(lightbulbs)}
                </div>
              </div>
            )}
          </div>
          <div className="textLeft">
            {innerLights.length > 0 && (
              <div>
                <h3 className="line">Innenbeleuchtung: </h3>
                <div className="flexStartLeft contentContainer mgt1 mgb2">
                  {populateProducts(innerLights)}
                </div>
              </div>
            )}
          </div>
          <div>
            {gardenLights.length > 0 && (
              <div className="textLeft">
                <h3 className="line">Gartenbeleuchtung: </h3>
                <div className="flexStartLeft contentContainer mgt1 mgb2">
                  {populateProducts(gardenLights)}
                </div>
              </div>
            )}
          </div>
          <div>
            {heating.length > 0 && (
              <div className="textLeft">
                <h3 className="line">Heizungssteuerung: </h3>
                <div className="flexStartLeft contentContainer mgt1 mgb2">
                  {populateProducts(heating)}
                </div>
              </div>
            )}
          </div>
          <div>
            {security.length > 0 && (
              <div className="textLeft">
                <h3 className="line">Sicherheitstechnik: </h3>
                <div className="flexStartLeft contentContainer mgt1 mgb2">
                  {populateProducts(security)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>{loading ? <div>Loading...</div> : <div>{populateResult()}</div>}</div>
  );
}

export default Details;
