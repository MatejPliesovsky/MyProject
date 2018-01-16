import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage.jsx';
import UserHomeScreen from './pages/UserHomeScreen.jsx';
import UserDash from './pages/UserDash.jsx';
import AdminDash from './pages/AdminDash.jsx';
import SignUp from './pages/SignUp.jsx';
import Editor from './pages/Editor.jsx';

render((
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage}/>
    <Route path='/UserHomeScreen' component={UserHomeScreen}/>
    <Route path='/UserDash' component={UserDash}/>
  <Route path='/AdminDash' component={AdminDash}/>
<Route path='/SignUp' component={SignUp}/>
<Route path='/Editor' component={Editor}/>
    </Switch>
  </Router>
  ),
  document.getElementById('app')
);
