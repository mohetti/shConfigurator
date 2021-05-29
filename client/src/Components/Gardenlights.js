import placeholder from '../images/placeholder.png';

function Gardenlights() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle passende Innenbeleuchtung:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="gardenlightsContainer mgGardenlights">
          <div className="typeBox pathLight">
            <img src={placeholder} />
            <div>Wegeleuchten</div>
          </div>
          <div className="typeBox gardenSpot">
            <img src={placeholder} />
            <div>Gartenspots</div>
          </div>
          <div className="typeBox wallGarden">
            <img src={placeholder} />
            <div>Wandbeleuchtung</div>
          </div>
          <div className="typeBox gardenStrip">
            <img src={placeholder} />
            <div>Leuchtstreifen</div>
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

export default Gardenlights;
