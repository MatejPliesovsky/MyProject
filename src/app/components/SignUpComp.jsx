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
      <TextField hintText="Username"/>
    <TextField hintText="First name"/><br/>
          <TextField hintText="Last name"/>
          <TextField hintText="E-mail"/><br/>
          <TextField hintText="Street"/>
          <TextField hintText="Street number"/><br/>
          <TextField hintText="City"/>
          <TextField hintText="State"/><br/>
          <TextField hintText="ZIP"/>
          <TextField hintText="Phone number"/><br/>
          <TextField hintText="Password"/>
          <TextField hintText="Confirm Password"/><br/>
        <RaisedButton containerElement={<Link to = "/" />} label="Submit" primary={true} style={styles.signup.submit}/>
      <RaisedButton containerElement={<Link to = "/" />} label="Cancel" primary={true} style={styles.signup.cancel}/>
        </Paper>
      </List>
    </div>);
  }
}
