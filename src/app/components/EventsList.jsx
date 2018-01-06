import React from 'react';
import Paper from 'material-ui/Paper';
import {List,ListItem} from 'material-ui/List';

import styles from '../css';

export default class EventsList extends React.Component{
  constructor(props){
    super(props);<ListItem secondaryText=""/>
  }
  render() {
    return (
      <div>
        <List>
          <Paper style={styles.homeevents.table} zDepth={2}>
            <ListItem primaryText="Kalendar pretekov"/>
            <ListItem secondaryText="3.1.2018 MRC Zimna Levoca"/>
            <ListItem secondaryText="4.2.2018 MRC Dobsinska zima"/>
            <ListItem secondaryText="10.3.2018 West-Lake Race Cestice"/>
            <ListItem secondaryText="8.4.2018 West-Lake Cup Bankov"/>
          </Paper>
      </List>
    </div>
    );
  }
}
