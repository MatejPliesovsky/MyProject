import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

import styles from '../../../css';

class Profile extends Component {

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
    return (<div style={styles.profile.slide}>
      <RaisedButton containerElement={<Link to = "/AdminDash" />} label="Submit" primary={true} style={styles.profile.save}/>
    <RaisedButton containerElement={<Link to = "/AdminDash" />} label="Cancel" secondary={true} style={styles.profile.cancel}/>
      <List>
        <Paper style={styles.profile.profileTable} zDepth={2}>
          <div style={styles.profile.text}>
            <TextField value={this.state.user.firstname}/><br/>
            <TextField value={this.state.user.lastname}/><br/>
            <TextField value={this.state.user.dob}/><br/>
            <TextField value={this.state.user.street}/><br/>
            <TextField value={this.state.user.city}/><br/>
            <TextField value={this.state.user.zip}/><br/>
            <TextField value={this.state.user.state}/><br/>
            <TextField value={this.state.user.drivinglicence}/><br/>
          </div>
          <img style={styles.profile.circular} src="http://profile.actionsprout.com/default.jpeg"/>
        </Paper>
      </List>
    </div>);
  }
}

export default Profile;
