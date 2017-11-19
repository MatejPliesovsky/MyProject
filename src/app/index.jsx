import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage.jsx';

render((
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage}/>
    </Switch>
  </Router>
  ),
  document.getElementById('app')
);
