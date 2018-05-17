import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import styles from '../../css';

class CoDriver extends Component {

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
    return (<div style={styles.codriver.posFields}>
      <h2>Co-Driver's profile tab</h2>
      You can edit co-driver's profile here.<br/>
      <TextField id="text-field-default" defaultValue="First name"/><br/>
      <TextField id="text-field-default" defaultValue="Last name"/><br/>
      <TextField id="text-field-default" defaultValue="Date of birth"/><br/>
      <TextField id="text-field-default" defaultValue="Street"/><br/>
      <TextField id="text-field-default" defaultValue="City"/><br/>
      <TextField id="text-field-default" defaultValue="ZIP"/><br/>
      <TextField id="text-field-default" defaultValue="State"/><br/>
      <TextField id="text-field-default" defaultValue="Driving licence"/><br/>
      <img style={styles.codriver.circular} src="http://profile.actionsprout.com/default.jpeg"/>
    <RaisedButton label="Choose an Image" labelPosition="before" style={styles.codriver.upload} containerElement="label"><input type="file" style={styles.codriver.imgInput}/></RaisedButton>
    </div>);
  }
}

export default CoDriver;
