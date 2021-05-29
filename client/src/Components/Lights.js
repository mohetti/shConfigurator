import placeholder from '../images/placeholder.png';

function Lights() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle die passende Beleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="lightContainer mgLights">
          <div className="typeBox e27">
            <img src={placeholder} />
            <div>E27 Glühbirnen</div>
          </div>
          <div className="typeBox e14">
            <img src={placeholder} />
            <div>E14 Glühbirnen</div>
          </div>
          <div className="typeBox gu10">
            <img src={placeholder} />
            <div>GU10 Spots</div>
          </div>
          <div className="typeBox strip">
            <img src={placeholder} />
            <div>Leuchtstreifen</div>
          </div>
          <div className="typeBox plug">
            <img src={placeholder} />
            <div>Zwischenstecker</div>
          </div>
          <div className="typeBox innerLights">
            <img src={placeholder} />
            <div>weitere Innenbeleuchtung</div>
          </div>
          <div className="typeBox garden">
            <img src={placeholder} />
            <div>Gartenbeleuchtung</div>
          </div>
        </div>
        <div className="btnContainer">
          <button className="btn">Zurück</button>
          <button className="btn">Mehr Infos</button>
          <button className="btn">Weiter</button>
        </div>
      </div>
    </div>
  );
}

export default Lights;
