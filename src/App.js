import './App.css';
import Header from './Header'
import SearchPage from './SearchPage.js'
import HomePage from './HomePage.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import DetailPage from './DetailPage.js'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={HomePage}

          />
          <Route
            path="/pokemon"
            exact
            component={SearchPage}
          />
          <Route
            path="/pokemon/:pokemonName"
            exact
            component={DetailPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
