import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage.jsx';
import UserDash from './pages/UserDash.jsx';
import AdminDash from './pages/AdminDash.jsx';
import SignUp from './pages/SignUp.jsx';

render((
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage}/>
    <Route path='/UserDash' component={UserDash}/>
  <Route path='/AdminDash' component={AdminDash}/>
<Route path='/SignUp' component={SignUp}/>
    </Switch>
  </Router>
  ),
  document.getElementById('app')
);
