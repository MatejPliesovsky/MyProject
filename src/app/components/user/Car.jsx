import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import styles from '../../css';

class Car extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.car.posFields}>
          <h2>Car's details</h2>
          You can edit car's detais here.<br />
        <TextField id="text-field-default" defaultValue="Brand" /><br />
          <TextField id="text-field-default" defaultValue="Model" /><br />
          <TextField id="text-field-default" defaultValue="Fuel" /><br />
          <TextField id="text-field-default" defaultValue="Power" /><br />
          <TextField id="text-field-default" defaultValue="Turbo" /><br />
          <TextField id="text-field-default" defaultValue="Gear" /><br />
        <img style={styles.car.carsIm} src="http://elektronika.com.pl/wp-content/uploads/2014/03/grupa-osobowe.png"/>
  </div>
  );
  }
}

export default Car;
