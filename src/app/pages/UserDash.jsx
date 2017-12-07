import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default from '../layouts/Default.jsx';
import SideBar from '../components/SideBar.jsx';
import MyTabsU from '../components/user/MyTabsU.jsx';

export default class UserDash extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default/>
        <SideBar/>
        <MyTabsU/>
      </div>
    </MuiThemeProvider>);
  }
}
