import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default2 from '../layouts/Default2.jsx';
import SideBar from '../components/SideBar.jsx';
import EventsComp from '../components/EventsComp.jsx';

export default class UserHomeScreen extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default2/>
        <SideBar/>
        <EventsComp/>
      </div>
    </MuiThemeProvider>);
  }
}
