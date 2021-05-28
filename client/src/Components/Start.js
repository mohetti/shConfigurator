function Start() {
  return (
    <div className="windowContainer">
      <header className="center">
        <h1>Smart Home Konfigurator</h1>
        <h2>komwoh</h2>
      </header>
      <div className="startContainer mgtH center">
        <p className="mgB">
          Erstelle Dir jetzt Dein persönliches Smart Home, mit dem komwoh Smart
          Home Konfigurator.
        </p>
        <p>
          Der Konfigurator erstellt Dir passende Lösungen, anhand Deiner
          persönlichen Wünsche. Du wählst dabei aus drei Kategorien: Licht,
          Heizung und Sicherheit.
        </p>
        <p>
          Beim Smart Home Konfigurator geht es darum eine passgenaue Lösung für
          Dich zu finden. Dabei legen wir besonderen Wert darauf, dass so viele
          Smart Home Geräte wie möglich untereinander kompatibel sind und Du
          damit Dein Smart Home mit nur wenigen Apps steuerst.
        </p>
      </div>
      <div className="mgB">
        <button className="btn">Starte Deine Auswahl</button>
      </div>
    </div>
  );
}

export default Start;
