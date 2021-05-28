function Security() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Sicherheitselemente:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="securityContainer mgSecurity">
          <div className="typeBox motion">
            <div>Bewegungsmelder</div>
          </div>
          <div className="typeBox windowSensor">
            <div>Tür-/Fensterkontakt</div>
          </div>
          <div className="typeBox siren">
            <div>Sirene</div>
          </div>
          <div className="typeBox smoke">
            <div>Rauchwarnmelder</div>
          </div>
          <div className="typeBox lock">
            <div>Türschloss</div>
          </div>
          <div className="typeBox doorbell">
            <div>Video-Türklingel</div>
          </div>
          <div className="typeBox camera">
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
