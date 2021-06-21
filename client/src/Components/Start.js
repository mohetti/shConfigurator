import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import selectionActionsContainer from '../actions';

function Start() {
  let history = useHistory();

  const test = useSelector((state) => state.selectionState);
  const selectionState = useDispatch();

  let start = () => {
    selectionState(selectionActionsContainer.resetAll());
    return history.push('/kategorien');
  };

  return (
    <div className="background">
      <div className="whiteBackground">
        <header>
          <h1 className="stripe mgt2">Smart Home Konfigurator</h1>
          <h2>komwoh</h2>
        </header>
        <div className="mgt1">
          <p>
            Erstelle Dir jetzt Dein persönliches Smart Home, mit dem komwoh
            Smart Home Konfigurator.
          </p>
          <p>Wähle aus den drei Kategorien: Licht, Heizung und Sicherheit.</p>

          <h3 className="mgt2">
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
        <div className="btnSingle">
          <button onClick={start} className="btn">
            Starte Deine Auswahl
          </button>
        </div>
      </div>
      <div>{test.motionI.toString()}</div>
      <div onClick={() => selectionState(selectionActionsContainer.motionI())}>
        +
      </div>
      <div>-</div>
    </div>
  );
}

export default Start;
