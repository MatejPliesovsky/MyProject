
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
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
        <AppBar title="Registration Portal" style={styles.pos} iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Home" Link to="/WelcomePage"/>}/>
      </div>
    );
  }
}
