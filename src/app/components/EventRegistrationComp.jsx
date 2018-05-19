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
        <ListItem primaryText="Údaje o jazdcovi"/>
        <TextField hintText="Meno"/>
        <TextField hintText="Priezvisko"/><br/>
        <TextField hintText="E-mail"/>
        <TextField hintText="Telefón"/><br/>
        <TextField hintText="Ulica"/>
        <TextField hintText="Číslo domu"/><br/>
        <TextField hintText="Mesto"/>
        <TextField hintText="PSČ"/><br/>
        <TextField hintText="Štát"/>
        <TextField hintText="Číslo vodičského preukazu"/><br/><br/><br/>

        <ListItem primaryText="Údaje o spolujazdcovi"/>
        <TextField hintText="Meno"/>
        <TextField hintText="Priezvisko"/><br/>
        <TextField hintText="E-mail"/>
        <TextField hintText="Telefón"/><br/>
        <TextField hintText="Ulica a číslo"/>
        <TextField hintText="Mesto"/><br/>
        <TextField hintText="PSČ"/>
        <TextField hintText="Štát"/><br/>
        <br/><RaisedButton containerElement={<Link to = "/" />} label="Odoslať" primary={true} style={styles.eventregcomp.submit}/>
        <RaisedButton containerElement={<Link to = "/" />} label="Zrušiť" secondary={true} style={styles.eventregcomp.cancel}/>
      </div>
      <div style={styles.eventregcomp.evRegTabCar}>
        <ListItem primaryText="Údaje o vozidle"/>
        <TextField hintText="Výrobca"/>
        <TextField hintText="Model"/><br/>
        <TextField hintText="Objem"/>
        <TextField hintText="Výkon"/><br/>
        <TextField hintText="Palivo"/>
        <TextField hintText="Pohon"/><br/>
        <TextField hintText="Turbo"/>
        <TextField hintText="EVČ"/><br/>
      </div>
    </div>);
  }
}
