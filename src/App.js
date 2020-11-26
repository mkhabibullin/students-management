import React from 'react';
import { Students } from './features/students/Students';
import { Home } from './features/home/Home';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className={'theme ' + (1 ? 'theme--dark' : 'theme--default')}>
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Switch>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
    </div>
  );
}

export default App;
