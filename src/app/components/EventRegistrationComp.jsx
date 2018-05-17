import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import styles from '../css';

export default class EventRegistrationComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <div style={styles.eventregcomp.evRegTab}>
        <div style={styles.eventregcomp.topText}>Registration</div>
        <TextField hintText="Driver's First name"/>
        <TextField hintText="Driver's Last name"/><br/>
        <TextField hintText="E-mail"/>
        <TextField hintText="Phone number"/><br/>
        <TextField hintText="Street"/>
        <TextField hintText="Street number"/><br/>
        <TextField hintText="City"/>
        <TextField hintText="State"/><br/>
        <TextField hintText="ZIP"/><br/><br/><br/>
        <TextField hintText="Co-Driver's First name"/>
        <TextField hintText="Co-Driver's Last name"/><br/>
        <TextField hintText="Phone number"/>
        <TextField hintText="Street"/><br/>
        <TextField hintText="Street number"/>
        <TextField hintText="City"/><br/>
        <TextField hintText="State"/>
        <TextField hintText="ZIP"/><br/>
        <br/><RaisedButton containerElement={<Link to = "/" />} label="Submit" primary={true} style={styles.eventregcomp.submit}/>
      <RaisedButton containerElement={<Link to = "/" />} label="Cancel" secondary={true} style={styles.eventregcomp.cancel}/>
      </div>
      <div style={styles.eventregcomp.evRegTabCar}>
        <TextField hintText="Car's manufacturer"/>
      <TextField hintText="Model"/><br/>
    <TextField hintText="value"/>
        <TextField hintText="Fuel"/><br/>
        <TextField hintText="Power"/>
        <TextField hintText="Gear"/><br/>
        <TextField hintText="Turbo"/>
        <TextField hintText="EVC"/><br/>
      </div>
    </div>);
  }
}
