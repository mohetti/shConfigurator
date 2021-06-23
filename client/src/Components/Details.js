import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { amzLinks } from './AmzLinks';

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

  const overview = () => {
    return history.push('/overview');
  };

  const populateProducts = (category) => {
    return category.map((x) => {
      if (x.system === 'TRÅDFRI') {
        return (
          <div
            key={uniqid()}
            className={`productBox mgl1 ${
              x.comp === true
                ? 'borderGreen'
                : x.comp === false
                ? 'borderYellow'
                : x.comp === null
                ? 'borderRed'
                : 'borderBlue'
            }`}
          >
            <div
              className={`compBar ${
                x.comp === true
                  ? 'green'
                  : x.comp === false
                  ? 'yellow'
                  : x.comp === null
                  ? 'red'
                  : 'blue'
              }`}
            ></div>
            <div className="productImg mgt3">
              <div border="0" className="imgSize"></div>
            </div>
            <div
              className={`productLink fontSizeProductName mgt3 pdt2 pBoxBG ${
                x.comp === true
                  ? 'greenTransp'
                  : x.comp === false
                  ? 'yellowTransp'
                  : x.comp === null
                  ? 'redTransp'
                  : 'blueTransp'
              }`}
            >
              {x.name}
            </div>
            <div
              className={`btnContainerDetails pBoxBG ${
                x.comp === true
                  ? 'greenTransp'
                  : x.comp === false
                  ? 'yellowTransp'
                  : x.comp === null
                  ? 'redTransp'
                  : 'blueTransp'
              }`}
            ></div>
          </div>
        );
      } else {
        return (
          <div
            key={uniqid()}
            className={`productBox mgl1 ${
              x.comp === true
                ? 'borderGreen'
                : x.comp === false
                ? 'borderYellow'
                : x.comp === null
                ? 'borderRed'
                : 'borderBlue'
            }`}
          >
            <div
              className={`compBar ${
                x.comp === true
                  ? 'green'
                  : x.comp === false
                  ? 'yellow'
                  : x.comp === null
                  ? 'red'
                  : 'blue'
              }`}
            ></div>
            <div className="productImg mgt3">
              <a href={amzLinks[`${x.name}`].href} target="_blank">
                <img
                  border="0"
                  className="imgSize"
                  src={amzLinks[`${x.name}`].src1}
                />
              </a>
              <img
                src={amzLinks[`${x.name}`].src2}
                width="1"
                height="1"
                border="0"
                alt=""
                border="none !important"
                margin="0px !important"
              />
            </div>
            <div
              className={`productLink fontSizeProductName mgt3 pdt2 pBoxBG ${
                x.comp === true
                  ? 'greenTransp'
                  : x.comp === false
                  ? 'yellowTransp'
                  : x.comp === null
                  ? 'redTransp'
                  : 'blueTransp'
              }`}
            >
              {x.name}
            </div>
            <div
              className={`btnContainerDetails pBoxBG ${
                x.comp === true
                  ? 'greenTransp'
                  : x.comp === false
                  ? 'yellowTransp'
                  : x.comp === null
                  ? 'redTransp'
                  : 'blueTransp'
              }`}
            >
              <Link
                to={{
                  pathname: `${amzLinks[`${x.name}`].link}`,
                }}
                target="_blank"
                className="btnDetails"
              >
                zum Angebot
              </Link>
            </div>
          </div>
        );
      }
    });
  };

  const populateStations = () => {
    let stationsArray = [];
    if (system.mainBase !== '') {
      stationsArray.push(system.mainBase);
    }
    system.substations.map((x) => stationsArray.push(x));
    return stationsArray.map((x) => {
      if (x === 'TRÅDFRI Gateway') {
        return (
          <div key={uniqid()} className="borderGray productBox mgl1">
            <div className="productImg mgt3">
              <div border="0" className="imgSize"></div>
            </div>
            <div
              className={'grayTransp productLink fontSizeProductName mgt3 pdt2'}
            >
              {x}
            </div>
            <div className="grayTransp btnContainerDetails"></div>
          </div>
        );
      } else {
        return (
          <div key={uniqid()} className="borderGray productBox mgl1">
            <div className="productImg mgt3">
              <a href={amzLinks[`${x}`].href} target="_blank">
                <img
                  border="0"
                  className="imgSize"
                  src={amzLinks[`${x}`].src1}
                />
              </a>
              <img
                src={amzLinks[`${x}`].src2}
                width="1"
                height="1"
                border="0"
                alt=""
                border="none !important"
                margin="0px !important"
              />
            </div>
            <div
              className={'grayTransp productLink fontSizeProductName mgt3 pdt2'}
            >
              {x}
            </div>
            <div className="grayTransp btnContainerDetails">
              <Link
                to={{
                  pathname: `${amzLinks[`${x}`].link}`,
                }}
                target="_blank"
                className="btnDetails"
              >
                zum Angebot
              </Link>
            </div>
          </div>
        );
      }
    });
  };

  const populateResult = () => {
    return (
      <div className="background">
        <div className="whiteBackground">
          <h1 className="stripe">{system.mainSystem}</h1>
          <div className="textLeft">
            {system.mainBase !== '' || system.substations.length > 0 ? (
              <div>
                <h3 className="line">Basisstationen</h3>
                <div className="flexStartLeft contentContainer mgt1 mgb2">
                  {populateStations()}
                </div>
              </div>
            ) : null}
          </div>
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
          <div className="btnSingle">
            <button onClick={overview} className="btn">
              Zurück zur Übersicht
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {loading ? (
        <div className="centerLoading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>{populateResult()}</div>
      )}
    </div>
  );
}

export default Details;
