import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './layouts/Main/Main';
import { Branding } from './components/Branding/Branding';
import { Header } from './layouts/Header/Header';
import { Homepage } from './pages/Homepage/Homepage';
import { Navigation } from './components/Navigation/Navigation';


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
    </div>
  );
}

export default App;
