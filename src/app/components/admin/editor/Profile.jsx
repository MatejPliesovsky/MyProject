import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

import styles from '../../../css';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: 'Dano',
        lastname: 'Tutko',
        dob:'20.3.1997',
        street: 'Lomnicka 3',
        city: 'Kosice',
        zip: '040 01',
        country: 'Slovakia',
        drivinglicence: 'EX003344'
      },
      open:false
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
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };



  render() {

    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} containerElement={<Link to = "/AdminDash" />} />,
      <FlatButton label="Discard" primary={true} onClick={this.handleClose} containerElement={<Link to = "/AdminDash" />}  />
    ];

    return (<div style={styles.profile.slide}>
      <RaisedButton onClick={this.handleOpen} label="Submit" primary={true} style={styles.profile.save}/>
  <RaisedButton onClick={this.handleOpen} label="Cancel" secondary={true} style={styles.profile.cancel}/>
<Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>  Discard changes?
  </Dialog>
      <List>
        <Paper style={styles.profile.profileTable} zDepth={2}>
          <div style={styles.profile.text}>
            <TextField value={this.state.user.firstname}/><br/>
            <TextField value={this.state.user.lastname}/><br/>
            <TextField value={this.state.user.dob}/><br/>
            <TextField value={this.state.user.street}/><br/>
          <TextField value={this.state.user.city}/><br/>
            <TextField value={this.state.user.zip}/><br/>
          <TextField value={this.state.user.country}/><br/>
            <TextField value={this.state.user.drivinglicence}/><br/>
          </div>
          <img style={styles.profile.circular} src="http://profile.actionsprout.com/default.jpeg"/>
        </Paper>
      </List>
    </div>);
  }
}

export default Profile;
