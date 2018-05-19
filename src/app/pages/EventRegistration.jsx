import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default2 from '../layouts/Default2.jsx';
import SideBar from '../components/SideBar.jsx';
import EventRegistrationComp from '../components/EventRegistrationComp.jsx';

export default class EventRegistration extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default2/>
      <SideBar />
      <EventRegistrationComp/>
      </div>
    </MuiThemeProvider>);
  }
}
