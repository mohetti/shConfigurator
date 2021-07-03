import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

// import Components
import Start from './Components/Start';
import Categories from './Components/Categories';
import Lights from './Components/Lights';
import Lightbulbs from './Components/Lightbulbs';
import Innerlights from './Components/Innerlights';
import Gardenlights from './Components/Gardenlights';
import Heating from './Components/Heating';
import Security from './Components/Security';
import Confirm from './Components/Confirm';
import Overview from './Components/Overview';
import Details from './Components/Details';

// import css
import './Components/stylesConfigurator/styles.css';
import './Components/stylesConfigurator/overview.css';
import './Components/stylesConfigurator/details.css';
import './Components/stylesConfigurator/helpers.css';
import './Components/stylesConfigurator/modal.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/start">
          <Start />
        </Route>
        <Route exact path="/kategorien">
          <Categories />
        </Route>
        <Route exact path="/beleuchtung">
          <Lights />
        </Route>
        <Route exact path="/gluehbirnen">
          <Lightbulbs />
        </Route>
        <Route exact path="/innenbeleuchtung">
          <Innerlights />
        </Route>
        <Route exact path="/gartenbeleuchtung">
          <Gardenlights />
        </Route>
        <Route exact path="/heizung">
          <Heating />
        </Route>
        <Route exact path="/sicherheit">
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
          <Start />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
