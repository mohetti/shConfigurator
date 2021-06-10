import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import placeholder from '../images/placeholder.png';

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
        <div key={uniqid()} className="productBox">
          <img src={placeholder} />
          <div className="productName">{x.name}</div>
          <div className="dotPos">
            <div>{x.comp === true && <div className="dotComp"></div>}</div>
            <div>
              {x.comp === false && <div className="dotPartialComp"></div>}
            </div>
            <div>{x.comp === null && <div className="dotNotComp"></div>}</div>
            <div>{x.comp === 'main' && <div className="dotMain"></div>}</div>
          </div>
        </div>
      );
    });
  };

  const populateResult = () => {
    return (
      <div className="windowContainer">
        <div className="spaceLeft"></div>
        <div className="center">
          <h1 className="stripe mgt1 textCenter">{system}</h1>
          <div className="lightbulbs">
            {lightbulbs.length > 0 && (
              <div>
                <h3 className="line">Glühbirnen and Spots</h3>
                <div className="productContainer">
                  {populateProducts(lightbulbs)}
                </div>
              </div>
            )}
          </div>
          <div className="lightbulbs">
            {innerLights.length > 0 && (
              <div>
                <h3 className="line">Innenbeleuchtung: </h3>
                <div className="productContainer">
                  {populateProducts(innerLights)}
                </div>
              </div>
            )}
          </div>
          <div>
            {gardenLights.length > 0 && (
              <div className="lightbulbs">
                <h3 className="line">Gartenbeleuchtung: </h3>
                <div className="productContainer">
                  {populateProducts(gardenLights)}
                </div>
              </div>
            )}
          </div>
          <div>
            {heating.length > 0 && (
              <div className="lightbulbs">
                <h3 className="line">Heizungssteuerung: </h3>
                <div className="productContainer">
                  {populateProducts(heating)}
                </div>
              </div>
            )}
          </div>
          <div>
            {security.length > 0 && (
              <div className="lightbulbs">
                <h3 className="line">Sicherheitstechnik: </h3>
                <div className="productContainer">
                  {populateProducts(security)}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="spaceRight"></div>
      </div>
    );
  };

  return (
    <div>{loading ? <div>Loading...</div> : <div>{populateResult()}</div>}</div>
  );
}

export default Details;
