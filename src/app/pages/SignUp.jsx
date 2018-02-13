import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default from '../layouts/Default2.jsx';
import SideBar from '../components/SideBar.jsx';
import SignUpComp from '../components/SignUpComp.jsx';

export default class SignUp extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default/>
        <SideBar/>
      <SignUpComp />
      </div>
    </MuiThemeProvider>);
  }
}
