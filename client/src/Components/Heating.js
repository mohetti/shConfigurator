function Heating() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Heizungslösungen:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="heatingContainer mgHeating">
          <div className="typeBox radiator">
            <div>Heizkörperthermostat</div>
          </div>
          <div className="typeBox thermostatWired230">
            <div>Thermostat 230V (verkabelt)</div>
          </div>
          <div className="typeBox thermostatWired24">
            <div>Thermostat 24V (verkabelt)</div>
          </div>
          <div className="typeBox thermostatWireless">
            <div>Akzentlicht</div>
          </div>
          <div className="typeBox heatActors">
            <div>Fußbodenheizungsaktor</div>
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

export default Heating;
