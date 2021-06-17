import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Homescreen from './pages/Homescreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
