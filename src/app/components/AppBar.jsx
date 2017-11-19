
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const styles={
    pos:{
      width:100+'%',
    },
}

export default class AppbarWithNav extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar title="Registration Portal" style={styles.pos}/>
      </div>
    );
  }
}
