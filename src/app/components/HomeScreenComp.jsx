import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Settings from 'material-ui/svg-icons/action/settings';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import FontIcon from 'material-ui/FontIcon';

import styles from '../css';

export default class HomeScreenComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<center>
      <div style={styles.homescreen.position}>
        <div style={styles.homescreen.content}>
          <div style={styles.homescreen.headline}>WELCOME TO REGISTRATION PORTAL
            <br/>For Motor-Sport Events</div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_wSgacwPTqyKPJqfue0UxKlRdQ2CWUfzD8ZaPgO7OLgSlNCX"/>
            <div style={styles.homescreen.line1}></div>
          <RaisedButton containerElement={<Link to="/Events"/>} label="Events" primary={true} style={styles.homescreen.daterange} icon={<DateRange />}/>
          <RaisedButton containerElement={<Link to="/UserDash"/>} label="Settings" primary={true} style={styles.homescreen.settings} icon={<Settings />}/>
        <RaisedButton lcontainerElement={<Link to="/UserHomeScreen"/>} label="Cancel" secondary={true} style={styles.homescreen.cancel} icon={<Cancel />}/>
            <div style={styles.homescreen.line2}></div>
          </div>
        </div>
      </div>
    </center>);
  }
}
