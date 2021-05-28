function Lights() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle die passende Beleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="lightContainer mgLights">
          <div className="typeBox e27">
            <div>E27 Glühbirnen</div>
          </div>
          <div className="typeBox e14">
            <div>E14 Glühbirnen</div>
          </div>
          <div className="typeBox gu10">
            <div>GU10 Spots</div>
          </div>
          <div className="typeBox surfSpot">
            <div>Akzentlicht</div>
          </div>
          <div className="typeBox strip">
            <div>Leuchtstreifen</div>
          </div>
          <div className="typeBox plug">
            <div>Zwischenstecker</div>
          </div>
          <div className="typeBox innerLights">
            <div>weitere Innenbeleuchtung</div>
          </div>
          <div className="typeBox garden">
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
