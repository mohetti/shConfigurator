import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Components
import Default from './Components/Default';
import Start from './Components/Start';
import Categories from './Components/Categories';
import Lights from './Components/Lights';
import Heating from './Components/Heating';
import Security from './Components/Security';
import Confirm from './Components/Confirm';
import Overview from './Components/Overview';
import Details from './Components/Details';

// import css
import './Components/stylesConfigurator/styles.css';
import './Components/stylesConfigurator/lights.css';
import './Components/stylesConfigurator/categories.css';
import './Components/stylesConfigurator/heating.css';
import './Components/stylesConfigurator/security.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/start">
          <Start />
        </Route>
        <Route exact path="/Categories">
          <Categories />
        </Route>
        <Route exact path="/lights">
          <Lights />
        </Route>
        <Route exact path="/heating">
          <Heating />
        </Route>
        <Route exact path="/security">
          <Security />
        </Route>
        <Route exact path="/confirm">
          <Confirm />
        </Route>
        <Route exact path="/overview">
          <Overview />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        <Route exact path="/">
          <Default />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
