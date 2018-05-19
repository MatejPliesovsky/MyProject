import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import styles from '../css';

export default class SignUpComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <List>
        <Paper style={styles.signup.regTab} zDepth={2}><ListItem primaryText="Registracia"/>
      <TextField hintText="Prihlasovacie meno"/>
    <TextField hintText="Meno"/><br/>
  <TextField hintText="Priezvisko"/>
          <TextField hintText="E-mail"/><br/>
        <TextField hintText="Ulica"/>
      <TextField hintText="Číslo domu"/><br/>
    <TextField hintText="Mesto"/>
  <TextField hintText="PSČ"/><br/>
<TextField hintText="Štát"/>
          <TextField hintText="Telefón"/><br/>
        <TextField hintText="Heslo"/>
      <TextField hintText="Potvrdenie hesla"/><br/>
    <RaisedButton containerElement={<Link to = "/" />} label="Uložiť" primary={true} style={styles.signup.submit}/>
  <RaisedButton containerElement={<Link to = "/" />} label="Zrušiť" primary={true} style={styles.signup.cancel}/>
        </Paper>
      </List>
    </div>);
  }
}
