import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import styles from '../css';

class EventsComp extends Component {

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
    return (<div style={styles.events.slide}>
      <List>
        <Paper style={styles.events.eventTables} zDepth={2}>
          <ListItem primaryText="Kalendar pretekov"/>
          <ListItem secondaryText="3.1.2018 MRC Zimna Levoca"/>
          <ListItem secondaryText="4.2.2018 MRC Dobsinska zima"/>
          <ListItem secondaryText="10.3.2018 West-Lake Race Cestice"/>
          <ListItem secondaryText="8.4.2018 West-Lake Cup Bankov"/>
        </Paper>
      </List>
      <List>
        <Paper style={styles.events.info} zDepth={2}>
          <ListItem primaryText="Event description"/>
        <img style={styles.events.eventIm} src="http://www.minirallycup.sk/docs/mrc_dz_2017_plagat.jpg"/>
      <Paper style={styles.events.text} zDepth={0}>"Zimna automobilova sutaz, nielen pre profesionalnych jazdcov, zaradena do podujatia MRC 2018."</Paper>
    <RaisedButton containerElement={<Link to = "/EventRegistration" />} label="Registration" secondary={true}/>
      </Paper>
      </List>
    </div>);
  }
}

export default EventsComp;
