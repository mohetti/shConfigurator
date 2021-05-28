function Categories() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h2>Wähle Deine Kategorien:</h2>
      </header>
      <div className="configContainer mgtH">
        <div className="typeContainer mgCtg">
          <div className="typeBox">
            <div>Beleuchtung</div>
          </div>
          <div className="typeBox">
            <div>Heizung</div>
          </div>
          <div className="typeBox">
            <div>Sicherheit</div>
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

export default Categories;
