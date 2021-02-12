import './App.css';
import Header from './Header'
import SearchPage from './SearchPage.js'
import HomePage from './HomePage.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <HomePage {...routerProps} />}
          />

          <Route
            path="/search"
            exact
            render={(routerProps) => <SearchPage {...routerProps} />}
          />
          {/* <SearchPage /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
