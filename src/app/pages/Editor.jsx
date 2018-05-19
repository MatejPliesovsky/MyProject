import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default from '../layouts/Default2.jsx';
import SideBar from '../components/SideBar.jsx';
import CompEditor from '../components/admin/editor/CompEditor.jsx';

export default class Editor extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default/>
      <SideBar />
      <CompEditor/>
      </div>
    </MuiThemeProvider>);
  }
}
