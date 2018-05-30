import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import styles from '../../css';

class Car extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={styles.car.posFields}>
      <h2>Údaje o vozidle</h2>
      Tu môžete upraviť údaje o vozidle.<br/>
      <TextField id="text-field-default" defaultValue="Výrobca"/><br/>
      <TextField id="text-field-default" defaultValue="Model"/><br/>
      <TextField id="text-field-default" defaultValue="Objem motora"/><br/>
      <TextField id="text-field-default" defaultValue="Výkon"/><br/>
      <TextField id="text-field-default" defaultValue="Turbo"/><br/>
      <TextField id="text-field-default" defaultValue="Pohon"/><br/>
      <img style={styles.car.carsIm} src="http://elektronika.com.pl/wp-content/uploads/2014/03/grupa-osobowe.png"/>
      <RaisedButton label="Nahrať fotku" labelPosition="before" style={styles.car.upload} containerElement="label"><input type="file" style={styles.car.imgInput}/></RaisedButton>
    </div>);
  }
}

export default Car;
