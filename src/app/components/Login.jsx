import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import styles from '../css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <div>
      <List>
        <Paper style={styles.login.bgPaper} zDepth={2}><ListItem primaryText="Prihlasenie"/>
      <TextField hintText="Username"/><br/>
    <TextField hintText="Password"/>
  <RaisedButton containerElement={<Link to="/UserHomeScreen"/>} label="Submit" primary={true} style={styles.login.submit} />
      <RaisedButton containerElement={<Link to="/AdminDash"/>} label="Cancel" primary={true} style={styles.login.cancel} />
      </Paper>
    </List>
  </div>
  <div>
    <img style={styles.login.disImig} src="https://tango-hamburg.info//images/race-20car-20clipart-20for-20kids-clip-art-race-car-603_262.png"/>
  </div>
</div>
);
  }
}
