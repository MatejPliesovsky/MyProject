import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

import styles from '../../../css';

class Team extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: 'Matej',
        lastname: 'Pliesovsky',
        dob: '19.9.1991',
        street: 'Lomnicka 3',
        city: 'Kosice',
        zip: '040 01',
        state: 'Slovakia',
        drivinglicence: 'EX034098'
      }
    }
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    axios.get('/users').then((response) => {
      this.setState({user: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (<div style={styles.team.slide}>
      <RaisedButton containerElement={<Link to = "/AdminDash" />} label="Submit" primary={true} style={styles.team.save}/>
    <RaisedButton containerElement={<Link to = "/AdminDash" />} label="Cancel" secondary={true} style={styles.team.cancel}/>
      <List>
        <Paper style={styles.team.profileTable} zDepth={2}>
          <div style={styles.team.text}>
            <TextField id="text-field-default" defaultValue="First name"/><br/>
            <TextField id="text-field-default" defaultValue="Last name"/><br/>
            <TextField id="text-field-default" defaultValue="Date of birth"/><br/>
          <TextField id="text-field-default" defaultValue="Street"/><br/>
        <TextField id="text-field-default" defaultValue="City"/><br/>
      <TextField id="text-field-default" defaultValue="ZIP"/><br/>
    <TextField id="text-field-default" defaultValue="State"/><br/>
            <TextField id="text-field-default" defaultValue="Driving licence"/><br/>
          </div>
          <img style={styles.team.circular} src="http://profile.actionsprout.com/default.jpeg"/>
        </Paper>
      </List>
    </div>);
  }
}

export default Team;
