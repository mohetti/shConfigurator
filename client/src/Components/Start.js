import { useHistory } from 'react-router-dom';

function Start() {
  let history = useHistory();

  let start = () => {
    sessionStorage.clear();
    return history.push('/kategorien');
  };

  return (
    <div className="background">
      <div className="center content1 textCenter">
        <header>
          <h1 className="stripe mgt1">Smart Home Konfigurator</h1>
          <h2 className="mgt1 mgb2">komwoh</h2>
        </header>
        <div>
          <p>
            Erstelle Dir jetzt Dein persönliches Smart Home, mit dem komwoh
            Smart Home Konfigurator.
          </p>
          <p>Wähle aus den drei Kategorien: Licht, Heizung und Sicherheit.</p>

          <h3 className="mgt1">
            <strong>
              Du erhältst Lösungsvorschläge, welche auf Basis Deiner Auswahl:
            </strong>
          </h3>
        </div>
        <div className="checkmarkDiv">
          <ul className="checkmark">
            <li>maximal komaptibel sind.</li>
            <li>mit einem Minium an Basisstationen auskommen.</li>
            <li>möglichst keine Drittanbieter-Software nutzen.</li>
            <li>möglichst viele Geräte mit nur einer App verwalten.</li>
          </ul>
        </div>
        <div className="btnPos">
          <button onClick={start} className="btn">
            Starte Deine Auswahl
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
