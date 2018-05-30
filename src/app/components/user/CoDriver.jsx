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
      <h2>Profil spolujzdca</h2>
      Tu môžete upraviť profil spolujazdca.<br/>
      <TextField id="text-field-default" defaultValue="Meno"/><br/>
      <TextField id="text-field-default" defaultValue="Priezvisko"/><br/>
      <TextField id="text-field-default" defaultValue="Dátum narodenia"/><br/>
      <TextField id="text-field-default" defaultValue="Ulica a číslo"/><br/>
      <TextField id="text-field-default" defaultValue="Mesto"/><br/>
      <TextField id="text-field-default" defaultValue="PSČ"/><br/>
      <TextField id="text-field-default" defaultValue="Štát"/><br/>
      <TextField id="text-field-default" defaultValue="Licencia"/><br/>
      <img style={styles.codriver.circular} src="http://profile.actionsprout.com/default.jpeg"/>
      <RaisedButton label="Nahrať fotku" labelPosition="before" style={styles.codriver.upload} containerElement="label"><input type="file" style={styles.codriver.imgInput}/></RaisedButton>
    </div>);
  }
}

export default CoDriver;
