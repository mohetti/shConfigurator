import placeholder from '../images/placeholder.png';

function Security() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Sicherheitselemente:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="securityContainer mgSecurity">
          <div className="typeBox motion">
            <img src={placeholder} />
            <div>Bewegungsmelder</div>
          </div>
          <div className="typeBox windowSensor">
            <img src={placeholder} />
            <div>Tür-/Fensterkontakt</div>
          </div>
          <div className="typeBox siren">
            <img src={placeholder} />
            <div>Sirene</div>
          </div>
          <div className="typeBox smoke">
            <img src={placeholder} />
            <div>Rauchwarnmelder</div>
          </div>
          <div className="typeBox lock">
            <img src={placeholder} />
            <div>Türschloss</div>
          </div>
          <div className="typeBox doorbell">
            <img src={placeholder} />
            <div>Video-Türklingel</div>
          </div>
          <div className="typeBox camera">
            <img src={placeholder} />
            <div>Sicherheitskamera</div>
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

export default Security;
