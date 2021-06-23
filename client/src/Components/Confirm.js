import e27Img from '../images/lights/e27.png';
import e14Img from '../images//lights/e14.png';
import gu10Img from '../images/lights/gu10.png';

import stripImg from '../images/lights/strip.png';
import tableLampImg from '../images/lights/tableLamp.png';
import recSpotImg from '../images/lights/recSpot.png';
import wallLightImg from '../images/lights/wallLight.png';
import plugImg from '../images/lights/plug.png';
import surfSpotImg from '../images/lights/surfSpot.png';
import recSwitchImg from '../images/lights/recSwitch.png';
import ceilingLightImg from '../images/lights/ceilingLight.png';

import gardenSpotImg from '../images/lights/gardenSpot.png';
import gardenStripImg from '../images/lights/gardenStrip.png';
import pathLightImg from '../images/lights/pathLight.png';
import wallGardenLightImg from '../images/lights/wallGardenLight.png';

import radiatorImg from '../images/heating/radiator.png';
import thermostatImg from '../images/heating/thermostat.png';
import underfloorHeatingImg from '../images/heating/underfloorHeating.png';

import motionSensorImg from '../images/security/motionSensor.png';
import windowSensorImg from '../images/security/windowSensor.png';
import sirenImg from '../images/security/siren.png';
import smokeDetectorImg from '../images/security/smokeDetector.png';
import doorLockImg from '../images/security/doorLock.png';
import videoDoorbellImg from '../images/security/videoDoorbell.png';
import cameraImg from '../images/security/camera.png';

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import backendResponseAction from '../actions/backendResponse';

const api = axios.create({
  baseURL: 'http://localhost:9000/result',
});

function Confirm() {
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  // selSD stands for selectionStateDisplay
  const selSD = useSelector((state) => state.selectionState);
  const selectionStateChange = useDispatch();

  const backendRequest = () => {
    setLoading(true);
    let categories = {
      light: selSD.light,
      heating: selSD.heating,
      security: selSD.security,
    };

    let products = [
      selSD.e27W && 'e27W',
      selSD.e27A && 'e27A',
      selSD.e27M && 'e27M',
      selSD.e14W && 'e14W',
      selSD.e14A && 'e14A',
      selSD.e14M && 'e14M',
      selSD.gu10W && 'gu10W',
      selSD.gu10A && 'gu10A',
      selSD.gu10M && 'gu10M',
      selSD.tableLamp && 'tableLamp',
      selSD.strip && 'strip',
      selSD.plugN && 'plugN',
      selSD.plugD && 'plugD',
      selSD.recSpotW && 'recSpotW',
      selSD.recSpotM && 'recSpotM',
      selSD.recSpotA && 'recSpotA',
      selSD.surfSpotA && 'surfSpotA',
      selSD.surfSpotM && 'surfSpotM',
      selSD.ceilingA && 'ceilingA',
      selSD.ceilingM && 'ceilingM',
      selSD.recSwitchN && 'recSwitchN',
      selSD.recSwitchD && 'recSwitchD',
      selSD.wallA && 'wallA',
      selSD.wallM && 'wallM',
      selSD.pathLightW && 'pathLightW',
      selSD.pathLightM && 'pathLightM',
      selSD.gardenSpot && 'gardenSpot',
      selSD.wallGardenW && 'wallGardenW',
      selSD.wallGardenM && 'wallGardenM',
      selSD.gardenStrip && 'gardenStrip',
      selSD.radiator && 'radiator',
      selSD.thermostatWired230 && 'thermostatWired230',
      selSD.thermostatWired24 && 'thermostatWired24',
      selSD.thermostatWireless && 'thermostatWireless',
      selSD.heatActor12Motorized && 'heatActor12Motorized',
      selSD.heatActor24_06 && 'heatActor24_06',
      selSD.heatActor24_10 && 'heatActor24_10',
      selSD.heatActor230_06 && 'heatActor230_06',
      selSD.heatActor230_10 && 'heatActor230_10',
      selSD.motionI && 'motionI',
      selSD.motionO && 'motionO',
      selSD.windowSensor && 'windowSensor',
      selSD.sirenI && 'sirenI',
      selSD.sirenO && 'sirenO',
      selSD.smoke && 'smoke',
      selSD.lock && 'lock',
      selSD.doorbell && 'doorbell',
      selSD.cameraI && 'cameraI',
      selSD.cameraO && 'cameraO',
      selSD.motionO && 'motionOZ',
      selSD.thermostatWireless && 'thermostatWirelessExt',
    ];

    let productsAdjusted = products.filter((x) => {
      return x !== false;
    });

    let transferData = { categories, productsAdjusted };

    api
      .post('/', transferData)
      .then((res) => {
        selectionStateChange(backendResponseAction(res.data));
        console.log(res.data);

        history.push('/overview');
      })
      .catch((err) => {
        console.log(err);
      });
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
        <div className="background">
          <div className="whiteBackground">
            <h1 className="stripe">Bestätige Deine Auswahl</h1>
            {(selSD.lightbulbsTemp ||
              selSD.gardenTemp ||
              selSD.innerLightsTemp) && (
              <div>
                <div>
                  <h2 className="textLeft mgl1">Beleuchtung:</h2>
                </div>
                {selSD.lightbulbsTemp && (
                  <div>
                    <div>
                      <h3 className="line textLeft">Glühbirnen & Spots: </h3>
                    </div>
                    <div className="flexStartLeft contentContainer mgt1 mgb2">
                      {selSD.e27W && (
                        <div className="mgl1 contentBox">
                          <img src={e27Img} />
                          <div>E27, dimmbar</div>
                        </div>
                      )}

                      {selSD.e27A && (
                        <div className="mgl1 contentBox">
                          <img src={e27Img} />
                          <div>E27, dimmbares Weißlicht</div>
                        </div>
                      )}

                      {selSD.e27M && (
                        <div className="mgl1 contentBox">
                          <img src={e27Img} />
                          <div>E27, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {selSD.e14W && (
                        <div className="mgl1 contentBox">
                          <img src={e14Img} />
                          <div>E14, dimmbar</div>
                        </div>
                      )}
                      {selSD.e14A && (
                        <div className="mgl1 contentBox">
                          <img src={e14Img} />
                          <div>E14, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {selSD.e14M && (
                        <div className="mgl1 contentBox">
                          <img src={e14Img} />
                          <div>E14, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {selSD.gu10W && (
                        <div className="mgl1 contentBox">
                          <img src={gu10Img} />
                          <div>GU10 Spot, dimmbar</div>
                        </div>
                      )}
                      {selSD.gu10A && (
                        <div className="mgl1 contentBox">
                          <img src={gu10Img} />
                          <div>GU10 Spot, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {selSD.gu10M && (
                        <div className="mgl1 contentBox">
                          <img src={gu10Img} />
                          <div>GU10 Spot, Weiß- und Farblicht</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {selSD.innerLightsTemp && (
                  <div>
                    <div>
                      <h3 className="line textLeft">Innenbeleuchtung:</h3>
                    </div>
                    <div className="flexStartLeft contentContainer mgt1 mgb2">
                      {selSD.strip && (
                        <div className="mgl1 contentBox">
                          <img src={stripImg} />
                          <div>Leuchtstreifen</div>
                        </div>
                      )}
                      {selSD.tableLamp && (
                        <div className="mgl1 contentBox">
                          <img src={tableLampImg} />
                          <div>Tischlampe</div>
                        </div>
                      )}
                      {selSD.plugN && (
                        <div className="mgl1 contentBox">
                          <img src={plugImg} />
                          <div>Zwischenstecker</div>
                        </div>
                      )}
                      {selSD.plugD && (
                        <div className="mgl1 contentBox">
                          <img src={plugImg} />
                          <div>Zwischenstecker mit Dimmfunktion</div>
                        </div>
                      )}
                      {selSD.recSpotW && (
                        <div className="mgl1 contentBox">
                          <img src={recSpotImg} />
                          <div>Einbauspot, dimmbar</div>
                        </div>
                      )}
                      {selSD.recSpotA && (
                        <div className="mgl1 contentBox">
                          <img src={recSpotImg} />
                          <div>Einbauspot, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {selSD.recSpotM && (
                        <div className="mgl1 contentBox">
                          <img src={recSpotImg} />
                          <div>Einbauspot, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {selSD.surfSpotA && (
                        <div className="mgl1 contentBox">
                          <img src={surfSpotImg} />
                          <div>Spotlampe, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {selSD.surfSpotM && (
                        <div className="mgl1 contentBox">
                          <img src={surfSpotImg} />
                          <div>Spotlampe, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {selSD.ceilingA && (
                        <div className="mgl1 contentBox">
                          <img src={ceilingLightImg} />
                          <div>Deckenleuchte, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {selSD.ceilingM && (
                        <div className="mgl1 contentBox">
                          <img src={ceilingLightImg} />
                          <div>Deckenleuchte, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {selSD.recSwitchN && (
                        <div className="mgl1 contentBox">
                          <img src={recSwitchImg} />
                          <div>Unterputzaktor</div>
                        </div>
                      )}
                      {selSD.recSwitchD && (
                        <div className="mgl1 contentBox">
                          <img src={recSwitchImg} />
                          <div>Unterputzaktor mit Dimmfunktion</div>
                        </div>
                      )}
                      {selSD.wallA && (
                        <div className="mgl1 contentBox">
                          <img src={wallLightImg} />
                          <div>Wandleuchte, dimmbares Weißlicht</div>
                        </div>
                      )}
                      {selSD.wallM && (
                        <div className="mgl1 contentBox">
                          <img src={wallLightImg} />
                          <div>Wandleuchte, Weiß- und Farblicht</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {selSD.gardenTemp && (
                  <div>
                    <div>
                      <h3 className="line textLeft">Gartenbeleuchtung:</h3>
                    </div>
                    <div className="flexStartLeft contentContainer mgt1 mgb2">
                      {selSD.pathLightW && (
                        <div className="mgl1 contentBox">
                          <img src={pathLightImg} />
                          <div>Wegeleuchte, dimmbar</div>
                        </div>
                      )}
                      {selSD.pathLightM && (
                        <div className="mgl1 contentBox">
                          <img src={pathLightImg} />
                          <div>Wegeleuchte, Weiß- und Farblicht</div>
                        </div>
                      )}
                      {selSD.gardenSpot && (
                        <div className="mgl1 contentBox">
                          <img src={gardenSpotImg} />
                          <div>Gartenspot</div>
                        </div>
                      )}
                      {selSD.gardenStrip && (
                        <div className="mgl1 contentBox">
                          <img src={gardenStripImg} />
                          <div>Leuchtsteifen für den Garten</div>
                        </div>
                      )}
                      {selSD.wallGardenW && (
                        <div className="mgl1 contentBox">
                          <img src={wallGardenLightImg} />
                          <div>Wandleuchte, dimmbar</div>
                        </div>
                      )}
                      {selSD.wallGardenM && (
                        <div className="mgl1 contentBox">
                          <img src={wallGardenLightImg} />
                          <div>Wandleuchte, Weiß- und Farblicht</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {selSD.heatingTemp && (
              <div>
                <div>
                  <h2 className="textLeft mgl1">Heizung: </h2>
                  <div className="line"></div>
                </div>
                <div className="flexStartLeft contentContainer mgt1 mgb2">
                  {selSD.radiator && (
                    <div className="mgl1 contentBox">
                      <img src={radiatorImg} />
                      <div>Heizkörperthermostat</div>
                    </div>
                  )}
                  {selSD.thermostatWired230 && (
                    <div className="mgl1 contentBox">
                      <img src={thermostatImg} />
                      <div>Wandthermostat, 230V</div>
                    </div>
                  )}
                  {selSD.thermostatWired24 && (
                    <div className="mgl1 contentBox">
                      <img src={thermostatImg} />
                      <div>Wandthermostat, 24V</div>
                    </div>
                  )}
                  {selSD.thermostatWireless && (
                    <div className="mgl1 contentBox">
                      <img src={thermostatImg} />
                      <div>Wandthermostat, Funk</div>
                    </div>
                  )}
                  {selSD.heatActor230_06 && (
                    <div className="mgl1 contentBox">
                      <img src={underfloorHeatingImg} />
                      <div>Fußbodenheizungsaktor, 230V | 6 Stellantriebe</div>
                    </div>
                  )}
                  {selSD.heatActor230_10 && (
                    <div className="mgl1 contentBox">
                      <img src={underfloorHeatingImg} />
                      <div>Fußbodenheizungsaktor, 230V | 10 Stellantriebe</div>
                    </div>
                  )}
                  {selSD.heatActor24_06 && (
                    <div className="mgl1 contentBox">
                      <img src={underfloorHeatingImg} />
                      <div>Fußbodenheizungsaktor, 24V | 6 Stellantriebe</div>
                    </div>
                  )}
                  {selSD.heatActor24_10 && (
                    <div className="mgl1 contentBox">
                      <img src={underfloorHeatingImg} />
                      <div>Fußbodenheizungsaktor, 24V | 10 Stellantriebe</div>
                    </div>
                  )}
                  {selSD.heatActor12Motorized && (
                    <div className="mgl1 contentBox">
                      <img src={underfloorHeatingImg} />
                      <div>
                        Fußbodenheizungsaktor, motorisiert | 12 Stellantriebe
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {selSD.securityTemp && (
              <div>
                <div>
                  <h2 className="textLeft mgl1">Sicherheit: </h2>
                  <div className="line"></div>
                </div>
                <div className="flexStartLeft contentContainer mgt1 mgb2">
                  {selSD.motionI && (
                    <div className="mgl1 contentBox">
                      <img src={motionSensorImg} />
                      <div>Bewegungsmelder, innen</div>
                    </div>
                  )}
                  {selSD.windowSensor && (
                    <div className="mgl1 contentBox">
                      <img src={windowSensorImg} />
                      <div>Tür- und Fensterkontakt</div>
                    </div>
                  )}
                  {selSD.sirenI && (
                    <div className="mgl1 contentBox">
                      <img src={sirenImg} />
                      <div>Alarmsirene, innen</div>
                    </div>
                  )}
                  {selSD.smoke && (
                    <div className="mgl1 contentBox">
                      <img src={smokeDetectorImg} />
                      <div>Rauchwarnmelder</div>
                    </div>
                  )}
                  {selSD.cameraI && (
                    <div className="mgl1 contentBox">
                      <img src={cameraImg} />
                      <div>Sicherheitskamera, innen</div>
                    </div>
                  )}
                  {selSD.lock && (
                    <div className="mgl1 contentBox">
                      <img src={doorLockImg} />
                      <div>Türschloss</div>
                    </div>
                  )}
                  {selSD.motionO && (
                    <div className="mgl1 contentBox">
                      <img src={motionSensorImg} />
                      <div>Bewegungsmelder, außen</div>
                    </div>
                  )}
                  {selSD.sirenO && (
                    <div className="mgl1 contentBox">
                      <img src={sirenImg} />
                      <div>Alarmsirene, außen</div>
                    </div>
                  )}
                  {selSD.cameraO && (
                    <div className="mgl1 contentBox">
                      <img src={cameraImg} />
                      <div>Sicherheitskamera, außen</div>
                    </div>
                  )}
                  {selSD.doorbell && (
                    <div className="mgl1 contentBox">
                      <img src={videoDoorbellImg} />
                      <div>Video-Türklingel</div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="btnSingle">
              <button className="btn" onClick={backendRequest}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Confirm;
