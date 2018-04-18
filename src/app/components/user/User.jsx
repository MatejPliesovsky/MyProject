import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import styles from '../../css';

class User extends Component {

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
    axios.get('/appusers/1').then((response) => {
      this.setState({user: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (<div style={styles.user.posFields}>
      <h2 >Profile tab</h2>
      You can edit your profile here.<br/>
      <TextField value={this.state.user.firstname}/><br/>
      <TextField value={this.state.user.lastname}/><br/>
      <TextField value={this.state.user.dob}/><br/>
      <TextField value={this.state.user.street}/><br/>
      <TextField value={this.state.user.city}/><br/>
      <TextField value={this.state.user.zip}/><br/>
      <TextField value={this.state.user.state}/><br/>
      <TextField value={this.state.user.drivinglicence}/><br/>
      <img style={styles.user.circular} src="http://profile.actionsprout.com/default.jpeg"/>
    </div>);
  }
}

export default User;
