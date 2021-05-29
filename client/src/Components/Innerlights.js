import placeholder from '../images/placeholder.png';

function Innerlights() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Innenbeleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="innerlightsContainer mgInnerlights">
          <div className="typeBox tableLamp">
            <img src={placeholder} />
            <div>Tischlampe</div>
          </div>
          <div className="typeBox recSpot">
            <img src={placeholder} />
            <div>Einbauspot</div>
          </div>
          <div className="typeBox surfSpot">
            <img src={placeholder} />
            <div>Aufbauspot</div>
          </div>
          <div className="typeBox ceiling">
            <img src={placeholder} />
            <div>Deckenlampe</div>
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

export default Innerlights;
