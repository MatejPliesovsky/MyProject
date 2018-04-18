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
            <RaisedButton containerElement={<Link to = "/UserHomeScreen" />} label="Submit" primary={true} style={styles.login.submit}/>
            <RaisedButton containerElement={<Link to = "/AdminDash" />} label="Cancel" primary={true} style={styles.login.cancel}/>
          <img style={styles.login.disImig} src="https://longspeakbsa.org/wp-content/uploads/2015/11/Raceway-Car-Picture.png"/>
          </Paper>
        </List>
      </div>
      <div></div>
    </div>);
  }
}
