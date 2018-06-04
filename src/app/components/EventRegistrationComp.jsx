import React from 'react';
import {Form, Field} from 'react-final-form';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {compose, lifecycle} from 'recompose';
import {sessionService} from 'redux-react-session';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import TextField from './ff-mui/TextField';
import HiddenField from './ff-mui/HiddenField';
import styles from '../css';

const onSubmit = async values => {
  await doInsertCar(values);
}

const EventRegistrationComp = ({initialData}) => {
  console.log(initialData);
  let authenticated = window.sessionStorage.getItem("authenticated");
  // window.sessionStorage.setItem("authenticated", true);
  if (authenticated === "true")
  
    return (<Form onSubmit={onSubmit} initialValues={initialData} validate={values => {
        const errors = {};

      }} render={({handleSubmit, pristine, invalid}) => (<form onSubmit={handleSubmit}>
        <div>
          <RaisedButton containerElement={<Link to = "/Details" />} label="Späť" secondary={true} style={styles.eventregcomp.back}/>
          <div style={styles.eventregcomp.evRegTab}>
            <div style={styles.eventregcomp.topText}>Prihláška</div>
            <ListItem primaryText="Údaje o jazdcovi"/>
            <Field id="firstname" name="firstname" component={TextField} placeholder="Meno"/>
            <Field id="lastname" name="lastname" component={TextField} placeholder="Priezvisko"/>
            <Field id="dob" name="dob" component={TextField} placeholder="Dátum narodenia"/>
            <Field id="street" name="street" component={TextField} placeholder="Ulica"/>
            <Field id="city" name="city" component={TextField} placeholder="Mesto"/>
            <Field id="zip" name="zip" component={TextField} placeholder="PSČ"/>
            <Field id="state" name="state" component={TextField} placeholder="Štát"/>
            <Field id="phone" name="phone" component={TextField} placeholder="Telefón"/>
            <Field id="email" name="email" component={TextField} placeholder="E-mail"/>
            <Field id="team" name="team" component={TextField} placeholder="Tím"/>
            <Field id="drivinglicence" name="drivinglicence" component={TextField} placeholder="Číslo vodičského preukazu"/>
          </div>
          <div style={styles.eventregcomp.evRegCoDriverTab}>
            <ListItem primaryText="Údaje o spolujazdcovi"/>
            <Field id="co_firstname" name="co_firstname" component={TextField} placeholder="Meno"/>
            <Field id="co_lastname" name="co_lastname" component={TextField} placeholder="Priezvisko"/><br/>
            <Field id="co_dob" name="co_dob" component={TextField} placeholder="Dátum narodenia"/>
            <Field id="co_street" name="co_street" component={TextField} placeholder="Ulica"/><br/>
            <Field id="co_city" name="co_city" component={TextField} placeholder="Mesto"/>
            <Field id="co_zip" name="co_zip" component={TextField} placeholder="PSČ"/><br/>
            <Field id="co_state" name="co_state" component={TextField} placeholder="Štát"/>
            <Field id="co_phone" name="co_phone" component={TextField} placeholder="Telefón"/><br/>
            <Field id="co_email" name="co_email" component={TextField} placeholder="E-mail"/>
            <Field id="co_team" name="co_team" component={TextField} placeholder="Tím"/><br/>
            <Field id="co_drivinglicence" name="co_drivinglicence" component={TextField} placeholder="Číslo vodičského preukazu"/>
            <br/>
            <br/>
          </div>
          <div style={styles.eventregcomp.evRegTabCar}>
            <ListItem primaryText="Údaje o vozidle"/>
            <Field id="manufacturer" name="manufacturer" component={TextField} placeholder="Výrobca"/>
            <Field id="carmodel" name="carmodel" component={TextField} placeholder="Model"/><br/>
            <Field id="enginevalue" name="enginevalue" component={TextField} placeholder="Objem motora"/>
            <Field id="power" name="power" component={TextField} placeholder="Výkon"/><br/>
            <Field id="turbo" name="turbo" component={TextField} placeholder="Turbo"/>
            <Field id="gear" name="gear" component={TextField} placeholder="Pohon"/><br/>
            <Field id="evidence_number" name="evidence_number" component={TextField} placeholder="ŠPZ"/>
            <br/>

          <button type="submit" disabled={pristine || invalid}>
              Potrvdiť
            </button>
          </div>

        </div>
      </form>)}/>)
}

export default compose(lifecycle({
  componentWillMount() {
    console.log(":DidMount");
    axios.get('/userProfile/loadUserData').then((response) => {
      console.log(response.data.authenticated);
      if (response.data.authenticated === false) {
        window.sessionStorage.setItem("authenticated", false);
        window.location = "/";
      }
      // window.sessionStorage.setItem("authenticated", true);
      console.log('response');
      console.log(response);
      this.setState({user: response.data});
    }).catch((error) => {
      console.log(error);
    });;

    console.log(this.props)
  }
}))(EventRegistrationComp);
