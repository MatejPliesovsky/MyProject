import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import styles from '../../css';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ''
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
    return (<div style={styles.user.posFields}>
      <h2 >Profile tab</h2>
      You can edit your profile here.<br/>
    <TextField style={styles.user.headline} value={this.state.user.name}/><br/>
      <TextField defaultValue="Last name"/><br/>
      <TextField defaultValue="Date of birth"/><br/>
      <TextField defaultValue="Adress"/><br/>
      <TextField defaultValue="Driving licence"/><br/>
      <img style={styles.user.circular} src="http://profile.actionsprout.com/default.jpeg"/>
    </div>);
  }
}

export default User;
