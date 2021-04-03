import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './layouts/Main/Main';
import { Branding } from './components/Branding/Branding';
import { Header } from './layouts/Header/Header';
import { Homepage } from './pages/Homepage/Homepage';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './layouts/Footer/Footer';
import { Constrain } from './layouts/Constrain/Constrain';


function App() {
  return (
    <div className="App">
      <Router>
        <Header leftContent={<Branding />} rightContent={<Navigation />} />
        <Main>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Main>
      </Router>
      <Constrain modifierClasses="constrain--wide">
        <Footer>
          View this project on <a
            href="https://github.com/alecherryy/dentsu-flows-challenge"
            target="_blank"
            rel="noreferrer"
            >GitHub</a>.
        </Footer>
      </Constrain>
    </div>
  );
}

export default App;
