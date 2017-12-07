import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  bgPaper: {
    height: 220,
    width: 480,
    marginTop: -46 + '%',
    marginLeft: 60 + '%',
    marginBottom: 10 + '%',
    marginRight: 18 + '%',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#43A047'
  },
  submit: {
    width: 100,
    height: 45,
    marginTop: 1 + '%',
    marginRight: 40 + '%',
    marginBottom: 0 + '%'
  },
  cancel: {
    width: 100,
    height: 45,
    marginTop: -9 + '%',
    marginLeft: 40 + '%',
    marginBottom: 0 + '%'
  }
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <List>
        <Paper style={styles.bgPaper} zDepth={2}><ListItem primaryText="Prihlasenie"/>
          <TextField hintText="Hint Text"/><br/>
          <TextField hintText="Hint Text"/>
          <RaisedButton containerElement={<Link to="/UserDash"/>} label="Submit" primary={true} style={styles.submit} />
        <RaisedButton containerElement={<Link to="/AdminDash"/>} label="Cancel" primary={true} style={styles.cancel} />
      </Paper>
    </List>
  </div>);
  }
}
