import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default from '../layouts/Default.jsx';
import EventsList from '../components/EventsList.jsx';
import Login from '../components/Login.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default/>
        <EventsList/>
      <Login />
      </div>
    </MuiThemeProvider>);
  }
}
