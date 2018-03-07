import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Settings from 'material-ui/svg-icons/action/settings';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  position: {
    marginTop: -650
  },
  content: {
    marginLeft: 70
  },

  headline: {
    fontSize: 50,
    padding: 15,
    marginBottom: 2 + '%',
    fontWeight: 200
  },

  line1: {
    width: 600,
    marginTop: 2 + '%',
    marginBottom: 2 + '%',
    border: '1px solid black'
  },

  line2: {
    width: 500,
    marginTop: 2 + '%',
    marginBottom: 5 + '%',
    border: '1px solid black'
  },

  btnGetStarted: {
    width: 200,
    height: 65
  },
  settings:{
    margin:10,
  },
  cancel:{
    margin:10
  },
};

export default class HomeScreenComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<center>
      <div style={styles.position}>
        <div style={styles.content}>
          <div style={styles.headline}>WELCOME TO REGISTRATION PORTAL
            <br/>For Motor-Sport Events</div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_wSgacwPTqyKPJqfue0UxKlRdQ2CWUfzD8ZaPgO7OLgSlNCX"/>
            <div style={styles.line1}></div>
          <RaisedButton containerElement={<Link to="/Events"/>} label="Events" primary={true} style={styles.daterange} icon={<DateRange />}/>
          <RaisedButton containerElement={<Link to="/UserDash"/>} label="Settings" primary={true} style={styles.settings} icon={<Settings />}/>
        <RaisedButton lcontainerElement={<Link to="/UserHomeScreen"/>} label="Cancel" secondary={true} style={styles.cancel} icon={<Cancel />}/>
            <div style={styles.line2}></div>
          </div>
        </div>
      </div>
    </center>);
  }
}
