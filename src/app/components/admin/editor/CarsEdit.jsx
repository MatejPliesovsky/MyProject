import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

import styles from '../../../css';

class CarsEdit extends Component {

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
    return (<div style={styles.carsedit.slide}>
      <RaisedButton containerElement={<Link to = "/AdminDash" />} label="Submit" primary={true} style={styles.carsedit.save}/>
    <RaisedButton containerElement={<Link to = "/AdminDash" />} label="Cancel" secondary={true} style={styles.carsedit.cancel}/>
      <List>
        <Paper style={styles.carsedit.profileTable} zDepth={0}>
          <div style={styles.carsedit.text}>
            <TextField id="text-field-default" defaultValue="Brand" /><br />
              <TextField id="text-field-default" defaultValue="Model" /><br />
              <TextField id="text-field-default" defaultValue="Fuel" /><br />
              <TextField id="text-field-default" defaultValue="Power" /><br />
              <TextField id="text-field-default" defaultValue="Turbo" /><br />
              <TextField id="text-field-default" defaultValue="Gear" /><br />
          </div>
          <img style={styles.carsedit.carsIm} src="http://elektronika.com.pl/wp-content/uploads/2014/03/grupa-osobowe.png"/>
        </Paper>
      </List>
    </div>);
  }
}

export default CarsEdit;
